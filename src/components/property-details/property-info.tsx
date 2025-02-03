import React from "react";
import { Bed, Bath, Clock } from "lucide-react";
import { Property } from "../../types/property";

interface PropertyInfoProps {
  property: Property;
}

export function PropertyInfo({ property }: PropertyInfoProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-2">
        {property.is_featured && (
          <div className="bg-blue-500 text-white px-3 py-1 rounded text-sm">
            FEATURED
          </div>
        )}
        {property.is_new && (
          <div className="bg-red-500 text-white px-3 py-1 rounded text-sm">
            NEW
          </div>
        )}
      </div>

      <div>
        <h2 className="text-3xl font-bold text-white">{property.title}</h2>
        <p className="text-gray-400">{property.location}</p>
      </div>
    </div>
  );
}
