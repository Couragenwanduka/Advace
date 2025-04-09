import { createClient } from "@supabase/supabase-js";
import {  getUser } from "../../app/functions";


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


export const createWithdrawal = async (withdrawalData: {
    amount: number;
    method: string;
    address: string;
  }) => {
    try {
     const authUser = await getUser();
      const userId = authUser.id;
  
      // Fetch the user's profile from the 'profiles' table
      const { data: userProfile, error: profileError } = await supabase
        .from("profiles")
        .select("balance")
        .eq("id", userId)
        .maybeSingle();
  
      if (profileError) throw profileError;
      if (!userProfile) throw new Error("User profile not found");
  
      const currentBalance = userProfile.balance || 0; // Ensure balance is fetched correctly
  
      // Check if the user has enough funds to withdraw
      if (currentBalance < withdrawalData.amount) {
        return ("Insufficient balance");
      }
  
      // Insert the withdrawal request
      const { data: withdrawal, error: withdrawalError } = await supabase
        .from("withdrawals")
        .insert({
          user_id: userId,
          ...withdrawalData,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
          status: "pending", // Default status
        })
        .select()
        .maybeSingle();
  
      if (withdrawalError) throw withdrawalError;
  
      return { success: true, message: "Withdrawal request created", withdrawal };
    } catch (error) {
      console.error("Error creating withdrawal:", error);
      throw error;
    }
  };
  
  
  
  export const approveWithdrawal = async (withdrawalId: string) => {
    try {
      // Get withdrawal details
      const { data: withdrawal, error: withdrawalError } = await supabase
        .from("withdrawals")
        .select("user_id, amount")
        .eq("id", withdrawalId)
        .single();
  
      if (withdrawalError) throw withdrawalError;
      if (!withdrawal) throw new Error("Withdrawal not found");
  
      // Get the user's current balance
      const { data: userData, error: userError } = await supabase
        .from("profiles")
        .select("balance")
        .eq("id", withdrawal.user_id)
        .single();
  
      if (userError) throw userError;
      if (!userData) throw new Error("User not found");
  
      const currentBalance = userData.balance || 0;
  
      // Ensure balance is sufficient (just in case)
      if (currentBalance < withdrawal.amount) {
        throw new Error("Insufficient balance to approve withdrawal");
      }
  
      // Deduct balance
      const newBalance = currentBalance - withdrawal.amount;
      const { error: balanceError } = await supabase
        .from("users")
        .update({ balance: newBalance, updated_at: new Date().toISOString() })
        .eq("id", withdrawal.user_id);
  
      if (balanceError) throw balanceError;
  
      // Mark withdrawal as approved
      const { error: statusError } = await supabase
        .from("withdrawals")
        .update({ status: "approved", updated_at: new Date().toISOString() })
        .eq("id", withdrawalId);
  
      if (statusError) throw statusError;
  
      return { success: true, message: "Withdrawal approved!" };
    } catch (error) {
      console.error("Error approving withdrawal:", error);
      throw error;
    }
  };
  