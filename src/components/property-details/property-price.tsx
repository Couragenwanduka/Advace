import React from "react";

interface PropertyPriceProps {
  price: number;
}

export function PropertyPrice({ price }: PropertyPriceProps) {
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(price);

  return (
    <div className="flex flex-col gap-5">
      <div className="bg-[#1a1a1a] p-6 rounded-lg space-y-4">
        <div className="text-center">
          <div className="text-gray-400">On Sale</div>
          <div className="text-3xl font-bold">{formattedPrice}</div>
        </div>
      </div>

      <div className="bg-[#1a1a1a] p-6 rounded-lg space-y-4">
        <div className="space-y-2">
          <div className="text-center text-gray-400">Invest in property</div>
          <button className="w-full bg-white text-black py-2 rounded-lg hover:bg-gray-100 transition-colors">
            Fund to invest
          </button>
        </div>
      </div>
    </div>
  );
}
