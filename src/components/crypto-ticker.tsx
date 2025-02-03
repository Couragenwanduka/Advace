import React from "react";
import { TrendingUp, TrendingDown } from "lucide-react";

type CryptoData = {
  symbol: string;
  price: string;
  change: string;
};

const cryptoData: CryptoData[] = [
  { symbol: "BTCUSDT", price: "$23,738", change: "+2.68%" },
  { symbol: "ETHUSDT", price: "$1,845", change: "+1.24%" },
  { symbol: "BNBUSDT", price: "$312", change: "-0.35%" },
  { symbol: "ADAUSDT", price: "$0.52", change: "+1.12%" },
];

export function CryptoTicker() {
  return (
    <div className="w-full overflow-hidden bg-[#1a1a1a] rounded-lg">
      <div className="flex animate-scroll">
        {cryptoData.map((crypto, index) => (
          <div
            key={index}
            className="flex items-center space-x-2 px-6 py-3 whitespace-nowrap"
          >
            <span className="font-medium">{crypto.symbol}</span>
            <span>{crypto.price}</span>
            <div
              className={`flex items-center ${
                crypto.change.startsWith("+")
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              {crypto.change.startsWith("+") ? (
                <TrendingUp size={16} className="mr-1" />
              ) : (
                <TrendingDown size={16} className="mr-1" />
              )}
              <span>{crypto.change}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
