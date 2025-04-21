"use client";
import { PropertyGrid } from "../../../components/property-grid";
import { PageHeader } from "../../../components/page-header";
import { MiniCard } from "../../../components/mini-card";
import { useEffect, useState } from "react";
import { getAdmin } from "../../functions";

export default function Dashboard() {
  // const [user, setUser] = useState<any>(null);
  const balance = 0;
  const user = getAdmin();
  console.log("User in app func:", user);
  return (
    <div className="space-y-8">
      <PageHeader
        pageTitle="Dashboard"
        link="/dashboard"
        linkTitle="Dashboard"
      />
      <div className="flex bg-[#1D3557] rounded-[24px] w-full relative justify-between">
        <div className="flex p-6">
          <img src="/images/home-big.svg" className="mr-1" />
          <div className="flex flex-col text-white gap-2">
            <p className="text-2xl mt-1 mb-2">Total assets in shares</p>
            <svg
              width="386"
              height="8"
              viewBox="0 0 386 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="4"
                y1="4"
                x2="376"
                y2="4"
                stroke="#E2E8F0"
                strokeWidth="8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <line
                x1="4"
                y1="4"
                x2="246.8"
                y2="4"
                stroke="#4FD1C5"
                strokeWidth="8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="text-md font-normal">
              Summary of total funding & total dividend earned
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <p className="text-white text-3xl font-bold relative right-[56px] md:right-[250px]">
            ${balance}
          </p>
          <img
            src="/images/home-big-50.svg"
            className="mr-1 absolute bottom-0 right-[56px]"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <MiniCard
          icon="/images/market.svg"
          title="$0.00"
          label="Total funding"
        />
        <MiniCard
          icon="/images/market.svg"
          title="$0.00"
          label="Total withdrawals"
        />
        <MiniCard
          icon="/images/circle-progress.svg"
          title="22"
          label="Properties on sale"
        />
        <MiniCard
          icon="/images/circle-progress.svg"
          title="15"
          label="Properties on rent"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="flex flex-col gap-7">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <MiniCard
              icon="/images/circle-progress.svg"
              title="Click"
              label="Deposit to approve"
              link='/admin/approveFunding'
            />
            <MiniCard
              icon="/images/circle-progress.svg"
              title="Click"
              label="Withdrawals to approve"
              link='/admin/withdrawal'
            />
          </div>

          <div className="bg-[#1a1a1a] p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Properties viewed</h2>
            <div className="h-2 bg-[#4FD1C5] rounded mb-6"></div>

            <h2 className="text-xl font-semibold mb-4">Subscribed to</h2>
            <div className="h-2 bg-[#4FD1C5] rounded"></div>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <div className="bg-[#1a1a1a] p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">My portfolio</h2>
            <div className="flex justify-between mb-4">
              <div>
                <p className="text-gray-400">Total Properties</p>
                <p className="text-xl font-semibold">12+</p>
              </div>
              <div>
                <p className="text-gray-400">Invested properties</p>
                <p className="text-xl font-semibold">0 properties</p>
              </div>
            </div>
            <div className="flex gap-2 mb-4">
              <button className="bg-red-500 px-4 py-2 rounded">
                Shared sold
              </button>
              <button className="bg-[#2a2a2a] px-4 py-2 rounded">
                Revenue Income
              </button>
              <button className="bg-[#2a2a2a] px-4 py-2 rounded">
                Projects
              </button>
            </div>
            <div className="border-t border-gray-800 pt-4 flex flex-col gap-[18px]">
              <p className="text-gray-400">Full Name: {user?.email}</p>
              <p className="text-gray-400">
                Mobile: {user?.user_metadata?.phone}
              </p>
              <p className="text-gray-400">Email: {user?.email}</p>
              <p className="text-gray-400">
                Location: {user?.user_metadata?.country}
              </p>
              {/* <p className="text-gray-400">Social Media: United States</p> */}
            </div>
          </div>
        </div>
      </div>

      <PropertyGrid count={3} />
    </div>
  );
}
