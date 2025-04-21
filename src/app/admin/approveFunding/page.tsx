
'use client';

import { useEffect, useState } from 'react';
import { approveDeposit } from '../../../lib/supabase/client';
import { supabase } from '../../../lib/supabase/client';
import Link from 'next/link';

interface Deposit {
  id: string;
  user_id: string;
  amount: number;
  status: string;
  created_at: string;
}

export default function DepositApprovalPage() {
  const [deposits, setDeposits] = useState<Deposit[]>([]);
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState('');

  useEffect(() => {
    const fetchDeposits = async () => {
      const { data, error } = await supabase
        .from('deposits')
        .select('*')
        .eq('status', 'pending')
        .order('created_at', { ascending: false });

      if (error) {
        console.error(error);
        setFeedback('Failed to load deposits');
      } else {
        setDeposits(data || []);
      }
    };

    fetchDeposits();
  }, []);

  const handleApprove = async (depositId: string) => {
    setLoading(true);
    try {
      await approveDeposit(depositId);
      setFeedback('✅ Deposit approved successfully');
      setDeposits(prev => prev.filter(d => d.id !== depositId)); // remove from list
    } catch (err) {
      console.error(err);
      setFeedback('❌ Failed to approve deposit');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
        <Link href="/admin/dashboard" className="inline-flex items-center text-sm text-blue-400 hover:text-blue-600 mb-4">
      ← Back to Dashboard
    </Link>
      <h1 className="text-2xl font-bold mb-4">Pending Deposit Approvals</h1>

      {feedback && <p className="mb-4 text-sm text-center">{feedback}</p>}

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
          {deposits.length === 0 && (
            <tr>
              <td colSpan={5} className="text-center py-4">
                No pending deposits
              </td>
            </tr>
          )}
          {deposits.map((deposit) => (
            <tr key={deposit.id} className="border-t">
              <td className="py-2 px-4">{deposit.user_id}</td>
              <td className="py-2 px-4">₦{deposit.amount}</td>
              <td className="py-2 px-4 capitalize">{deposit.status}</td>
              <td className="py-2 px-4">{new Date(deposit.created_at).toLocaleString()}</td>
              <td className="py-2 px-4">
                <button
                  onClick={() => handleApprove(deposit.id)}
                  className="bg-green-600 text-white text-xs px-4 py-1 rounded hover:bg-green-700 disabled:opacity-50"
                  disabled={loading}
                >
                  {loading ? 'Approving...' : 'Approve'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
