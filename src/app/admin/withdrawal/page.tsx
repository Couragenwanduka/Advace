'use client';

import { useEffect, useState } from 'react';
import { approveWithdrawal } from '../../../lib/supabase/client2'; // Adjust path
import { supabase } from '../../../lib/supabase/client2';
import Link from 'next/link';


interface Withdrawal {
  id: string;
  user_id: string;
  amount: number;
  status: string;
  created_at: string;
}

export default function WithdrawalApprovalPage() {
  const [withdrawals, setWithdrawals] = useState<Withdrawal[]>([]);
  const [loadingId, setLoadingId] = useState<string | null>(null);
  const [feedback, setFeedback] = useState('');

  useEffect(() => {
    const fetchWithdrawals = async () => {
      const { data, error } = await supabase
        .from('withdrawals')
        .select('*')
        .eq('status', 'pending')
        .order('created_at', { ascending: false });

      if (error) {
        console.error(error);
        setFeedback('❌ Failed to load withdrawals');
      } else {
        setWithdrawals(data || []);
      }
    };

    fetchWithdrawals();
  }, []);

  const handleApprove = async (withdrawalId: string) => {
    setLoadingId(withdrawalId);
    setFeedback('');
    try {
      await approveWithdrawal(withdrawalId);
      setFeedback('✅ Withdrawal approved successfully');
      setWithdrawals(prev => prev.filter(w => w.id !== withdrawalId));
    } catch (err: any) {
      setFeedback(err.message || '❌ Failed to approve withdrawal');
    } finally {
      setLoadingId(null);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">

    <Link href="/admin/dashboard" className="inline-flex items-center text-sm text-blue-400 hover:text-blue-600 mb-4">
      ← Back to Dashboard
    </Link>
      <h1 className="text-2xl font-bold mb-4">Pending Withdrawals</h1>

      {feedback && <p className="mb-4 text-center text-sm">{feedback}</p>}

      <table className="w-full text-sm border border-white/50">
        <thead className="bg-[#1a1a1a]">
          <tr>
            <th className="py-2 px-4 text-left">User ID</th>
            <th className="py-2 px-4">Amount</th>
            <th className="py-2 px-4">Status</th>
            <th className="py-2 px-4">Date</th>
            <th className="py-2 px-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {withdrawals.length === 0 && (
            <tr>
              <td colSpan={5} className="text-center py-4">
                No pending withdrawals
              </td>
            </tr>
          )}
          {withdrawals.map((withdrawal) => (
            <tr key={withdrawal.id} className="border-t">
              <td className="py-2 px-4">{withdrawal.user_id}</td>
              <td className="py-2 px-4">₦{withdrawal.amount}</td>
              <td className="py-2 px-4 capitalize">{withdrawal.status}</td>
              <td className="py-2 px-4">{new Date(withdrawal.created_at).toLocaleString()}</td>
              <td className="py-2 px-4">
                <button
                  onClick={() => handleApprove(withdrawal.id)}
                  className="bg-blue-600 text-white text-xs px-4 py-1 rounded hover:bg-blue-700 disabled:opacity-50"
                  disabled={loadingId === withdrawal.id}
                >
                  {loadingId === withdrawal.id ? 'Approving...' : 'Approve'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
