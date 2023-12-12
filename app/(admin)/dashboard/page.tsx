import { Metadata } from "next";
import Link from "next/link";
import CardTotal from "@/app/ui/admin/cardTotal";
import React from "react";

export const metadata: Metadata = {
  title: "Dashboard ",
};

export default function page() {
  return (
      <div className="">
        <div className="flex justify-between items-center m-auto">
          <h3 className="text-black text-[1.18rem] md:text-2xl font-semibold">
            Tinjauan Keseluruhan
          </h3>
          <Link
            href="/"
            className="text-gray-500 text-base-md md:text-xl font-medium"
          >
            Dashboard
          </Link>
        </div>
        <div className="">
          <CardTotal />
        </div>
      </div>
  );
}
