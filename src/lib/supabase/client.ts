import { createClient } from "@supabase/supabase-js";
import { getSupabaseClient, getSupabaseServerClient } from "./utils";
import { schemaName } from "../../consts";
import { getSession, getUser } from "../../app/functions";
import { getAUser } from "../../app/functions";


export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  {
    auth: {
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: true,
    },
  }
);

export const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY!,
  {
    auth: {
      autoRefreshToken: true,
      persistSession: true,
    },
  }
);

// Login function
export const login = async (email: string, password: string) => {
  const { error, data } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) {
    console.log(error.message);
    throw error.message;
  }
  localStorage.setItem("advanta-user-session", JSON.stringify(data.session));
  localStorage.setItem("advanta-user", JSON.stringify(data.user));
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
  //fields
  // balance
  // total_assets
  // total_dividends
  // total_funding
  // total_withdrawals
  // total_properties
  // total_properties_invested
  // total_properties_sale
  // total_properties_rent
  try {
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
          balance: 0,
          total_funding: 0,
          total_withdrawals: 0,
          total_properties: 0,
          total_properties_invested: 0,
          total_properties_sale: 0,
          total_properties_rent: 0,
          total_assets: 0,
          total_dividends: 0,
          approved: false,
        },
      },
    });
    if (signUpError) throw signUpError;
    await supabase
      .schema(schemaName)
      .from("users")
      .insert({
        userId: data?.user?.id,
        fullName: formData.fullName,
        username: formData.username,
        email: formData.email,
        password: formData.password,
        phone: formData.phone,
        country: formData.country,
        referralName: formData.referralName || null,
      });
    localStorage.setItem("advanta-user", JSON.stringify(data.user));
    return data.user;
  } catch (error) {
    console.error("Registration error:", error);
    throw error;
  }
};

export const getUserSupabase = async (token?: string) => {
  try {
    const session = getSession();
    console.log(session, "session is here");
    const { data: user } = await supabase.auth.getUser(
      token || session?.access_token
    );
    if (!user) {
      throw new Error("No authenticated user found");
    }
    return user || null;
  } catch (error) {
    console.error("Error retrieving user from supabase:", error);
    // throw error;
    return null;
  }
};

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

    if (error) throw error;
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

export const addFundingRecord = async (fundingData: {
  method: "Bank" | "Crypto" | "Other";
  property: string;
  amount: number;
  wallet?: string;
  wallet_address?: string;
}) => {
  try {
    const user = await getUser();
    if (!user) {
      throw new Error("No authenticated user found");
    }

    const { data, error } = await supabase
      .from(`funding_records_view`)
      .insert({
        user_id: user.id,
        ...fundingData,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        status: "pending",
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

export const getUserFundingRecords = async (user_id:string) => {
  try {
    // const user = await getAUser();
    // console.log(user, "user is here");
    // if (!user) {
    //   console.log( "user is here");
    //   // throw new Error("No authenticated user found");
    // }

    const { data, error } = await supabase
      .from("funding_records_view")
      .select("*")
      .eq("user_id", user_id)
      .order("created_at", { ascending: false });

    if (error) throw error;
    return data;
  } catch (error) {
    console.error("Error retrieving funding records:", error);
    throw error;
  }
};

// Admin
export const loginAdmin = async (email: string, password: string) => {
  const { error, data } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) {
    console.log(error.message);
    throw error.message;
  }
  console.log(data);
  if (!data.user.user_metadata.admin) {
    throw new Error("User is not an admin");
  }
  localStorage.setItem("advanta-admin", JSON.stringify(data.user));
  return true;
};

export const registerAdmin = async (formData: {
  fullName: string;
  username: string;
  email: string;
  phone: string;
  password: string;
}) => {
  try {
    const { data, error: signUpError } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
      options: {
        data: {
          full_name: formData.fullName,
          username: formData.username,
          phone: formData.phone,
          admin: true,
        },
      },
    });

    if (signUpError) throw signUpError;
    await supabase.schema(schemaName).from("users").insert({
      userId: data?.user?.id,
      fullName: formData.fullName,
      username: formData.username,
      email: formData.email,
      password: formData.password,
      phone: formData.phone,
    });
    localStorage.setItem("advanta-admin", JSON.stringify(data.user));
    return data.user;
  } catch (error) {
    console.error("Registration error:", error);
    throw error;
  }
};

export const getAllFundingRecords = async () => {
  try {
    // const user = await getAdmin();
    // if (!user) {
    //   throw new Error("No authenticated user found");
    // }

    const { data, error } = await supabase
      .from("funding_records_view")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) throw error;
    return data;
  } catch (error) {
    console.error("Error retrieving funding records:", error);
    throw error;
  }
};

export const getAllUsers = async () => {
  try {
    const {
      data: { users },
      error,
    } = await supabaseAdmin.auth.admin.listUsers();

    if (error) throw error;
    return users;
  } catch (error) {
    console.error("Error retrieving authenticated users:", error);
    throw error;
  }
};

export const addTransactionRecord = async (record: any) => {
  return true;
};
