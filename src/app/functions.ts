// import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
// import { cookies } from "next/headers";

import { getUserSupabase } from "../lib/supabase/client";

// const supabase = createServerComponentClient({ cookies });
export function getUser() {
  try {
    let user: any = JSON.parse(localStorage.getItem("advanta-user")!) || {};
    let session: any = JSON.parse(
      localStorage.getItem("advanta-user-session")!
    );

    console.log(session, "session is here in user func");
    // getUserSupabase()
    //   .then((data) => {
    //     user = data;
    //     console.log(user, "user is here v2");
    //     return user;
    //   })
    //   .catch((error) => {
    //     console.error("Error fetching user:", error);
    //     return null;
    //   });
    //JSON.parse(localStorage.getItem("advanta-user")!) || null;
    return user || null;
  } catch (error) {
    console.error("Error fetching user:", error);
    return null;
  }
}
export function getSession() {
  try {
    let session: any = JSON.parse(
      localStorage.getItem("advanta-user-session")!
    );
    console.log(session, "session is here");
    //JSON.parse(localStorage.getItem("advanta-user")!) || null;
    return session || null;
  } catch (error) {
    console.error("Error fetching user session:", error);
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

export const getAUser = () => {
  try{
    let user: any = JSON.parse(localStorage.getItem("advanta-user")!) || {};
    console.log(user, "user is here v2");
    return user;
  }catch(error){
    console.error("Error fetching user:", error);
    return
  }
}