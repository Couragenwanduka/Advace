import React from "react";
import { ChevronDown } from "lucide-react";

export function PropertyFilter() {
  return (
    <div className="bg-[#212121] p-8 rounded-lg flex flex-col gap-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Select location"
            className="w-full px-4 py-3 bg-[#292929] rounded-lg pr-10"
          />
          <ChevronDown
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={20}
          />
        </div>

        {/* <div className="relative">
          <input
            type="email"
            placeholder="Input Your Email"
            className="w-full px-4 py-3 bg-[#292929] opacity-8 rounded-lg pr-10"
          />
          <ChevronDown
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={20}
          />
        </div>

        <div className="relative">
          <input
            type="email"
            placeholder="Input Your Email"
            className="w-full px-4 py-3 bg-[#292929] rounded-lg pr-10"
          />
          <ChevronDown
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={20}
          />
        </div> */}
      </div>

      <div className="border-[#E0E1E2] opacity-10 w-full h-[1px] bg-white" />

      <button className="mt-6 w-full md:w-[274px] px-8 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors">
        Search
      </button>
    </div>
  );
}
