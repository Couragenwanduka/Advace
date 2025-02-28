"use client";
import Link from "next/link";
import { PageHeader } from "../../../components/page-header";
import { PropAssetSwitcher } from "../../../components/prop-asset-switcher";
import { useState } from "react";
import { properties } from "../../../components/property-grid";
import { addFundingRecord } from "../../../lib/supabase/client";
export const wallets = [
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
export default function FundingPage() {
  const [method, setMethod] = useState<"Bank" | "Crypto" | "Other">("Bank");
  const [property, setProperty] = useState<any>(null);
  const [amount, setAmount] = useState<any>(null);
  const [displayForm, setDisplayForm] = useState(false);
  const [displayPlanForm, setDisplayPlanForm] = useState(false);
  const [wallet, setWallet] = useState<any>(null);
  const [walletAddress, setWalletAddress] = useState<any>(null);
  const [walletImage, setWalletImage] = useState<any>(null);

  const handleSelectWallet = (e: any) => {
    e.preventDefault();
    const selected = wallets.find((wallet) => wallet.name == e.target.value);
    setWallet(selected?.name);
    setWalletAddress(selected?.address);
    setWalletImage(selected?.image);
  };

  const handleSubmit = (e: any) => {
    if (!property) {
      alert("Please select a property");
      return;
    }
    if (!amount) {
      alert("Please enter an amount");
      return;
    }
    if ((!wallet || !walletAddress) && method !== "Bank") {
      alert("Please select a wallet");
      return;
    }
    e.preventDefault();
    console.log("Submitted");
    setDisplayPlanForm(false);
    const data = {
      method,
      property,
      amount,
    };
    addFundingRecord({
      method,
      property,
      amount,
      wallet,
      wallet_address: walletAddress,
    })
      .then((data) => {
        alert("Funding submitted");
        window.location.reload();
        console.log(data);
      })
      .catch((error) => {
        console.error("Error adding funding record:", error);
        alert("Error adding funding record");
      });
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
              className="bg-white text-black px-4 py-3 text-sm rounded-xl"
            >
              Withdraw dividend
            </Link>
            <Link
              href="/real-estate/assets/history"
              className="bg-white text-black px-4 py-3 text-sm rounded-xl"
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
                <h2 className="text-xl mb-6">Choose A Funding Method</h2>
                <select
                  className="w-full bg-[#292929] rounded-[10px] px-4 py-3 text-sm"
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
                    className="w-full bg-[#292929] rounded-[10px] px-4 py-3 text-sm"
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
                      className="w-full bg-[#292929] rounded-[10px] px-4 py-3 text-sm"
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
                    className="w-full bg-[#292929] rounded-[10px] px-4 py-3 text-sm"
                  />
                </div>
                <button
                  className="bg-red-500 text-white py-3 px-4 rounded-[10px] mt-6"
                  onClick={() => {
                    if (!property || !amount) {
                      alert("Please select a property and enter an amount");
                      return;
                    }
                    if ((!wallet || !walletAddress) && method !== "Bank") {
                      alert("Please select a wallet or enter a wallet address");
                      return;
                    }
                    setDisplayPlanForm(true);
                  }}
                >
                  Proceed
                </button>
              </div>
            )}
            {displayPlanForm && method === "Bank" ? (
              <form className="space-y-2">
                <h2 className="text-xl mb-6">Account numbers</h2>
                <p className="py-3 text-sm rounded-lg">Bank Name: Bank Wire</p>
                <p className="px-4 py-3 text-sm rounded-lg text-white bg-[#29292a]">
                  Payment method: Bank Wire
                </p>
                <p className="px-4 py-3 text-sm text-white bg-[#29292a] rounded-lg">
                  Account Name: Bank Wire
                </p>
                <p className="px-4 py-3 text-sm text-white bg-[#29292a] rounded-lg">
                  Account Number: Bank Wire
                </p>
                <p className="px-4 py-3 text-sm text-white bg-[#29292a] rounded-lg">
                  Bank Address: Bank Wire
                </p>
                <p className="px-4 py-3 text-sm text-white bg-[#29292a] rounded-lg">
                  Swift Code: Bank Wire
                </p>
                <p className="px-4 py-3 text-sm text-white bg-[#29292a] rounded-lg">
                  Routing Number: Bank Wire
                </p>
                <div className="flex flex-col gap-6 pt-10">
                  {/* <p>
                    After making payment, click on the I have made payment
                    button to proceed.
                  </p> */}

                  <p className="text-red-400 text-sm">
                    “Due to delays in international banking transactions, there
                    may be a delay in processing payments. We kindly ask that
                    you proceed with the transfer using digital payment methods
                    for quicker processing.”
                  </p>
                  <button
                    type="submit"
                    onClick={(e) => window.location.reload()}
                    className="w-full bg-white text-black py-3 rounded-[10px]"
                  >
                    Proceed to digital funding
                  </button>
                  <p className="text-white text-sm">
                    * Your funding will appear in your account as soon as your
                    payment is confirmed.
                  </p>
                </div>
              </form>
            ) : (
              displayPlanForm && (
                <form className="space-y-6 flex flex-col md:flex-row gap-3 ">
                  <div className="bg-black rounded-lg p-6 w-full md:w-[50%]">
                    <img
                      src={walletImage}
                      alt="wallet"
                      height={360}
                      width={536}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h2 className="text-xl mb-6">Payment Details</h2>
                    <p className="px-4 py-3 text-sm text-white bg-[#29292a] rounded-lg">
                      Payment method: {wallet}
                    </p>

                    {/* <p>Copy wallet address</p> */}
                    <p className="px-4 py-3 text-sm text-white bg-[#29292a] rounded-lg">
                      {walletAddress}
                    </p>
                    <p className="px-4 py-3 text-sm text-white bg-[#29292a] rounded-lg">
                      Amount to Fund: ${amount} i n {wallet}
                    </p>

                    <div className="flex flex-col gap-6 pt-10">
                      {/* <p>
                      After making payment, click on the I have made payment
                      button to proceed.
                    </p> */}
                      <button
                        type="submit"
                        onClick={(e) => handleSubmit(e)}
                        className="w-full bg-white text-black py-3 rounded-[10px]"
                      >
                        Proceed
                      </button>
                      {/* <a
                        href="/dashboard"
                        className="bg-blue-500 text-center text-white py-3 px-4 rounded-[10px]"
                      >
                        Go to dashboard
                      </a> */}
                    </div>
                  </div>
                </form>
              )
            )}
          </div>

          {/* <div className="bg-[#222] p-6 rounded-lg h-fit">
            <h2 className="text-xl mb-4">Why Invest with Advanta Capital?</h2>
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
          </div> */}
        </div>
      </div>
    </div>
  );
}
