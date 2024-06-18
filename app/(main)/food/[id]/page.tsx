"use client";

import LinkHistory from "@/app/ui/linkHistory";
import Image from "next/image";
import Link from "next/link";
import { mdiMapMarker } from "@mdi/js";
import Icon from "@mdi/react";
import Footer from "@/app/ui/footer";
import CardWisata from "@/app/ui/wisata/cardWisata";
import { useState, useEffect } from "react";
import { Makanan, City } from "@/app/utils/definitions";
import CardBeli from "@/app/ui/food/beli";
import CardFood from "@/app/ui/food/cardFood";

async function getDataById({ params }: { params: string }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/food/${params}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  return data.data;
}

export default function Page({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams?: {
    limit?: number;
    page?: string;
    search?: string;
  };
}) {
  const [dataMakananById, setDataMakananById] = useState<Makanan>();
  const limit = Number(searchParams?.limit) || 5;
  const currentPage = Number(searchParams?.page) || 1;
  const search = searchParams?.search || "";

  useEffect(() => {
    async function fetchData() {
      const data = await getDataById({ params: params.id });
      setDataMakananById(data);
    }

    fetchData();
  }, [params]);

  return (
    <div className="mt-12 md:mt-0">
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-row gap-1 w-[90%] md:w-[90%] mt-10">
          <LinkHistory
            link="hotel"
            nama={dataMakananById?.nama ? dataMakananById?.nama : "Hotel"}
          />
        </div>
        <h1 className="text-black text-[40px] font-semibold text-center mt-10">
          {dataMakananById?.nama}
        </h1>

        {/* Images */}
        <div className="flex flex-col md:flex-row w-[90%] md:w-[90%] mt-8 gap-5">
          {dataMakananById?.gambar[0] && (
            <Image
              src={dataMakananById?.gambar[0]}
              alt={dataMakananById?.nama}
              width={737}
              height={395}
              className="rounded-xl w-full md:w-[55%] shadow-sm max-h-[395px] object-cover"
            />
          )}
          <div className="flex flex-col justify-between w-full md:w-[50%] lg:w-[45%]">
            {dataMakananById?.gambar[1] && (
              <Image
                src={dataMakananById?.gambar[1]}
                alt={dataMakananById?.nama}
                width={574}
                height={187}
                className="rounded-xl w-full mb-5 lg:max-w-[507px] shadow-sm max-h-[187px] object-cover"
              />
            )}
            {dataMakananById?.gambar[2] && (
              <Image
                src={dataMakananById?.gambar[2]}
                alt={dataMakananById?.nama}
                width={574}
                height={187}
                className="rounded-xl w-full lg:max-w-[507px] shadow-sm max-h-[187px] object-cover"
              />
            )}
          </div>
        </div>
        <div className="flex flex-col md:flex-row w-[90%] md:w-[90%] mt-8 gap-5">
          <div className="flex flex-col w-full md:w-[55%]">
            <h2 className="text-black text-3xl font-semibold">
              Deskripsi {dataMakananById?.nama}
            </h2>
            <p className="text-gray-500 mt-3 text-[20px] font-normal">
              {dataMakananById?.deskripsi}
            </p>
            {/* Harga */}
            <h3 className="text-black text-[14px] sm:text-[32px] font-bold">
              RP {dataMakananById?.harga.toLocaleString("id-ID")}
            </h3>
          </div>
          <CardBeli harga={dataMakananById?.harga ? dataMakananById.harga : 1} nama={dataMakananById ? dataMakananById.nama : ""} />
        </div>

        <div className="w-[90%] md:w-[90%] mt-5">
          <h2 className="text-black text-[25px] font-semibold mb-5">
            Wisata terdekat lainnya
          </h2>
          <CardFood limit={limit} currentPage={currentPage} search={search} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
