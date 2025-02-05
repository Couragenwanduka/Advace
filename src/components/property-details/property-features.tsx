import React from "react";
import { Check, CheckCircle2 } from "lucide-react";

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
            {/* <CheckCircle2
              size={16}
              className="text-black bg-green-500 rounded-full"
            /> */}
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.9974 18.3337C14.5998 18.3337 18.3307 14.6027 18.3307 10.0003C18.3307 5.39795 14.5998 1.66699 9.9974 1.66699C5.39502 1.66699 1.66406 5.39795 1.66406 10.0003C1.66406 14.6027 5.39502 18.3337 9.9974 18.3337ZM14.8712 8.20743C15.2617 7.81691 15.2617 7.18374 14.8712 6.79322C14.4806 6.40269 13.8475 6.40269 13.457 6.79322L9.16406 11.0861L7.37117 9.29322C6.98064 8.90269 6.34748 8.90269 5.95696 9.29322C5.56643 9.68374 5.56643 10.3169 5.95696 10.7074L8.45696 13.2074C8.84748 13.598 9.48065 13.598 9.87117 13.2074L14.8712 8.20743Z"
                fill="#45B36B"
              />
            </svg>

            <span className="text-gray-300">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
