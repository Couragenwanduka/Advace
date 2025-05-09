import { Property } from "../../types/property";

interface PropertyPriceProps {
  buy?: boolean; // Defines buy as an optional boolean prop
  price: number;
}

export function PropertyPrice({ buy, price }: PropertyPriceProps) {
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(price);

  return (
    <div className="flex flex-col gap-5">
      {/* Show price only if buy is true */}
      {buy && (
        <div className="bg-[#1a1a1a] p-6 rounded-lg space-y-4">
          <div className="text-center">
            <div className="text-gray-400">On Sale</div>
            <div className="text-3xl font-bold">{formattedPrice}</div>
          </div>
        </div>
      )}

      <div className="bg-[#1a1a1a] p-6 rounded-lg space-y-4">
        <div className="space-y-2 flex flex-col gap-6">
          <div className="text-center text-gray-400">{buy? "Fund to Buy" : "Invest in property"}</div>
          <a
            href="/real-estate/funding"
            className="px-5 w-full text-center bg-white text-black py-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {buy ? "Buy Now" : "Fund to Invest"}
          </a>
        </div>
      </div>
    </div>
  );
}
