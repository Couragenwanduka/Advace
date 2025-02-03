import React from "react";
import { Check } from "lucide-react";

interface PropertyFeaturesProps {
  features: string[];
}

export function PropertyFeatures({ features }: PropertyFeaturesProps) {
  return (
    <div className="bg-[#1a1a1a] p-6 rounded-lg">
      <h3 className="text-xl font-semibold mb-4">Property Features</h3>
      <div className="space-y-3">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center space-x-2">
            <Check size={16} className="text-green-500" />
            <span className="text-gray-300">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
