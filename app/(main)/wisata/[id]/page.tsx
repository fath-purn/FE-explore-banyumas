"use client";

import LinkHistory from "@/app/ui/linkHistory";
import Image from "next/image";
import Link from "next/link";
import Keterangan from "@/app/ui/wisata/keterangan";
import { mdiMapMarker } from "@mdi/js";
import Icon from "@mdi/react";
import CardHotel from "@/app/ui/hotel/cardHotel";
import Footer from "@/app/ui/footer";
import { useState, useEffect } from "react";
import { Wisata } from "@/app/utils/definitions";

async function getDataById({ params }: { params: string }) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/wisata/${params}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  console.log(data.data, "atas");
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
  const [dataWisataById, setDataWisataById] = useState<Wisata>();
  const [dataHotel, setDataHotel] = useState<any[]>([]);
  const limit = Number(searchParams?.limit) || 5;
  const currentPage = Number(searchParams?.page) || 1;
  const search = searchParams?.search || "";

  useEffect(() => {
    async function fetchData() {
      const data = await getDataById({ params: params.id });
      setDataWisataById(data.wisataObject);
      setDataHotel(data.hotelTerdekat);
    }

    fetchData();
  }, [params]);

  return (
    <div className="mt-12 md:mt-0">
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-row gap-1 w-[90%] md:w-[90%] mt-10">
          <LinkHistory
            link="wisata"
            nama={dataWisataById?.nama ? dataWisataById?.nama : "Wisata"}
          />
        </div>
        <h1 className="text-black text-[40px] font-semibold text-center mt-10">
          {dataWisataById?.nama}
        </h1>

        {/* Images */}
        <div className="flex flex-col md:flex-row w-[90%] md:w-[90%] mt-8 gap-5">
          {dataWisataById?.gambar[0] && (
            <Image
              src={dataWisataById?.gambar[0]}
              alt={dataWisataById?.nama}
              width={737}
              height={395}
              className="rounded-xl w-full md:w-[55%] shadow-sm max-h-[395px] object-cover"
            />
          )}
          <div className="flex flex-col justify-between w-full md:w-[50%] lg:w-[45%]">
            {dataWisataById?.gambar[1] && (
              <Image
                src={dataWisataById?.gambar[1]}
                alt={dataWisataById?.nama}
                width={574}
                height={187}
                className="rounded-xl w-full mb-5 lg:max-w-[507px] shadow-sm max-h-[187px] object-cover"
              />
            )}
            {dataWisataById?.gambar[2] && (
              <Image
                src={dataWisataById?.gambar[2]}
                alt={dataWisataById?.nama}
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
              Tentang {dataWisataById?.nama}
            </h2>
            <p className="text-gray-500 mt-3 text-[20px] font-normal">
              {dataWisataById?.deskripsi}
            </p>
            <div className="grid grid-cols-2 mt-5">
              {dataWisataById?.keterangan && (
                <Keterangan
                  detail={true}
                  keterangan={dataWisataById?.keterangan}
                />
              )}
            </div>
          </div>
          <div className="flex flex-col w-full lg:ml-5 md:w-[50%] lg:w-[45%] shadow-md rounded-lg">
            <iframe
              src={dataWisataById?.maps}
              height="333"
              className="rounded-xl"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="flex flex-row gap-3 my-3">
              <Icon path={mdiMapMarker} size={3} color="#FE6984" />
              <p className=" text-gray-700 text-lg font-light">
                {dataWisataById?.alamat}
              </p>
            </div>
          </div>
        </div>

        <div className="w-[90%] md:w-[90%] mt-10">
          <h2 className="text-black text-[25px] font-semibold mb-5">
            Hotel serupa terdekat
          </h2>
          {dataHotel ? (
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5">
              <Link href={`/hotel/${dataHotel[0]?.id}`}>
                <div className="flex-1">
                  <Image
                    src={dataHotel[0]?.gambar}
                    alt={dataHotel[0]?.nama}
                    width={659}
                    height={390}
                    className="rounded-xl relative z-0 shadow-sm max-h-[390px] object-cover grayscale hover:grayscale-0"
                  />
                  <p className="relative bottom-10 md:bottom-16 left-5 md:left-10 text-white text-lg md:text-[25px] font-bold">
                    {dataHotel[0]?.nama}
                  </p>
                </div>
              </Link>

              {dataHotel[1] && (
                <Link href={`/hotel/${dataHotel[1]?.id}`}>
                  <div className="flex-1">
                    <Image
                      src={dataHotel[1]?.gambar}
                      alt={dataHotel[1]?.nama}
                      width={659}
                      height={390}
                      className="rounded-xl relative z-0 shadow-sm max-h-[390px] object-cover grayscale hover:grayscale-0"
                    />
                    <p className="relative bottom-10 md:bottom-16 left-5 md:left-10 text-white text-lg md:text-[25px] font-bold">
                      {dataHotel[1]?.nama}
                    </p>
                  </div>
                </Link>
              )}
            </div>
          ) : (
            <div>
              <p>Tidak ditemukan hotel terdekat</p>
            </div>
          )}
        </div>

        <div className="w-[95%] md:w-[90%] mt-0">
          <h2 className="text-black text-[25px] font-semibold mb-5">
            Hotel terdekat lainnya
          </h2>
          <CardHotel limit={limit} currentPage={currentPage} search={search} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
