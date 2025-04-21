import React from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { RightIcon } from "./right-icon";

type PageHeaderProps = {
  pageTitle: string;
  link: string;
  linkTitle: string;
};

export function PageHeader({ pageTitle, link, linkTitle }: PageHeaderProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2 text-gray-400">
        <Link href="/admin/dashboard" className="hover:text-white">
          Home
        </Link>
        <span>
          <RightIcon />
        </span>
        <Link href={link} className="text-red-500">
          {linkTitle}
        </Link>
      </div>

      <h1 className="text-3xl font-bold text-white">{pageTitle}</h1>
    </div>
  );
}
