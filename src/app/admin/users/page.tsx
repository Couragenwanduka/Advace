// page.tsx
import { Suspense } from "react";
import { UserTable } from "./user-table";
import { PageHeader } from "../../../components/page-header";


export default function HistoryPage() {
  return (
    <div className="space-y-8">
      <div className="md:mx-[80px] flex flex-col gap-6">
        <PageHeader
          pageTitle="Users"
          link="/admin/users" 
          linkTitle="Users"
        />
      </div>

      <div className="bg-[#1a1a1a] rounded-lg p-6">
        <div className="bg-[#222] p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-6">All Users</h2>
          <Suspense fallback={<div>Loading...</div>}>
            <UserTable />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
