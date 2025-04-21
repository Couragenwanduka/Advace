import React from "react";
import Link from "next/link";

export function MiniCard({ icon, title, label, link}: any) {
  return (
    <Link href={link || '#'}>
       <div className="flex flex-row px-4 py-6 gap-2 bg-[#FFFFFF1A] rounded-lg">
      <img src={icon} alt={title} className="w-[100px] h-[100px]" />
      <div className="flex flex-col gap-2 justify-center">
        <p className="text-white font-[800px] text-[22px]">{title}</p>
        <p className="text-white font-[500px] text-base">{label}</p>
      </div>
    </div>
     </Link>
  );
}
