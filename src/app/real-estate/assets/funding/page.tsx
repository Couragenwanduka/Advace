import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";
import { PageHeader } from "../../../../components/page-header";
import { PropAssetSwitcher } from "../../../../components/prop-asset-switcher";

export default async function HistoryPage() {
  const supabase = createServerComponentClient({ cookies });

  return (
    <div className="space-y-8">
      <div className="md:mx-[80px] flex flex-col gap-6">
        <PageHeader
          pageTitle="History"
          link="/real-estate/assets"
          linkTitle="Assets"
        />

        <div className="rounded-3xl bg-[#292929] px-6 py-[35px] flex justify-between items-center mb-6">
          <PropAssetSwitcher />

          <div className="flex space-x-2">
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

      <div className="bg-[#1a1a1a] rounded-lg p-6">
        <div className="bg-[#222] p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-6">Account Funding history</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-pink-100/10 text-left">
                  <th className="p-3 text-pink-200">ID</th>
                  <th className="p-3 text-pink-200">Property</th>
                  <th className="p-3 text-pink-200">Amount</th>
                  <th className="p-3 text-pink-200">Status</th>
                  <th className="p-3 text-pink-200">Date</th>
                  <th className="p-3 text-pink-200">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-800">
                  <td className="p-3">#67080165</td>
                  <td className="p-3">McMall Modern Smart Home</td>
                  <td className="p-3">$10,000</td>
                  <td className="p-3">
                    <span className="bg-yellow-500/20 text-yellow-500 px-2 py-1 rounded">
                      Pending
                    </span>
                  </td>
                  <td className="p-3">2024-12-02</td>
                  <td className="p-3">
                    <button className="bg-white text-black px-3 py-1 rounded">
                      Receipt
                    </button>
                  </td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="p-3">#67080165</td>
                  <td className="p-3">Residential</td>
                  <td className="p-3">GAL/001</td>
                  <td className="p-3">Residential</td>
                  <td className="p-3">Residential</td>
                  <td className="p-3">
                    <button className="bg-white text-black px-3 py-1 rounded">
                      Receipt
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
