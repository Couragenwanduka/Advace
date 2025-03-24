import { Bath, Bed, Clock } from "lucide-react";
import React from "react";
import { Property } from "../../types/property";

interface PropertyDescriptionProps {
  description: string;
  property: Property;
}

export function PropertyDescription({
  description,
  property,
}: PropertyDescriptionProps) {
  return (
    <div className="space-y-6 bg-[#FFFFFF1A] p-5 rounded-lg">
      <h3 className="text-xl font-semibold">Description</h3>
      <div className="flex space-x-4">
        <div className="flex items-center space-x-2 bg-[#1a1a1a] px-4 py-2 rounded-xl border border-[#E6E8EC80]/50 bg-[#FFFFFF1A]">
          <Bed size={20} />
          <span>{property.bedrooms} Bedroom</span>
        </div>
        <div className="flex items-center space-x-2 bg-[#1a1a1a] px-4 py-2  rounded-xl border border-[#E6E8EC80]/50 bg-[#FFFFFF1A]">
          <Bath size={20} />
          <span>{property.bathrooms} Bathroom</span>
        </div>
        <div className="flex items-center space-x-2 bg-[#1a1a1a] px-4 py-2  rounded-xl border border-[#E6E8EC80]/50 bg-[#FFFFFF1A]">
          <Clock size={20} />
          <span>{property.square_meters}sqm</span>
        </div>
      </div>
      <div className="space-y-4 text-[#A0AEC0]">
        {description.split("\n\n").map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}
