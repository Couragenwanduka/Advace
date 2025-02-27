"use client";
import { useState } from "react";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { PageHeader } from "../../components/page-header";
import { addTransactionRecord } from "../../lib/supabase/client";

interface TransactionFormData {
  //   email: string;
  amount: string;
  depositMethod: string;
  withdrawEmail?: string;
  withdrawAmount?: string;
  walletAddress?: string;
  withdrawMethod?: string;
  screenshot?: File | null;
  feeDepositMethod?: string;
  feeAmount?: string;
}

export default function TransactionPage() {
  const [formData, setFormData] = useState<TransactionFormData>({
    // email: "",
    amount: "",
    depositMethod: "",
    withdrawEmail: "",
    withdrawAmount: "",
    walletAddress: "",
    withdrawMethod: "",
    feeDepositMethod: "",
    feeAmount: "",
  });
  const [showDeposit, setShowDeposit] = useState(false);
  const [showWithdraw, setShowWithdraw] = useState(false);
  const [message, setMessage] = useState("");

  const handleDepositSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.amount || !formData.depositMethod) {
      setMessage("Please fill in all required fields");
      return;
    }

    try {
      const result = await addTransactionRecord({
        amount: formData.amount,
        coin: formData.depositMethod,
        mode: 0, // deposit mode
        created_at: new Date().toISOString(),
      });

      if (result) {
        setMessage("Deposit Added Successfully");
        setShowDeposit(false);
        window.location.href = "/transactions?status=dsuccess";
      } else {
        setMessage("Please try again");
      }
    } catch (error) {
      console.error("Error submitting deposit:", error);
      setMessage("Error processing deposit");
    }
  };

  const handleWithdrawSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.withdrawEmail ||
      !formData.withdrawAmount ||
      !formData.withdrawMethod ||
      !formData.walletAddress
    ) {
      setMessage("Please fill in all required fields");
      return;
    }

    try {
      const result = await addTransactionRecord({
        amount: formData.withdrawAmount,
        email: formData.withdrawEmail,
        coin: formData.withdrawMethod,
        mode: 1, // withdraw mode
        user_address: formData.walletAddress,
        fee_coin: formData.feeDepositMethod,
        fee_amount: formData.feeAmount,
        created_at: new Date().toISOString(),
        screenshot_path: formData.screenshot
          ? `/images/deposit_screenshots/${formData.screenshot.name}`
          : null,
      });

      if (result) {
        setMessage("Withdrawal Request Added Successfully");
        setShowWithdraw(false);
        window.location.href = "/transactions?status=wsuccess";
      } else {
        setMessage("Please try again");
      }
    } catch (error) {
      console.error("Error submitting withdrawal:", error);
      setMessage("Error processing withdrawal");
    }
  };

  return (
    <div className="space-y-8">
      <div className="md:mx-[80px] flex flex-col gap-6">
        <PageHeader
          pageTitle="Transactions"
          link="/transactions"
          linkTitle="Transactions"
        />

        <div className="bg-[#222] p-6 rounded-lg">
          <div className="flex gap-4 mb-6">
            <button
              onClick={() => setShowDeposit(true)}
              className="bg-red-500 text-white py-3 px-4 rounded-[10px]"
            >
              Make Deposit
            </button>
            <button
              onClick={() => setShowWithdraw(true)}
              className="bg-red-500 text-white py-3 px-4 rounded-[10px]"
            >
              Make Withdrawal
            </button>
          </div>

          {message && (
            <div className="bg-gray-800 text-white p-4 rounded-lg mb-4">
              {message}
            </div>
          )}

          {/* Deposit Modal */}
          {showDeposit && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="bg-white rounded-lg p-8 max-w-md w-full">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-black">Make Deposit</h2>
                  <button
                    onClick={() => setShowDeposit(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    ✕
                  </button>
                </div>
                <form onSubmit={handleDepositSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    {/* <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
                      required
                    /> */}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Amount
                    </label>
                    <input
                      type="number"
                      value={formData.amount}
                      onChange={(e) =>
                        setFormData({ ...formData, amount: e.target.value })
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Deposit Method
                    </label>
                    <select
                      value={formData.depositMethod}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          depositMethod: e.target.value,
                        })
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
                      required
                    >
                      <option value="">Select Method</option>
                      <option value="BTC">Bitcoin (BTC)</option>
                      <option value="ETH">Ethereum (ETH)</option>
                      <option value="USDT">Tether (USDT)</option>
                      <option value="BCH">Bitcoin Cash (BCH)</option>
                      <option value="SOL">Solana (SOL)</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
                  >
                    Submit Deposit
                  </button>
                </form>
              </div>
            </div>
          )}

          {/* Withdrawal Modal */}
          {showWithdraw && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="bg-white rounded-lg p-8 max-w-md w-full">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-black">
                    Make Withdrawal
                  </h2>
                  <button
                    onClick={() => setShowWithdraw(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    ✕
                  </button>
                </div>
                <form onSubmit={handleWithdrawSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.withdrawEmail}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          withdrawEmail: e.target.value,
                        })
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Withdrawal Amount
                    </label>
                    <input
                      type="number"
                      value={formData.withdrawAmount}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          withdrawAmount: e.target.value,
                        })
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Withdrawal Method
                    </label>
                    <select
                      value={formData.withdrawMethod}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          withdrawMethod: e.target.value,
                        })
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
                      required
                    >
                      <option value="">Select Method</option>
                      <option value="BTC">Bitcoin (BTC)</option>
                      <option value="ETH">Ethereum (ETH)</option>
                      <option value="USDT">Tether (USDT)</option>
                      <option value="BCH">Bitcoin Cash (BCH)</option>
                      <option value="SOL">Solana (SOL)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Wallet Address
                    </label>
                    <input
                      type="text"
                      value={formData.walletAddress}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          walletAddress: e.target.value,
                        })
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Fee Payment Method
                    </label>
                    <select
                      value={formData.feeDepositMethod}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          feeDepositMethod: e.target.value,
                        })
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
                      required
                    >
                      <option value="">Select Method</option>
                      <option value="BTC">Bitcoin (BTC)</option>
                      <option value="ETH">Ethereum (ETH)</option>
                      <option value="USDT">Tether (USDT)</option>
                      <option value="BCH">Bitcoin Cash (BCH)</option>
                      <option value="SOL">Solana (SOL)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Fee Amount
                    </label>
                    <input
                      type="number"
                      value={formData.feeAmount}
                      onChange={(e) =>
                        setFormData({ ...formData, feeAmount: e.target.value })
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Upload Screenshot
                    </label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          screenshot: e.target.files?.[0] || null,
                        })
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
                  >
                    Submit Withdrawal
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
