"use client";
import { useState, useEffect } from "react";
import type { NextPage } from "next";
import Image from "next/image";
import { PageHeader } from "../../components/page-header";
import { getUser } from "../functions";
import { wallets } from "../../components/wallets";

// Types
interface Transaction {
  id: number;
  amount: number;
  email: string;
  create_datetime: string;
  coin: string;
  mode: string;
  status: string;
}

const Transactions: NextPage = () => {
  const user = getUser();
  const session = {
    user: {
      email: user?.email,
    },
  };
  const [depositOpen, setDepositOpen] = useState(false);
  const [withdrawOpen, setWithdrawOpen] = useState(false);
  const [withdrawStep, setWithdrawStep] = useState(1);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [balance, setBalance] = useState(0);

  // Form states
  const [depositMethod, setDepositMethod] = useState("");
  const [depositAmount, setDepositAmount] = useState("");
  const [feeMethod, setFeeMethod] = useState("");
  const [feeAmount, setFeeAmount] = useState("");
  const [withdrawMethod, setWithdrawMethod] = useState("");
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [walletAddress, setWalletAddress] = useState("");
  const [screenshot, setScreenshot] = useState<any>(null);

  // Fetch transactions and balance
  useEffect(() => {
    const fetchData = async () => {
      // Replace with actual API calls
      const response = await fetch("/api/transactions");
      const data = await response.json();
      setTransactions(data.transactions);
      setBalance(data.balance);
    };

    const user = getUser();
    setBalance(user?.user_metadata?.balance || 0);
    fetchData();
  }, []);

  // Utility functions
  const getCoinName = (coin: string) => {
    const coins: { [key: string]: string } = {
      "1": wallets[0].name,
      "2": wallets[1].name,
      "3": wallets[2].name,
      "4": wallets[3].name,
      "5": wallets[4].name,
    };
    return coins[coin] || "Unknown";
  };

  const getAddressImage = (method: string) => {
    const images: { [key: string]: string } = {
      "1": wallets[0].image,
      "2": wallets[1].image,
      "3": wallets[2].image,
      "4": wallets[3].image,
      "5": wallets[4].image,
    };
    return images[method] || wallets[0].image;
  };

  const getAddress = (method: string) => {
    const addresses: { [key: string]: string } = {
      "1": wallets[0].address,
      "2": wallets[1].address,
      "3": wallets[2].address,
      "4": wallets[3].address,
      "5": wallets[4].address,
    };
    return addresses[method] || "";
  };

  // Form handlers
  const handleDepositSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch("/api/deposit", {
      method: "POST",
      body: JSON.stringify({
        email: session?.user?.email,
        amount: depositAmount,
        depositmethod: depositMethod,
      }),
    });
    if (response.ok) {
      setDepositOpen(false);
      alert(
        "Deposit Successful. Admin would verify and your balance would reflect"
      );
    }
  };

  const handleWithdrawSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (withdrawStep === 1) {
      setWithdrawStep(2);
    } else if (withdrawStep === 2 && screenshot) {
      setWithdrawStep(3);
    } else if (withdrawStep === 3) {
      const formData = new FormData();
      formData.append("withdraw_email", session?.user?.email || "");
      formData.append("withdraw_amount", withdrawAmount);
      formData.append("wallet_address", walletAddress);
      formData.append("withdraw_method", withdrawMethod);
      formData.append("feedepositmethod", feeMethod);
      formData.append("amount", feeAmount);
      formData.append("withdraw_screenshot", screenshot);

      const response = await fetch("/api/withdraw", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setWithdrawStep(4);
        setTimeout(() => setWithdrawOpen(false), 2000);
      }
    }
  };

  return (
    <div className="bg-black min-h-screen text-white">
      {/* Blur Background */}
      {(depositOpen || withdrawOpen) && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50" />
      )}

      {/* Main Content */}
      <main className="">
        <PageHeader
          pageTitle="Transactions"
          link="/transactions"
          linkTitle="Transactions"
        />

        <div className="flex gap-8 mt-8">
          {/* Balance Card */}
          <div className="bg-white/10 rounded-xl w-[376px] h-[188px] p-6">
            <p className="text-sm">Balance</p>
            <p className="text-2xl font-bold">${balance.toFixed(2)}</p>
            {/* SVG Graph */}
          </div>

          {/* Transaction Options */}
          <div className="bg-white/10 rounded-xl p-8 flex flex-col gap-4 w-[415px]">
            <button
              onClick={() => setDepositOpen(true)}
              className="bg-[#E63946] text-white py-3 rounded-lg w-full"
            >
              Deposit
            </button>
            <button
              onClick={() => setWithdrawOpen(true)}
              className="bg-green-500 text-white py-3 rounded-lg w-full"
            >
              Withdraw
            </button>
          </div>
        </div>

        {/* Transaction History */}
        <div className="bg-white/10 rounded-xl p-6 mt-8 w-[824px]">
          <h2 className="text-lg font-semibold">Transaction History</h2>
          {transactions.length === 0 ? (
            <div className="flex flex-col items-center mt-4">
              <Image
                src="/images/no_history.svg"
                alt="No history"
                width={100}
                height={100}
              />
              <p className="text-center mt-4">
                Something is amiss?
                <br />
                <span className="text-gray-400">
                  No transaction History yet. Make a transaction.
                </span>
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-6 mt-4">
              {transactions.map((transaction) => (
                <div
                  key={transaction.id}
                  className="flex justify-between border-b border-white/20 pb-2"
                >
                  <div className="flex gap-4">
                    <Image
                      src={
                        transaction.mode === "0"
                          ? "/images/deposit.svg"
                          : "/images/withdraw.svg"
                      }
                      alt="Transaction type"
                      width={20}
                      height={20}
                    />
                    <div>
                      <p className="font-semibold">
                        {getCoinName(transaction.coin)}
                      </p>
                      <p className="text-gray-400 text-sm">
                        {new Date(transaction.create_datetime).toLocaleString()}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <p>${transaction.amount.toFixed(2)}</p>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        transaction.status === "1"
                          ? "bg-green-500/20 text-green-500"
                          : transaction.status === "2"
                          ? "bg-red-500/20 text-red-500"
                          : "bg-yellow-500/20 text-yellow-500"
                      }`}
                    >
                      {transaction.status === "1"
                        ? "Done"
                        : transaction.status === "2"
                        ? "Cancelled"
                        : "Processing"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      {/* Deposit Popup */}
      {depositOpen && (
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[512px] bg-white rounded-xl p-8 z-50 flex flex-col items-center">
          <button
            onClick={() => setDepositOpen(false)}
            className="absolute right-4 top-4 text-2xl text-black"
          >
            ×
          </button>
          <Image src="/images/logo.png" alt="Logo" width={100} height={40} />
          <form
            onSubmit={handleDepositSubmit}
            className="w-full mt-4 text-black"
          >
            <div className="mb-4">
              <label className="block text-sm mb-1">Deposit Method</label>
              <select
                value={depositMethod}
                onChange={(e) => setDepositMethod(e.target.value)}
                className="w-full p-2 border rounded"
                required
              >
                <option value="">Select Deposit Method</option>
                {wallets.map((wallet) => (
                  <option value={wallet.id} key={wallet.id}>
                    {wallet.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-sm mb-1">Amount</label>
              <input
                type="number"
                value={depositAmount}
                onChange={(e) => setDepositAmount(e.target.value)}
                className="w-full p-2 border rounded"
                placeholder="$0"
                required
              />
            </div>
            <div className="mb-4 flex justify-center">
              <Image
                src={getAddressImage(depositMethod)}
                alt="QR Code"
                width={161}
                height={174}
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm mb-1">Address</label>
              <input
                type="text"
                value={getAddress(depositMethod)}
                className="w-full p-2 border rounded"
                readOnly
              />
              <button
                type="button"
                onClick={() =>
                  navigator.clipboard.writeText(getAddress(depositMethod))
                }
                className="text-[#E63946] text-sm mt-1"
              >
                Click here to copy Address
              </button>
            </div>
            <button
              type="submit"
              className="bg-[#E63946] text-white w-full py-3 rounded-lg"
            >
              Submit
            </button>
          </form>
        </div>
      )}

      {/* Withdraw Popup */}
      {withdrawOpen && (
        <div className=" text-black fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[512px] bg-white rounded-xl p-8 z-50 flex flex-col items-center">
          <button
            onClick={() => setWithdrawOpen(false)}
            className="absolute right-4 top-4 text-2xl text-black"
          >
            ×
          </button>
          <Image src="/images/logo.png" alt="Logo" width={100} height={40} />

          {withdrawStep === 1 && (
            <div className="text-center">
              <p className="text-2xl font-bold mb-4">Withdraw</p>
              <p className="text-sm mb-6">
                To continue you are required to pay a brokers fee
              </p>
              <button
                onClick={() => setWithdrawStep(2)}
                className="bg-[#E63946] text-white py-3 rounded-lg w-3/4"
              >
                Submit
              </button>
            </div>
          )}

          {withdrawStep >= 2 && (
            <form onSubmit={handleWithdrawSubmit} className="w-full mt-4">
              {withdrawStep === 2 && (
                <>
                  <div className="mb-4">
                    <label className="block text-sm mb-1">Deposit Method</label>
                    <select
                      value={feeMethod}
                      onChange={(e) => setFeeMethod(e.target.value)}
                      className="w-full p-2 border rounded"
                      required
                    >
                      <option value="">Select Deposit Method</option>
                      <option value="1">BTC/Bitcoin</option>
                      <option value="2">BCH/Bitcoin cash</option>
                      <option value="3">ETH/Ethereum</option>
                      <option value="4">USDT</option>
                      <option value="5">SOL/Solana</option>
                    </select>
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm mb-1">Amount</label>
                    <input
                      type="number"
                      value={feeAmount}
                      onChange={(e) => setFeeAmount(e.target.value)}
                      className="w-full p-2 border rounded"
                      placeholder="$0"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <Image
                      src={getAddressImage(feeMethod)}
                      alt="QR Code"
                      width={161}
                      height={174}
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm mb-1">Address</label>
                    <input
                      type="text"
                      value={getAddress(feeMethod)}
                      className="w-full p-2 border rounded"
                      readOnly
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm mb-1">Screenshot</label>
                    <input
                      type="file"
                      onChange={(e) =>
                        setScreenshot(e.target.files?.[0] || null)
                      }
                      className="w-full p-2 border rounded"
                      accept=".png,.jpg,.jpeg"
                      required
                    />
                  </div>
                </>
              )}

              {withdrawStep === 3 && (
                <>
                  <div className="mb-4">
                    <label className="block text-sm mb-1">
                      Withdrawal Method
                    </label>
                    <select
                      value={withdrawMethod}
                      onChange={(e) => setWithdrawMethod(e.target.value)}
                      className="w-full p-2 border rounded"
                      required
                    >
                      <option value="">Select Withdrawal Method</option>
                      {wallets.map((wallet) => (
                        <option value={wallet.name} key={wallet.id}>
                          {wallet.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm mb-1">Amount</label>
                    <input
                      type="number"
                      value={withdrawAmount}
                      onChange={(e) => setWithdrawAmount(e.target.value)}
                      className="w-full p-2 border rounded"
                      placeholder="$0"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm mb-1">Wallet Address</label>
                    <input
                      type="text"
                      value={walletAddress}
                      onChange={(e) => setWalletAddress(e.target.value)}
                      className="w-full p-2 border rounded"
                      placeholder="Input Address"
                      required
                    />
                  </div>
                </>
              )}

              {withdrawStep === 4 && (
                <div className="text-center">
                  <Image
                    src="/images/success.svg"
                    alt="Success"
                    width={100}
                    height={100}
                  />
                  <p className="text-[#E63946] mt-4">Transaction Complete</p>
                </div>
              )}

              {withdrawStep < 4 && (
                <button
                  type="submit"
                  className="bg-[#E63946] text-white w-full py-3 rounded-lg"
                >
                  Submit
                </button>
              )}
            </form>
          )}
        </div>
      )}
    </div>
  );
};

export default Transactions;
