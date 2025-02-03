"use client";
import { PropertyGrid } from "../../components/property-grid";
import { PropertyFilter } from "../../components/property-filter";
import { useEffect, useState } from "react";

export default function RealEstate() {
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    setCurrentPage(0);
    if (location.pathname.includes("assets")) {
      setCurrentPage(1);
    }
  }, []);

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Property</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
          List a property
        </button>
      </div>

      <div className="flex">
        <a
          className={`${
            currentPage == 1 ? "bg-red-500 text-white" : "bg-white text-black"
          } px-5 py-3 rounded-l-xl`}
          href="/real-estate/assets"
        >
          Assets
        </a>
        <a
          className={`${
            currentPage == 0 ? "bg-red-500 text-white" : "bg-white text-black"
          } px-5 py-3 rounded-r-xl`}
          href="/real-estate"
        >
          Properties
        </a>
      </div>

      <PropertyFilter />
      <PropertyGrid />
    </div>
  );
}
