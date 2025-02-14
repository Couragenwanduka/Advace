// funding-history-table.tsx
import { getAllFundingRecords } from "../../../../lib/supabase/client";
import { properties } from "../../../../components/property-grid";
import { FundingTableClient } from "./funding-table-client";

interface FundingRecord {
  id: string;
  property: string;
  amount: number;
  status: "pending" | "completed" | "failed";
  created_at: string;
  method: "Bank" | "Crypto";
}

export async function FundingHistoryTable() {
  const fundingRecords = await getAllFundingRecords();

  // Process records
  const processedRecords = fundingRecords.map((record: any) => {
    const property = properties.find((prop) => prop.id == record.property);
    return {
      ...record,
      status: record.status ?? "pending",
      property:
        record.property.length < 5 ? property?.title : properties[0].title,
    };
  });

  return <FundingTableClient initialRecords={processedRecords} />;
}
