"use client";
import Link from "next/link";
import { User } from "@supabase/supabase-js";
import {
  LayoutDashboard,
  ArrowRightLeft,
  Home,
  HeadphonesIcon,
  LogOut,
  ChevronDown,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface NavbarProps {
  user: User;
}

export function Navbar({ user }: NavbarProps) {
  const [isRealEstateOpen, setIsRealEstateOpen] = useState(false);

  const toggleRealEstateDropdown = () => {
    setIsRealEstateOpen(!isRealEstateOpen);
  };

  return (
    <nav className="bg-white text-[#1D3557] shadow-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={120}
                height={80}
                className="rounded-full"
              />
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/dashboard"
              className="flex items-center space-x-2 hover:text-blue-600"
            >
              <LayoutDashboard size={20} />
              <span>Dashboard</span>
            </Link>

            <Link
              href="/transactions"
              className="flex items-center space-x-2 hover:text-blue-600"
            >
              <ArrowRightLeft size={20} />
              <span>Transactions</span>
            </Link>

            <div className="relative">
              <button
                onClick={() => toggleRealEstateDropdown()}
                className="flex items-center space-x-2 hover:text-blue-600 focus:outline-none"
              >
                <Home size={20} />
                <span>Real estate</span>
                <ChevronDown size={16} />
              </button>

              {isRealEstateOpen && (
                <div className="absolute mt-2 w-48 border bg-white rounded-lg shadow-lg">
                  <Link
                    href="/real-estate/assets"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Assets
                  </Link>
                  <Link
                    href="/real-estate/properties"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Properties
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/pricing"
              className="flex items-center space-x-2 hover:text-blue-600"
            >
              <HeadphonesIcon size={20} />
              <span>Pricing</span>
            </Link>

            <Link
              href="/support"
              className="flex items-center space-x-2 hover:text-blue-600"
            >
              <HeadphonesIcon size={20} />
              <span>Support</span>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-2 hover:text-blue-600">
              <LogOut size={20} />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
