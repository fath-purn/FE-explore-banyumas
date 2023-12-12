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

export default function CardTotal() {
  const [kecamatanTotal, setKecamatanTotal] = useState<String>("");
  const [wisataTotal, setWisataTotal] = useState<String>("");
  const [hotelTotal, setHotelTotal] = useState<String>("");
  const [ulasanTotal, setUlasanTotal] = useState<String>("");

  const dataKecamatan = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/kecamatan?page=1&limit=1`
    );
    const data = await response.json();
    setKecamatanTotal(String(data.data.length));
  };

  const dataWisata = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/wisata?page=1&limit=1`
    );
    const data = await response.json();
    setWisataTotal(String(data.data.pagination.total_items));
  };

  const dataHotel = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/hotel?page=1&limit=1`
    );
    const data = await response.json();
    setHotelTotal(String(data.data.pagination.total_items));
  };

  const dataUlasan = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/ulasan?page=1&limit=1`
    );
    const data = await response.json();
    setUlasanTotal(String(data.data.length));
  };

  useEffect(() => {
    dataKecamatan();
    dataWisata();
    dataHotel();
    dataUlasan();
  }, []);

  return (
    <div className="mt-5 grid grid-cols-2 gap-5">
      <Link href="#">
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
                {wisataTotal}
              </p>
            </div>
          </div>
        </div>
      </Link>
      <Link href="#">
        <div className="bg-[#469CEE] rounded-lg flex flex-row justify-between px-5 py-5">
          <div className="flex flex-row items-center space-x-2">
            <Icon
              path={mdiCityVariant}
              size={2.5}
              className="bg-[#B8DFF2] p-2 rounded-lg"
            />
            <div className="flex flex-col space-y-2">
              <h3 className="text-white text-lg font-semibold">Hotel</h3>
              <p className="text-white text-base font-semibold">{hotelTotal}</p>
            </div>
          </div>
        </div>
      </Link>
      <Link href="#">
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
                {kecamatanTotal}
              </p>
            </div>
          </div>
        </div>
      </Link>
      <Link href="#">
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
                {ulasanTotal}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
