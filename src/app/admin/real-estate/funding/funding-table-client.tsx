// funding-table-client.tsx
"use client";

import { useState } from "react";
import Button from "../../../../components/button";
import { supabase } from "../../../../lib/supabase/client";

interface FundingRecord {
  id: string;
  property: string;
  amount: number;
  status: "pending" | "completed" | "failed";
  created_at: string;
  method: "Bank" | "Crypto";
}

interface Props {
  initialRecords: FundingRecord[];
}

export function FundingTableClient({ initialRecords }: Props) {
  const [records, setRecords] = useState(initialRecords);

  const getStatusStyle = (status: string) => {
    const styles = {
      pending: "bg-yellow-500/20 text-yellow-500",
      completed: "bg-green-500/20 text-green-500",
      failed: "bg-red-500/20 text-red-500",
    };
    return styles[status as keyof typeof styles] || "";
  };

  const updateFundingRecord = async (id: string, status: string) => {
    const { error } = await supabase
      .from("funding_records_view")
      .update({ status: status })
      .eq("id", id);

    if (error) {
      console.error("Error updating funding record:", error);
      return;
    }

    // Update local state instead of reloading the page
    setRecords(
      records.map((record) =>
        record.id === id ? { ...record, status: status as any } : record
      )
    );
    alert("Funding record updated");
  };

  return (
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
          {records?.map((record) => (
            <tr key={record.id} className="border-b border-gray-800">
              <td className="p-3">#{record.id}</td>
              <td className="p-3">{record.property}</td>
              <td className="p-3">${record.amount.toLocaleString()}</td>
              <td className="p-3">
                <span
                  className={`px-2 py-1 rounded ${getStatusStyle(
                    record.status
                  )}`}
                >
                  {record.status.charAt(0).toUpperCase() +
                    record.status.slice(1)}
                </span>
              </td>
              <td className="p-3">
                {new Date(record.created_at).toLocaleDateString()}
              </td>
              <td className="p-3 flex gap-2">
                {record.status === "pending" ? (
                  <>
                    <Button
                      className="bg-green-500 text-white px-3 py-1 rounded"
                      onClick={() =>
                        updateFundingRecord(record.id, "completed")
                      }
                    >
                      Approve
                    </Button>
                    <Button
                      className="bg-red-500 text-white px-3 py-1 rounded"
                      onClick={() => updateFundingRecord(record.id, "failed")}
                    >
                      Decline
                    </Button>
                  </>
                ) : (
                  <Button
                    className="bg-yellow-600 text-white px-3 py-1 rounded"
                    onClick={() => updateFundingRecord(record.id, "pending")}
                  >
                    Change to Pending
                  </Button>
                )}
              </td>
            </tr>
          ))}
          {!records?.length && (
            <tr>
              <td colSpan={6} className="p-3 text-center">
                No funding records found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
