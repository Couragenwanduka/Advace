import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";
import Image from "next/image";
import { PageHeader } from "../../../components/page-header";
import { PropAssetSwitcher } from "../../../components/prop-asset-switcher";
import { properties } from "../../../components/property-grid";

export default async function AssetsPage() {
  const supabase = createServerComponentClient({ cookies });
  // const {
  //   data: { user },
  // } = await supabase.auth.getUser();

  const { data: fundingRecords, error } = await supabase
    .schema("advanta")
    .from("funding_records")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching funding records:", error);
  }

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

  const funding = 0;
  const withdrawal = 0;
  const total = funding + withdrawal;
  const dividend = 0;
  const assets = 0;

  return (
    <div className="space-y-8">
      <div className="md:mx-[80px] flex flex-col gap-6">
        {/* <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Assets</h1>
        </div> */}

        <PageHeader
          pageTitle="Assets"
          link="/real-estate/assets"
          linkTitle="Assets"
        />

        <div className="rounded-3xl bg-[#292929] px-6 py-[35px] flex justify-between items-center mb-6">
          <PropAssetSwitcher />
          <div className="flex space-x-2 ">
            <Link
              href="/real-estate/assets/funding"
              className="bg-white text-black px-4 py-2 rounded-xl"
            >
              Funding
            </Link>
            <Link
              href="/real-estate/assets/withdraw"
              className="bg-white text-black px-4 py-2 rounded-xl"
            >
              Withdraw dividend
            </Link>
            <Link
              href="/real-estate/assets/history"
              className="bg-white text-black px-4 py-2 rounded-xl"
            >
              History
            </Link>
          </div>
        </div>
      </div>

      <div className="rounded-lg">
        <div className="w-1/2 bg-[#222] p-4 rounded-lg mb-8 space-y-4">
          <p className="text-white font-semibold text-xl">
            Active Assets in Investments
          </p>
          <p className="text-[#a0aec0] text-xs">
            Dividends are calculated from amount funded into a property
            investment, while Dividends for compounded property investments are
            calculated from Total Asset in Share.
          </p>
        </div>

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

        {fundingRecords != null && fundingRecords.length >= 1 ? 
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[57px]">
          {fundingRecords.slice(0, 3).map((i) => (
            <div key={i} className="bg-[#222] rounded-3xl p-6">
              <div className="flex items-center gap-4 mb-6">
                <Image
                  src={properties[i.property]?.image || ""}
                  alt="Property"
                  width={80}
                  height={80}
                />
                <div className="flex flex-col gap-2">
                  <h3 className="font-semibold text-2xl">{properties[i.property]?.title}</h3>
                  <p className="text-sm text-gray-400">Total funding</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-400">Amount invested</span>
                  <span>${i.amount}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Property category</span>
                  <span>For Rent</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Dividend</span>
                  <span>$0.00</span>
                </div>
              </div>

              <button className="w-full bg-red-500 text-white py-2 rounded-lg mt-6">
                Withdraw dividend
              </button>
            </div>
            ))
          }
           
        </div>
        : (
          <div className="bg-[#222] rounded-3xl p-6">
            <p className="text-white">No assets funded</p>
          </div>
        )}
      </div>
    </div>
  );
}
