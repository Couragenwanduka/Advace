import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "../components/navbar";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Advanta Wealth",
  description: "Real Estate Investment Platform",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createServerComponentClient(
    { cookies },
    {
      supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
      supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL,
    }
  );
  const {
    data: { session },
  } = await supabase.auth.getSession();

  const protectedRoutes = [
    "/dashboard",
    "/transactions",
    "/real-estate",
    "/pricing",
    "/support",
  ];
  const currentPath = cookies().get("path")?.value || "/";

  if (!session && protectedRoutes.includes(currentPath)) {
    redirect("/login");
  }

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-black text-white">
          {session && <Navbar user={session.user} />}
          <main className="container mx-auto px-4 py-8">{children}</main>
          <div className="bg-black text-white border-t border-[#FFFFFF33]">
            <div className="my-11 mx-auto md:w-[600px]">
              <div className="flex justify-between items-center">
                <div className="flex flex-col gap-4">
                  <p className="text-red-500">Call Us</p>
                  <p>+44 7441 393510</p>
                </div>

                <div className="flex flex-col gap-4">
                  <p className="text-red-500">Email Us</p>
                  <p>admin@advantawealthinvest.biz</p>
                </div>
              </div>
            </div>
            <div className="container mx-auto px-4 py-8">
              <p className="text-center text-sm">
                Copyright © 2025 Advanta Wealth. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
