"use server";
import {
  createClientComponentClient,
  createServerComponentClient,
} from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

// Initialize Supabase client
const supabase = createClientComponentClient();

// Login function
export const login = async (email: string, password: string) => {
  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) {
    console.error("Login error:", error.message);
    throw error.message;
  }
  return true;
};

// User registration function
export const registerUser = async (formData: {
  fullName: string;
  username: string;
  email: string;
  phone: string;
  country: string;
  referralName?: string;
  password: string;
}) => {
  try {
    // First, sign up the user
    const { data, error: signUpError } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
      options: {
        data: {
          full_name: formData.fullName,
          username: formData.username,
          phone: formData.phone,
          country: formData.country,
          referral_name: formData.referralName || null,
        },
      },
    });

    if (signUpError) throw signUpError;

    // Return the user data
    return data.user;
  } catch (error) {
    console.error("Registration error:", error);
    throw error;
  }
};

// File upload utility function
export const uploadUserDocuments = async (
  userId: string,
  files: {
    selfie: File | null;
    idFront: File | null;
    idBack: File | null;
    proofOfAddress: File | null;
  }
) => {
  const uploadFile = async (file: File | null, path: string) => {
    if (!file) return null;

    const fileExt = file.name.split(".").pop();
    const filePath = `${path}.${fileExt}`;

    const { data, error } = await supabase.storage
      .from("user-documents")
      .upload(filePath, file);

    if (error) {
      console.error(`Upload error for ${path}:`, error);
      throw error;
    }

    return data.path;
  };

  try {
    const [selfiePath, idFrontPath, idBackPath, proofOfAddressPath] =
      await Promise.all([
        uploadFile(files.selfie, `${userId}/selfie`),
        uploadFile(files.idFront, `${userId}/id-front`),
        uploadFile(files.idBack, `${userId}/id-back`),
        uploadFile(files.proofOfAddress, `${userId}/proof-of-address`),
      ]);

    // Update user profile with document paths
    const { error: updateError } = await supabase
      .from("user_documents")
      .upsert({
        user_id: userId,
        selfie_path: selfiePath,
        id_front_path: idFrontPath,
        id_back_path: idBackPath,
        proof_of_address_path: proofOfAddressPath,
      });

    if (updateError) throw updateError;

    return {
      selfie: selfiePath,
      idFront: idFrontPath,
      idBack: idBackPath,
      proofOfAddress: proofOfAddressPath,
    };
  } catch (error) {
    console.error("Document upload error:", error);
    throw error;
  }
};

export const getUser = async () => {
  const supabase = createServerComponentClient({ cookies });
  try {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    return user;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
};
// Add funding record to the database
export const addFundingRecord = async (fundingData: {
  method: "Bank" | "Crypto" | "Other";
  property: string;
  amount: number;
  wallet?: string;
  wallet_address?: string;
}) => {
  try {
    // Get the current user
    const user = getUser() as any;

    if (!user) {
      throw new Error("No authenticated user found");
    }

    // Insert funding record
    const { data, error } = await supabase
      .from("funding_records")
      .insert({
        user_id: user.id,
        ...fundingData,
        created_at: new Date().toISOString(),
      })
      .select()
      .single();

    if (error) throw error;

    return data;
  } catch (error) {
    console.error("Error adding funding record:", error);
    throw error;
  }
};

// Retrieve all funding records for the current user
export const getUserFundingRecords = async () => {
  try {
    // Get the current user
    const user = getUser() as any;

    if (!user) {
      throw new Error("No authenticated user found");
    }

    // Fetch funding records
    const { data, error } = await supabase
      .from("funding_records")
      .select("*")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false });

    if (error) throw error;

    return data;
  } catch (error) {
    console.error("Error retrieving funding records:", error);
    throw error;
  }
};
