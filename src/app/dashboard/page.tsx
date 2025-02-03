import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { CryptoTicker } from "../../components/crypto-ticker";
import { PortfolioChart } from "../../components/portfolio-chart";
import { PropertyList } from "../../components/property-list";
import { Home } from "lucide-react";

export default async function Dashboard() {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="space-y-8">
      <CryptoTicker />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-[#1a2332] p-6 rounded-lg">
          <div className="flex items-center gap-4 mb-4">
            <Home size={24} className="text-blue-500" />
            <div>
              <h2 className="text-xl font-semibold">Total assets in shares</h2>
              <p className="text-gray-400">
                Summary of total funding & total dividend earned
              </p>
            </div>
          </div>
          <div className="text-3xl font-bold">$0.0</div>
        </div>

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
            <button className="bg-[#2a2a2a] px-4 py-2 rounded">Projects</button>
          </div>
          <div className="border-t border-gray-800 pt-4">
            <p className="text-gray-400">Full Name: {user?.email}</p>
            <p className="text-gray-400">Email: {user?.email}</p>
            <p className="text-gray-400">Location: United States</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-[#1a1a1a] p-6 rounded-lg">
          <PortfolioChart />
        </div>

        <div className="bg-[#1a1a1a] p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Properties viewed</h2>
          <div className="h-1 bg-blue-500 rounded mb-6"></div>

          <h2 className="text-xl font-semibold mb-4">Subscribed to</h2>
          <div className="h-1 bg-blue-500 rounded"></div>
        </div>
      </div>

      <PropertyList />
    </div>
  );
}
