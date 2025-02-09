"use client";
export const schemaName = "advanta";

export const getUser = async () => {
  try {
    const user = JSON.parse(localStorage.getItem("advanta-user")!);
    console.log(user);
    return user;
  } catch (error: any) {
    console.error("Error fetching user:", error.message);
    // throw error;
    return null;
  }
};
