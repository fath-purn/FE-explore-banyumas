"use client";

import Icon from "@mdi/react";
import {
  mdiImageFilterHdrOutline,
  mdiCityVariant,
  mdiAccountGroupOutline,
  mdiMapMarkerRadiusOutline,
} from "@mdi/js";
import Link from "next/link";
import { useState, useEffect } from "react";
import { CountData } from "@/app/utils/definitions";

export default function CardTotal() {
  const [data, setData] = useState<CountData>();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/all`);
      const result = await response.json();
      setData(result.data);
    };

    fetchData();
  }, []);

  return (
    <div className="mt-5 grid grid-cols-2 gap-5">
      <Link href="/dashboard/wisata">
        <div className="bg-[#469CEE] rounded-lg flex flex-row justify-between px-5 py-5">
          <div className="flex flex-row items-center space-x-2">
            <Icon
              path={mdiImageFilterHdrOutline}
              size={2.5}
              className="bg-[#B8DFF2] p-2 rounded-lg"
            />
            <div className="flex flex-col space-y-2">
              <h3 className="text-white text-lg font-semibold">Wisata</h3>
              <p className="text-white text-base font-semibold">
                {data?.wisata ? data.wisata : "-"}
              </p>
            </div>
          </div>
        </div>
      </Link>
      <Link href="/dashboard/hotel">
        <div className="bg-[#469CEE] rounded-lg flex flex-row justify-between px-5 py-5">
          <div className="flex flex-row items-center space-x-2">
            <Icon
              path={mdiCityVariant}
              size={2.5}
              className="bg-[#B8DFF2] p-2 rounded-lg"
            />
            <div className="flex flex-col space-y-2">
              <h3 className="text-white text-lg font-semibold">Hotel</h3>
              <p className="text-white text-base font-semibold">
                {data?.hotel ? data?.hotel : "-"}
              </p>
            </div>
          </div>
        </div>
      </Link>
      <Link href="/dashboard/kecamatan">
        <div className="bg-[#469CEE] rounded-lg flex flex-row justify-between px-5 py-5">
          <div className="flex flex-row items-center space-x-2">
            <Icon
              path={mdiMapMarkerRadiusOutline}
              size={2.5}
              className="bg-[#B8DFF2] p-2 rounded-lg"
            />
            <div className="flex flex-col space-y-2">
              <h3 className="text-white text-lg font-semibold">Kecamatan</h3>
              <p className="text-white text-base font-semibold">
                {data?.kecamatan ? data?.kecamatan : "-"}
              </p>
            </div>
          </div>
        </div>
      </Link>
      <Link href="/dashboard/ulasan">
        <div className="bg-[#469CEE] rounded-lg flex flex-row justify-between px-5 py-5">
          <div className="flex flex-row items-center space-x-2">
            <Icon
              path={mdiAccountGroupOutline}
              size={2.5}
              className="bg-[#B8DFF2] p-2 rounded-lg"
            />
            <div className="flex flex-col space-y-2">
              <h3 className="text-white text-lg font-semibold">Ulasan</h3>
              <p className="text-white text-base font-semibold">
                {data?.ulasan ? data?.ulasan : "-"}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
