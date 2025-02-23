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
  Users,
} from "lucide-react";
import Image from "next/image";
import { use, useEffect, useState } from "react";
import { logout } from "../lib/supabase";
import { getAdmin, getUser } from "../app/functions";

interface NavbarProps {
  user: User;
}

export function Navbar() {
  const [isRealEstateOpen, setIsRealEstateOpen] = useState(false);
  const user = getUser();
  const admin = getAdmin();
  const toggleRealEstateDropdown = () => {
    setIsRealEstateOpen(!isRealEstateOpen);
  };
  if (admin) {
    console.log("Admin in navbar");
  }
  const prefix = admin ? "/admin" : "";

  return (
    <div className="flex flex-col">
      <nav className="bg-white text-[#1D3557] shadow-md">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <a href={prefix + "/"} className="flex items-center">
                <Image
                  src="/images/logo.png"
                  alt="Logo"
                  width={120}
                  height={80}
                  className="rounded-full"
                />
              </a>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a
                href={prefix + "/dashboard"}
                className="flex items-center space-x-2 hover:text-blue-600"
              >
                <LayoutDashboard size={20} />
                <span>Dashboard</span>
              </a>

              <a
                href={prefix + "/transactions"}
                className="flex items-center space-x-2 hover:text-blue-600"
              >
                <ArrowRightLeft size={20} />
                <span>Transactions</span>
              </a>

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
                    <a
                      href={prefix + "/real-estate/assets"}
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Assets
                    </a>
                    <a
                      href={prefix + "/real-estate"}
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Properties
                    </a>
                    <a
                      href={prefix + "/real-estate/funding"}
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Funding
                    </a>
                  </div>
                )}
              </div>

              <a
                href={prefix + "/pricing"}
                className="flex items-center space-x-2 hover:text-blue-600"
              >
                <HeadphonesIcon size={20} />
                <span>Pricing</span>
              </a>

              {admin && (
                <a
                  href={prefix + "/users"}
                  className="flex items-center space-x-2 hover:text-blue-600"
                >
                  <Users size={20} />
                  <span>Users</span>
                </a>
              )}

              <a
                href={prefix + "/support"}
                className="flex items-center space-x-2 hover:text-blue-600"
              >
                <HeadphonesIcon size={20} />
                <span>Support</span>
              </a>
            </div>

            {user != null && (
              <div className="flex items-center space-x-4">
                <button
                  className="flex items-center space-x-2 hover:text-blue-600"
                  onClick={() => {
                    localStorage.removeItem("advanta-user");
                    window.location.href = "/login";
                  }}
                >
                  <LogOut size={20} />
                  <span>Logout</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>
      <div
        style={{
          height: "62px",
          backgroundColor: "#FFFFFF",
          overflow: "hidden",
          boxSizing: "border-box",
          border: "1px solid #56667F",
          borderRadius: "4px",
          textAlign: "right",
          lineHeight: "14px",
          fontSize: "12px",
          boxShadow: "inset 0 -20px 0 0 #56667F",
          padding: "1px",
          margin: "0px",
          width: "100%",
        }}
      >
        <div
          style={{
            height: "40px",
            padding: "0px",
            margin: "0px",
            width: "100%",
          }}
        >
          <iframe
            src="https://widget.coinlib.io/widget?type=horizontal_v2&theme=light&pref_coin_id=1505&invert_hover="
            width="100%"
            height="36px"
            scrolling="auto"
            marginWidth={0}
            marginHeight={0}
            frameBorder={0}
            style={{ border: "0", margin: "0", padding: "0" }}
          ></iframe>
        </div>
        <div
          style={{
            color: "#FFFFFF",
            lineHeight: "14px",
            fontWeight: "400",
            fontSize: "11px",
            boxSizing: "border-box",
            padding: "2px 6px",
            width: "100%",
            fontFamily: "Verdana, Tahoma, Arial, sans-serif",
          }}
        >
          <a
            href="https://coinlib.io"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontWeight: "500",
              color: "#FFFFFF",
              textDecoration: "none",
              fontSize: "11px",
            }}
          >
            Cryptocurrency Prices
          </a>
          &nbsp;by Coinlib
        </div>
      </div>
    </div>
  );
}
