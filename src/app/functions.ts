// import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
// import { cookies } from "next/headers";
// const supabase = createServerComponentClient({ cookies });
export function getUser() {
  try {
    const user = JSON.parse(localStorage.getItem("advanta-user")!) || null;
    console.log(user);
    // console.log(supabase.auth.getUser());
    return user;
  } catch (error) {
    console.error("Error fetching user:", error);
    return null;
  }
}
export function getAdmin() {
  try {
    const user = JSON.parse(localStorage.getItem("advanta-admin")!) || null;
    console.log(user);
    return user;
  } catch (error) {
    console.error("Error fetching admin:", error);
    return null;
  }
}
