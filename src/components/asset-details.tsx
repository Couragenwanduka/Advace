"use client";
import React from "react";
import { getUserSupabase } from "../lib/supabase/client";
import { getSession, getUser } from "../app/functions";

export function AssetDetails() {
  const session = getSession();
  console.log("Session in asset details:", session);
  const user: any = getUser();
  //getUserSupabase(session?.access_token);

  //fields
  // balance
  // total_assets
  // total_dividends
  // total_funding
  // total_withdrawals
  // total_properties
  // total_properties_invested
  // total_properties_sale
  // total_properties_rent

  const funding = user?.user_metadata?.total_funding || 0.0;
  const withdrawal = user?.user_metadata?.total_withdrawals || 0.0;
  const total = funding + withdrawal;
  const dividend = user?.user_metadata?.total_dividends || 0.0;
  const assets = user?.user_metadata?.total_assets || 0.0;
  console.log("User in asets func:", user);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <div className="bg-red-500 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Total Funding</h3>
        <p className="text-sm">${funding.toLocaleString()}</p>
      </div>
      <div className="bg-[#1e3a8a] p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4">My Assets in Shares</h3>
        <p className="text-sm">${assets.toLocaleString()}</p>
      </div>
      <div className="bg-gray-700 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Accumulated Dividend</h3>
        <p className="text-sm">${dividend.toLocaleString()}</p>
      </div>
      <div className="bg-green-500 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Total withdrawal</h3>
        <p className="text-sm">${withdrawal.toLocaleString()}</p>
      </div>
    </div>
  );
}
