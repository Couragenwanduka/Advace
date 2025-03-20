// "use Client";
// import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
// import { cookies } from "next/headers";
// import Link from "next/link";
// import { PageHeader } from "../../../../components/page-header";
// import { PropAssetSwitcher } from "../../../../components/prop-asset-switcher";
// import { schemaName } from "../../../../consts";
// import { properties } from "../../../../components/property-grid";
// import { getUserFundingRecords } from "../../../../lib/supabase/client";
// import { getAUser } from "../../../functions";
// import { useState, useEffect } from "react";

// interface FundingRecord {
//   id: string;
//   property: string;
//   amount: number;
//   status: "pending" | "completed" | "failed";
//   created_at: string;
//   method: "Bank" | "Crypto";
// }

// export default async function HistoryPage() {
//   const [user, setUser] = useState<any>(null);

//   useEffect(() => {
//     const storedUser = getAUser();
//     console.log(storedUser, "user fetched from localStorage");
//     setUser(storedUser);
//   }, []);
//   // const supabase = createServerComponentClient({ cookies });
//   // const user = JSON.parse(localStorage.getItem("advanta-user") || "{}");

//   // const { data: fundingRecords, error } = await supabase
//   //   .schema("advanta")
//   //   .from("funding_records")
//   //   .select("*")
//   //   .eq("user_id", user.id)
//   //   .order("created_at", { ascending: false });

//   // if (error) {
//   //   console.error("Error fetching funding records:", error);
//   // }

//   const fundingRecords = await getUserFundingRecords(user.id);
//   for (const record of fundingRecords as any) {
//     const property = properties.find((prop) => prop.id == record.property);
//     record.status = record.status != null ? record.status : "pending";
//     record.property =
//       record.property.length < 5 ? property?.title : properties[0].title;
//   }

//   const getStatusStyle = (status: string) => {
//     const styles = {
//       pending: "bg-yellow-500/20 text-yellow-500",
//       completed: "bg-green-500/20 text-green-500",
//       failed: "bg-red-500/20 text-red-500",
//     };
//     return styles[status as keyof typeof styles] || "";
//   };

//   return (
//     <div className="space-y-8">
//       <PageHeader
//         pageTitle="History"
//         link="/real-estate/assets"
//         linkTitle="Assets"
//       />

//       <div className="rounded-3xl bg-[#292929] px-6 py-[35px] flex justify-between items-center mb-6">
//         <PropAssetSwitcher />
//         <div className="flex space-x-2">
//           <Link
//             href="/real-estate/assets/withdraw"
//             className="bg-white text-black px-4 py-2 rounded-xl"
//           >
//             Withdraw dividend
//           </Link>
//           <Link
//             href="/real-estate/assets/funding"
//             className="bg-white text-black px-4 py-2 rounded-xl"
//           >
//             Funding
//           </Link>
//         </div>
//       </div>

//       <div className="bg-[#1a1a1a] rounded-lg p-6">
//         <div className="bg-[#222] p-6 rounded-lg">
//           {/* <h2 className="text-xl font-bold mb-6">Account Funding History</h2> */}
//           <div className="overflow-x-auto">
//             <table className="w-full">
//               <thead>
//                 <tr className="bg-pink-100/10 text-left">
//                   <th className="p-3 text-pink-200">ID</th>
//                   <th className="p-3 text-pink-200">Property</th>
//                   <th className="p-3 text-pink-200">Amount</th>
//                   <th className="p-3 text-pink-200">Status</th>
//                   <th className="p-3 text-pink-200">Date</th>
//                   <th className="p-3 text-pink-200">Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {fundingRecords?.map((record: FundingRecord) => (
//                   <tr key={record.id} className="border-b border-gray-800">
//                     <td className="p-3">#{record.id}</td>
//                     <td className="p-3">{record.property}</td>
//                     <td className="p-3">${record.amount.toLocaleString()}</td>
//                     <td className="p-3">
//                       <span
//                         className={`px-2 py-1 rounded ${getStatusStyle(
//                           record.status
//                         )}`}
//                       >
//                         {record.status.charAt(0).toUpperCase() +
//                           record.status.slice(1)}
//                       </span>
//                     </td>
//                     <td className="p-3">
//                       {new Date(record.created_at).toLocaleDateString()}
//                     </td>
//                     <td className="p-3">
//                       <button className="bg-white text-black px-3 py-1 rounded">
//                         Receipt
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//                 {!fundingRecords?.length && (
//                   <tr>
//                     <td colSpan={6} className="p-3 text-center">
//                       No funding records found
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { PageHeader } from "../../../../components/page-header";
import { PropAssetSwitcher } from "../../../../components/prop-asset-switcher";
import { properties } from "../../../../components/property-grid";
import { getUserFundingRecords } from "../../../../lib/supabase/client";
import { getAUser } from "../../../functions";

interface FundingRecord {
  id: string;
  property: string;
  amount: number;
  status: "pending" | "completed" | "failed";
  created_at: string;
  method: "Bank" | "Crypto";
}

export default function HistoryPage() {
  const [user, setUser] = useState<any>(null);
  const [fundingRecords, setFundingRecords] = useState<FundingRecord[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const storedUser = getAUser();
      if (!storedUser?.id) return;

      setUser(storedUser);
      const records = await getUserFundingRecords(storedUser.id);

      for (const record of records as any) {
        const property = properties.find((prop) => prop.id == record.property);
        record.status = record.status != null ? record.status : "pending";
        record.property =
          record.property.length < 5 ? property?.title : properties[0].title;
      }

      setFundingRecords(records);
    };

    fetchData();
  }, []);

  const getStatusStyle = (status: string) => {
    const styles = {
      pending: "bg-yellow-500/20 text-yellow-500",
      completed: "bg-green-500/20 text-green-500",
      failed: "bg-red-500/20 text-red-500",
    };
    return styles[status as keyof typeof styles] || "";
  };

  return (
    <div className="space-y-8">
      <PageHeader pageTitle="History" link="/real-estate/assets" linkTitle="Assets" />

      <div className="rounded-3xl bg-[#292929] px-6 py-[35px] flex justify-between items-center mb-6">
        <PropAssetSwitcher />
        <div className="flex space-x-2">
          <Link href="/real-estate/assets/withdraw" className="bg-white text-black px-4 py-2 rounded-xl">
            Withdraw dividend
          </Link>
          <Link href="/real-estate/assets/funding" className="bg-white text-black px-4 py-2 rounded-xl">
            Funding
          </Link>
        </div>
      </div>

      <div className="bg-[#1a1a1a] rounded-lg p-6">
        <div className="bg-[#222] p-6 rounded-lg">
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
                {fundingRecords.length > 0 ? (
                  fundingRecords.map((record) => (
                    <tr key={record.id} className="border-b border-gray-800">
                      <td className="p-3">#{record.id}</td>
                      <td className="p-3">{record.property}</td>
                      <td className="p-3">${record.amount.toLocaleString()}</td>
                      <td className="p-3">
                        <span className={`px-2 py-1 rounded ${getStatusStyle(record.status)}`}>
                          {record.status.charAt(0).toUpperCase() + record.status.slice(1)}
                        </span>
                      </td>
                      <td className="p-3">{new Date(record.created_at).toLocaleDateString()}</td>
                      <td className="p-3">
                        <button className="bg-white text-black px-3 py-1 rounded">Receipt</button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className="p-3 text-center">
                      No funding records found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

