interface PropertyPriceProps {
  buy: boolean;
}


export function PropertyPrice({ buy }: PropertyPriceProps) {
  return (
    <div className="flex flex-col gap-5">
      <div className="bg-[#1a1a1a] p-6 rounded-lg space-y-4">
        <div className="space-y-2 flex flex-col gap-6">
          <div className="text-center text-gray-400">Invest in property</div>
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
