import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "../components/navbar";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getUser } from "../consts";

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
  // const { data: session }: any = await supabase.auth.getUser();
  // console.log("Session in layout:", session);
  // const supabase = createServerComponentClient({ cookies });

  // const {
  //   data: { user },
  // } = await supabase.auth.getUser();
  const protectedRoutes = [
    "/dashboard",
    "/transactions",
    "/real-estate",
    "/pricing",
    "/support",
  ];
  const currentPath = cookies().get("path")?.value || "/";

  // if (protectedRoutes.includes(currentPath)) {
  //   redirect("/login");
  // }

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-black text-white">
          <Navbar />
          <main className="container mx-auto px-4 py-8">{children}</main>
          <div className="bg-black text-white border-t border-[#FFFFFF33]">
            <div className="my-11 mx-auto md:w-[600px]">
              <div className="flex justify-between items-center">
                <div className="flex flex-col gap-4">
                  <p className="text-red-500">Call Us</p>
                  <p>+44 74142 69127</p>
                </div>

                <div className="flex flex-col gap-4">
                  <p className="text-red-500">Email Us</p>
                  <p>support@advantawealth.co</p>
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
