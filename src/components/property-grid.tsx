import Link from "next/link";
import React from "react";

type Property = {
  id: number;
  image: string;
  title: string;
  location: string;
};

const properties: Property[] = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Modern smart home",
    location: "London, YC",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Modern smart home",
    location: "London, YC",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Modern smart home",
    location: "London, YC",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Modern smart home",
    location: "London, YC",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Modern smart home",
    location: "London, YC",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Modern smart home",
    location: "London, YC",
  },
];

export function PropertyGrid() {
  return (
    <div className="bg-[#1a1a1a] p-6 rounded-lg">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-white">Recent properties</h2>
        <p className="text-gray-400">Architects design houses</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pr-12">
        {properties.map((property) => (
          <div key={property.id} className="group">
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="mt-4 flex flex-col gap-[10px]">
              <h3 className="text-lg font-semibold text-white">
                {property.title}
              </h3>
              <p className="text-gray-400">{property.location}</p>
              <Link
                href={`/real-estate/${property.id}`}
                className="mt-2 w-2/3 text-center py-[10px] border rounded-xl border-[#4FD1C5] text-[#00ffcc] hover:text-[#00ffaa] transition-colors uppercase text-sm"
              >
                View all
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
