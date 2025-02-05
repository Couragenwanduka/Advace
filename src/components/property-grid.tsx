import Link from "next/link";
import React from "react";

type Property = {
  id: number;
  image: string;
  title: string;
  location: string;
};

export const properties: Property[] = [
  {
    id: 1,
    image: "/images/parkplace.jpeg",
    title: "Park Place Villas",
    location: "Park Place Villas, little Venice, London,W2",
  },
  {
    id: 2,
    image: "/images/horizon.jpeg",
    title: "Horizon Heights Villas",
    location: "Horizon Heights, Chelsea, London, SW3",
  },
  {
    id: 3,
    image: "/images/hampstead.jpeg",
    title: "Hampstead Villas",
    location: "The Stables, Hampstead, London, NW3",
  },
  {
    id: 4,
    image: "/images/clifton.png",
    title: "Clifton Manor Villa",
    location: "Clifton Manor, Clifton, Bristol, BS8",
  },
  {
    id: 5,
    image: "/images/linden.jpeg",
    title: "Linden House",
    location: "Linden House, Notting Hill, London, W11",
  },
  {
    id: 6,
    image: "/images/riverside.jpeg",
    title: "Riverside Lodge Villa",
    location: "Riverside Lodge, Henley-on-Thames, Oxfordshire, RG9",
  },
  {
    id: 7,
    image: "/images/glade.png",
    title: "The Glade Villas",
    location: "The Glade, Salisbury, Wiltshire, SP1",
  },
  {
    id: 8,
    image: "/images/holcombe.png",
    title: "Holcombe House",
    location: "Holcombe House, Harrogate, North Yorkshire, HG1",
  },
  {
    id: 9,
    image: "/images/haven.png",
    title: "Haven Court Villas",
    location: "Haven Court, Hampstead Heath, London, NW3",
  },
  {
    id: 10,
    image: "/images/bennetts.png",
    title: "Bennetts Court Villa",
    location: "Bennetts Court, Cambridge,  CB2",
  },
];

export function PropertyGrid({ count }: any) {
  count = count >= 0 ? count : 30;
  return (
    <div className="bg-[#1a1a1a] p-6 rounded-lg">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-white">Recent properties</h2>
        <p className="text-gray-400">Architects design houses</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pr-12">
        {properties.slice(0, count).map((property) => (
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
