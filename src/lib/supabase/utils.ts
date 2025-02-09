"use server";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { createServerClient, createBrowserClient } from "@supabase/ssr";
import { createClient } from "@supabase/supabase-js";

export const getSupabaseClient = () => {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
  //   return createClientComponentClient({
  //     supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL,
  //     supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  //   });
  //   return createBrowserClient(
  //     process.env.NEXT_PUBLIC_SUPABASE_URL!,
  //     process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  //   );
};

export const getSupabaseServerClient = () => {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
        detectSessionInUrl: false,
      },
    }
  );
  //   const cookieStore = cookies();

  //   // Create a server's supabase client with newly configured cookie,
  //   // which could be used to maintain user's session
  //   return createServerClient(
  //     process.env.NEXT_PUBLIC_SUPABASE_URL!,
  //     process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  //     {
  //       cookies: {
  //         getAll() {
  //           return cookieStore.getAll();
  //         },
  //         setAll(cookiesToSet) {
  //           try {
  //             cookiesToSet.forEach(({ name, value, options }) =>
  //               cookieStore.set(name, value, options)
  //             );
  //           } catch {
  //             // The `setAll` method was called from a Server Component.
  //             // This can be ignored if you have middleware refreshing
  //             // user sessions.
  //           }
  //         },
  //       },
  //     }
  //   );
};
