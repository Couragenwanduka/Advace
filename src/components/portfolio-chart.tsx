import React from "react";
import { User } from "lucide-react";

type NewsItem = {
  title: string;
};

const news: NewsItem[] = [
  { title: "BNB, MATIC & BLUNT: Top crypto investors." },
  { title: "BNB, MATIC & BLUNT: Top crypto investors." },
  { title: "BNB, MATIC & BLUNT: Top crypto investors." },
];

export function PortfolioChart() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-xl font-semibold">BTCUSDT</h3>
          <p className="text-gray-400">Bitcoin</p>
        </div>
        <div>
          <div className="text-xl font-semibold">$23,738</div>
          <div className="text-green-500">+2.68%</div>
        </div>
      </div>

      {/* Chart placeholder */}
      <div className="h-48 mb-6 bg-[#2a2a2a] rounded-lg"></div>

      <div className="space-y-4">
        <h3 className="font-semibold">OTHER NEWS</h3>
        {news.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 p-3 bg-[#2a2a2a] rounded-lg"
          >
            <User className="text-blue-500" size={24} />
            <p className="text-sm">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
