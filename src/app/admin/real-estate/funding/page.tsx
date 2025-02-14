// page.tsx
import { Suspense } from "react";
import { FundingHistoryTable } from "./funding-history-table";
import { PageHeader } from "../../../../components/page-header";
import { PropAssetSwitcher } from "../../../../components/prop-asset-switcher";
import Link from "next/link";

export default function HistoryPage() {
  return (
    <div className="space-y-8">
      <div className="md:mx-[80px] flex flex-col gap-6">
        <PageHeader
          pageTitle="History"
          link="/admin/real-estate/assets"
          linkTitle="Assets"
        />

        <div className="rounded-3xl bg-[#292929] px-6 py-[35px] flex justify-between items-center mb-6">
          <PropAssetSwitcher />

          <div className="flex space-x-2">
            <Link
              href="/admin/real-estate/assets/withdraw"
              className="bg-white text-black px-4 py-2 rounded-xl"
            >
              Withdraw dividend
            </Link>
            <Link
              href="/admin/real-estate/funding"
              className="bg-white text-black px-4 py-2 rounded-xl"
            >
              History
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-[#1a1a1a] rounded-lg p-6">
        <div className="bg-[#222] p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-6">Account Funding history</h2>
          <Suspense fallback={<div>Loading...</div>}>
            <FundingHistoryTable />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
