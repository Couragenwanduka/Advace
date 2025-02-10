"use client";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
// import { cookies } from "next/headers";
import Link from "next/link";
import { PageHeader } from "../../../../components/page-header";
import { PropAssetSwitcher } from "../../../../components/prop-asset-switcher";
import { useState } from "react";
import { properties } from "../../../../components/property-grid";

export default async function WithdrawPage() {
  // const supabase = createServerComponentClient({ cookies });
  const [formData, setFormData] = useState({
    property: "",
    amount: "",
    channel: "",
    wallet: "",
  });
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !formData.property ||
      !formData.amount ||
      !formData.channel ||
      !formData.wallet
    ) {
      alert("Please fill in all fields");
      return;
    }

    alert("Withdrawal request submitted");
  };
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

      <div className="rounded-lg p-6">
        <div className="bg-[#1a1a1a] p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-white mb-4">
            Announcements
          </h3>
          <p className="text-[#a0aec0] text-xs">
            Welcome to Advanta Wealth, your gateway to investing in a
            diversified portfolio of high-quality real estate assets. We're
            excited to have you on board!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#222] p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-6">Request withdrawal</h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Withdrawal source
                </label>
                <div className="flex items-center gap-2">
                  <select
                    className="w-full bg-[#292929] rounded-[10px] px-4 py-3 text-sm"
                    name="method"
                    onChange={(e) => {
                      e.preventDefault();
                      setFormData({ ...formData, property: e.target.value });
                    }}
                  >
                    <option value="">Select Property</option>
                    {properties.map((property) => (
                      <option value={property.id} key={property.id}>
                        {property.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Amount to withdraw
                </label>
                <input
                  type="text"
                  placeholder="Enter amount"
                  className="w-full bg-[#292929] rounded-[10px] px-4 py-3"
                  onChange={(e) =>
                    setFormData({ ...formData, amount: e.target.value })
                  }
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Preferred channel
                </label>
                <input
                  type="text"
                  placeholder="Preferred wallet"
                  className="w-full bg-[#292929] rounded-[10px] px-4 py-3"
                  onChange={(e) =>
                    setFormData({ ...formData, channel: e.target.value })
                  }
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Wallet address
                </label>
                <input
                  type="text"
                  placeholder="Wallet Address"
                  className="w-full bg-[#292929] rounded-[10px] px-4 py-3"
                  onChange={(e) =>
                    setFormData({ ...formData, wallet: e.target.value })
                  }
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-red-500 text-white py-3 rounded-[10px]"
              >
                Submit verification
              </button>
            </form>
          </div>

          <div className="bg-[#222] p-6 rounded-lg h-fit">
            <h2 className="text-xl font-bold mb-4">
              Revenue divident from your active account
            </h2>
            <p className="text-gray-400 mb-4 text-xs">
              As an active investor in our platform, you can earn a regular
              stream of revenue dividends from your investments. These dividends
              are generated from the rental income, interest payments, and other
              cash flows produced by the properties and assets in your
              portfolio. With our revenue dividend program, you can receive a
              quarterly or monthly distribution of income, providing a
              predictable and passive source of returns.
            </p>
            <p className="text-gray-400 text-xs">
              This allows you to benefit from the ongoing cash flow generated by
              your investments in addition to any long-term capital
              appreciation. By choosing to reinvest your dividends, you can also
              take advantage of the power of compounding, potentially
              accelerating the growth of your investment portfolio over time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
