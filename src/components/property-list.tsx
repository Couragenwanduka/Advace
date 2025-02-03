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
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Modern smart home",
    location: "London, UK",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Modern smart home",
    location: "London, UK",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Modern smart home",
    location: "London, UK",
  },
];

export function PropertyList() {
  return (
    <div className="bg-[#1a1a1a] p-6 rounded-lg">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-semibold">Recent properties</h2>
          <p className="text-gray-400">Architects design houses</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property) => (
          <div key={property.id} className="group">
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-semibold">{property.title}</h3>
              <p className="text-gray-400">{property.location}</p>
              <button className="mt-2 text-blue-500 hover:text-blue-400 transition-colors">
                VIEW ALL
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
