import React from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { RightIcon } from "../right-icon";

export function PropertyHeader() {
  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2 text-gray-400">
        <Link href="/dashboard" className="hover:text-white">
          Home
        </Link>
        <span>
          <RightIcon />
        </span>
        <Link href="/real-estate" className="text-red-500">
          Real estate
        </Link>
      </div>

      <h1 className="text-3xl font-bold text-white">Property Details</h1>
    </div>
  );
}
