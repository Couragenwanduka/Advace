"use client";
import React, { useEffect, useState } from "react";

export function PropAssetSwitcher() {
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    setCurrentPage(0);
    if (location.pathname.includes("assets")) {
      setCurrentPage(1);
    }
  }, []);
  return (
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
  );
}
