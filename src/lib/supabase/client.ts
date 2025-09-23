import { createClient } from "@supabase/supabase-js";
import { schemaName } from "../../consts";
import { getSession, getUser } from "../../app/functions";


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
    console.log('error',error);
    console.log(error.message);
    throw error.message;
  }
  localStorage.setItem("advanta-user-session", JSON.stringify(data.session));
  localStorage.setItem("advanta-user", JSON.stringify(data.user));
  return true;
};

const handleSendMail = async (email:string, firstname:string, lastname:string) => {
  console.log(email, firstname, lastname);
  const response = await fetch("/api/welcome", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, firstname}),
  });

  const text = await response.text();
  try {
    const data = JSON.parse(text);
    console.log(data);
  } catch (error) {
    console.error("API returned non-JSON response:", text);
  }
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
    // Sign up user in Supabase Auth
    const { data, error: signUpError } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
    });

    if (signUpError) throw signUpError;

    const userId = data?.user?.id;
    if (!userId) throw new Error("User ID not found after sign-up");

    // Insert user data into profiles table
    const { error: insertError } = await supabase.from("profiles").insert({
      id: userId, // Match the auth.users id
      full_name: formData.fullName,
      username: formData.username,
      email: formData.email,
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
    });

    if (insertError) throw insertError;

    // Store user session in localStorage (optional)
    localStorage.setItem("advanta-user", JSON.stringify(data.user));

    // Send email notification (if applicable)
    await handleSendMail(formData.email, formData.fullName, formData.username);

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
    console.log(users)
    return users;
  } catch (error) {
    console.error("Error retrieving authenticated users:", error);
    throw error;
  }
};


export const createDeposit = async (depositData: {
  amount: number;
  method: string;
}) => {
  try {
    const user = await getUser(); // Ensure the user is authenticated
    if (!user) {
      throw new Error("No authenticated user found");
    }

    const { data, error } = await supabase
      .from("deposits")
      .insert({
        user_id: user.id,
        ...depositData,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        status: "pending", // Default status
      })
      .select()
      .single();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error("Error creating deposit:", error);
    throw error;
  }
};

export const approveDeposit = async (depositId: string) => {
  try {
    // Step 1: Update the deposit status to "approved"
    const { data: deposit, error: depositError } = await supabase
      .from("deposits")
      .update({ status: "approved", updated_at: new Date().toISOString() })
      .eq("id", depositId)
      .select()
      .single();

    if (depositError) throw depositError;
    if (!deposit) throw new Error("Deposit not found");

    // Step 2: Get the user ID from the deposit record
    const userId = deposit.user_id;

    // Step 3: Fetch the current balance of the user
    const { data: user, error: userError } = await supabase
      .from("users") // Ensure this matches your schema
      .select("balance")
      .eq("id", userId)
      .single();

    if (userError) throw userError;
    if (!user) throw new Error("User not found");

    // Step 4: Calculate new balance
    const newBalance = (user.balance || 0) + deposit.amount;

    // Step 5: Update the user's balance
    const { error: balanceError } = await supabase
      .from("users") // Ensure this matches your schema
      .update({ balance: newBalance, updated_at: new Date().toISOString() })
      .eq("id", userId);

    if (balanceError) throw balanceError;

    return { success: true, message: "Deposit approved and balance updated" };
  } catch (error) {
    console.error("Error approving deposit:", error);
    throw error;
  }
};


export const updateUserBalance = async (userId: string, amount: number) => {
  try {
    const { data, error } = await supabase.rpc("increment_user_balance", { user_id: userId, amount });

    if (error) throw error;
    return data;
  } catch (error) {
    console.error("Error updating balance:", error);
    throw error;
  }
};

export const getUserDeposits = async () => {
  try {
    const user = await getUser(); // Ensure the user is authenticated
    if (!user) {
      throw new Error("No authenticated user found");
    }
    const { data, error } = await supabase
      .from("deposits")
      .select("*")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false });

    if (error) throw error;
    return data;
  } catch (error) {
    console.error("Error retrieving user deposits:", error);
    throw error;
  }
}



