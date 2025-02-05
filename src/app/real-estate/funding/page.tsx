"use client";
import Link from "next/link";
import { PageHeader } from "../../../components/page-header";
import { PropAssetSwitcher } from "../../../components/prop-asset-switcher";
import { useState } from "react";
import { properties } from "../../../components/property-grid";

export default function FundingPage() {
  const [method, setMethod] = useState<"Bank" | "Crypto" | "Other">("Bank");
  const [property, setProperty] = useState<any>(null);
  const [amount, setAmount] = useState<any>(null);
  const [displayForm, setDisplayForm] = useState(false);
  const [displayPlanForm, setDisplayPlanForm] = useState(false);
  const [wallet, setWallet] = useState<any>(null);
  const [walletAddress, setWalletAddress] = useState<any>(null);
  const [walletImage, setWalletImage] = useState<any>(null);

  const wallets = [
    {
      id: 1,
      name: "BTC",
      image: "/images/btc.jpeg",
      address: "bc1qd6rjew937mhrx98pcauvm03j5s6nl0p4s4mkl0",
    },
    {
      id: 2,
      name: "USDT",
      image: "/images/usdt.jpeg",
      address: "0x7e0F28A96072aCA27DB51f4E4cb812E21e5E6B37",
    },
    {
      id: 3,
      name: "BCH",
      image: "/images/bch.jpeg",
      address: "qrdtvvu9gmyw6xzvrwdwdcp5p6djrm74ysglju76c9",
    },
    {
      id: 4,
      name: "ETH",
      value: "ETH",
      image: "/images/eth.jpeg",
      address: "0x7938a23f2558b0BA00fdd70D9f25474182386801",
    },
    {
      id: 5,
      name: "SOL",
      image: "/images/sol.jpeg",
      address: "39RpXE8jRpAYYLgJ5nnbvJXmT8vn2AaKPggGmkjgnNXR",
    },
  ];

  const handleSelectWallet = (e: any) => {
    e.preventDefault();
    const selected = wallets.find((wallet) => wallet.name == e.target.value);
    setWallet(selected?.name);
    setWalletAddress(selected?.address);
    setWalletImage(selected?.image);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Submitted");
    setDisplayPlanForm(false);
    const data = {
      method,
      property,
      amount,
    };
    console.log(data);
  };

  return (
    <div className="space-y-8">
      <div className="md:mx-[80px] flex flex-col gap-6">
        <PageHeader
          pageTitle="Funding"
          link="/real-estate/funding"
          linkTitle="Real Estate"
        />

        {/* <div className="rounded-3xl bg-[#292929] px-6 py-[35px] flex justify-between items-center mb-6">
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
        </div> */}
      </div>

      <div className="rounded-lg p-6">
        <div className="flex flex-col gap-8">
          <div className="bg-[#222] p-6 rounded-lg">
            {displayForm == false && displayPlanForm == false && (
              <div className="flex flex-col gap-6">
                <h2 className="text-xl font-bold mb-6">
                  Choose A Funding Method
                </h2>
                <select
                  className="w-full bg-[#292929] rounded-[10px] px-4 py-3"
                  name="method"
                  onChange={(e) => {
                    e.preventDefault();
                    setMethod(e.target.value as any);
                  }}
                >
                  <option value="">Select Method</option>
                  <option value="Bank">Bank funding</option>
                  <option value="Crypto">
                    Digital Funding (Cryptocurrency)
                  </option>
                </select>
                <button
                  className="bg-red-500 text-white py-3 px-4 rounded-[10px] mt-6"
                  onClick={() => setDisplayForm(true)}
                >
                  Proceed
                </button>
              </div>
            )}
            {displayPlanForm == false && displayForm && (
              <div className="flex flex-col gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Selected Invested Plan:
                  </label>
                  <select
                    className="w-full bg-[#292929] rounded-[10px] px-4 py-3"
                    name="method"
                    onChange={(e) => {
                      e.preventDefault();
                      setProperty(e.target.value);
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
                {method === "Crypto" && (
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Selected Wallet to make deposit into:
                    </label>
                    <select
                      className="w-full bg-[#292929] rounded-[10px] px-4 py-3"
                      name="method"
                      onChange={(e) => handleSelectWallet(e)}
                    >
                      <option value="">Select Wallet</option>
                      {wallets.map((wallet) => (
                        <option value={wallet.name} key={wallet.id}>
                          {wallet.name}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Amount to deposit ( $ )
                  </label>
                  <input
                    type="text"
                    placeholder="Amount"
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full bg-[#292929] rounded-[10px] px-4 py-3"
                  />
                </div>
                <button
                  className="bg-red-500 text-white py-3 px-4 rounded-[10px] mt-6"
                  onClick={() => setDisplayPlanForm(true)}
                >
                  Proceed
                </button>
              </div>
            )}
            {displayPlanForm && method === "Bank" ? (
              <form className="space-y-6">
                <h2 className="text-xl font-bold mb-6">Payment Details</h2>
                <p className="px-3 py-5 border rounded-lg font-bold">
                  Payment method: Bank Wire
                </p>
                <p className="px-3 py-5 border rounded-lg font-bold">
                  Bank Name: Bank Wire
                </p>
                <p className="px-3 py-5 border rounded-lg font-bold">
                  Account Name: Bank Wire
                </p>
                <p className="px-3 py-5 border rounded-lg font-bold">
                  Account Number: Bank Wire
                </p>
                <p className="px-3 py-5 border rounded-lg font-bold">
                  Bank Address: Bank Wire
                </p>
                <p className="px-3 py-5 border rounded-lg font-bold">
                  Swift Code: Bank Wire
                </p>
                <p className="px-3 py-5 border rounded-lg font-bold">
                  Routing Number: Bank Wire
                </p>
                <div className="flex flex-col gap-6">
                  <p>
                    After making payment, click on the I have made payment
                    button to proceed.
                  </p>
                  <button
                    type="submit"
                    onClick={(e) => handleSubmit(e)}
                    className="w-full bg-green-500 text-white py-3 rounded-[10px]"
                  >
                    I have made payment
                  </button>
                  <a
                    href="/dashboard"
                    className="bg-blue-500 text-center text-white py-3 px-4 rounded-[10px]"
                  >
                    Go to dashboard
                  </a>
                </div>
                <p className="text-red-400 text-sm">
                  * Be aware that transaction may be delayed for network
                  reasons.
                </p>
                <p className="text-green-400 text-sm">
                  * Your funding will appear in your account as soon as your
                  payment is confirmed.
                </p>
              </form>
            ) : (
              displayPlanForm && (
                <form className="space-y-6">
                  <h2 className="text-xl font-bold mb-6">Payment Details</h2>

                  <img src={walletImage} alt="wallet" />
                  <p className="px-3 py-5 border rounded-lg font-bold">
                    Payment method: {wallet}
                  </p>

                  <p>Copy wallet address</p>
                  <p className="px-3 py-5 border rounded-lg font-bold">
                    {walletAddress}
                  </p>
                  <p className="px-3 py-5 border rounded-lg font-bold">
                    Amount to Fund: ${amount} in {wallet}
                  </p>

                  <div className="flex flex-col gap-6">
                    <p>
                      After making payment, click on the I have made payment
                      button to proceed.
                    </p>
                    <button
                      type="submit"
                      onClick={(e) => handleSubmit(e)}
                      className="w-full bg-green-500 text-white py-3 rounded-[10px]"
                    >
                      I have made payment
                    </button>
                    <a
                      href="/dashboard"
                      className="bg-blue-500 text-center text-white py-3 px-4 rounded-[10px]"
                    >
                      Go to dashboard
                    </a>
                  </div>
                </form>
              )
            )}
          </div>

          <div className="bg-[#222] p-6 rounded-lg h-fit">
            <h2 className="text-xl font-bold mb-4">
              Why Invest with Advanta Capital?
            </h2>
            <p className="text-gray-400 mb-4 text-sm">
              As an active investor in our platform, you can earn a regular
              stream of revenue dividends from your investments. These dividends
              are generated from the rental income, interest payments, and other
              cash flows produced by the properties and assets in your
              portfolio. With our revenue dividend program, you can receive a
              quarterly or monthly distribution of income, providing a
              predictable and passive source of returns.
            </p>
            <p className="text-gray-400 text-sm">
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
