"use client";

import LinkHistory from "@/app/ui/linkHistory";
import Image from "next/image";
import Link from "next/link";
import { mdiMapMarker, mdiWhatsapp } from "@mdi/js";
import Icon from "@mdi/react";
import Footer from "@/app/ui/footer";
import CardWisata from "@/app/ui/wisata/cardWisata";
import Fasilitas from "@/app/ui/hotel/fasilitas";
import { useState, useEffect } from "react";
import { Hotel } from "@/app/utils/definitions";

async function getDataById({ params }: { params: string }) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/hotel/${params}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  return data.data;
}

async function getData() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/hotel?limit=2&page=1`,
    { cache: "no-store" }
  );

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
  const [dataHotelById, setDataHotelById] = useState<Hotel>();
  const [dataHotel, setDataHotel] = useState<any[]>([]);
  const limit = Number(searchParams?.limit) || 5;
  const currentPage = Number(searchParams?.page) || 1;
  const search = searchParams?.search || "";

  useEffect(() => {
    async function fetchData() {
      const data = await getDataById({ params: params.id });
      setDataHotelById(data.hotelObject);
      setDataHotel(data.hotelTerdekat);
    }

    fetchData();
  }, [params]);

  return (
    <div className="mt-12 md:mt-0">
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-row gap-1 w-[90%] md:w-[90%] mt-10">
          <LinkHistory
            link="hotel"
            nama={dataHotelById?.nama ? dataHotelById?.nama : "Hotel"}
          />
        </div>
        <h1 className="text-black text-[40px] font-semibold text-center mt-10">
          {dataHotelById?.nama}
        </h1>

        {/* Images */}
        <div className="flex flex-col md:flex-row w-[90%] md:w-[90%] mt-8 gap-5">
          {dataHotelById?.gambar[0] && (
            <Image
              src={dataHotelById?.gambar[0]}
              alt={dataHotelById?.nama}
              width={737}
              height={395}
              className="rounded-xl w-full md:w-[55%] shadow-sm max-h-[395px] object-cover"
            />
          )}
          <div className="flex flex-col justify-between w-full md:w-[50%] lg:w-[45%]">
            {dataHotelById?.gambar[1] && (
              <Image
                src={dataHotelById?.gambar[1]}
                alt={dataHotelById?.nama}
                width={574}
                height={187}
                className="rounded-xl w-full mb-5 lg:max-w-[507px] shadow-sm max-h-[187px] object-cover"
              />
            )}
            {dataHotelById?.gambar[2] && (
              <Image
                src={dataHotelById?.gambar[2]}
                alt={dataHotelById?.nama}
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
              Tentang {dataHotelById?.nama}
            </h2>
            <p className="text-gray-500 mt-3 text-[20px] font-normal">
              {dataHotelById?.deskripsi}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 mt-5">
              {dataHotelById?.fasilitas && (
                <Fasilitas detail={true} fasilitas={dataHotelById?.fasilitas} />
              )}
            </div>
            <div className="mt-10 w-fit">
              <Link
                href={`https://api.whatsapp.com/send?phone=6285155040590&text=Halo!%20Saya%20tertarik%20untuk%20memesan%20kamar%20di%20hotel%20Anda.%20Apakh%20ada%20kamar%20yang%20tersedia%3F`}
                className="bg-green-500 flex flex-row rounded py-3 px-6 items-center"
                target={"_blank"}
              >
                <Icon
                  path={mdiWhatsapp}
                  size={1.2}
                  className="w-6 mr-2"
                  color={"white"}
                />
                <p className="text-white">Pesan Sekarang</p>
              </Link>
            </div>
          </div>
          <div className="flex flex-col w-full lg:ml-5 md:w-[50%] lg:w-[45%] shadow-md rounded-lg">
            <iframe
              src={dataHotelById?.maps}
              height="333"
              className="rounded-xl"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="flex flex-row gap-3 my-3">
              <Icon path={mdiMapMarker} size={3} color="#FE6984" />
              <p className=" text-gray-700 text-lg font-light">
                {dataHotelById?.alamat}
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

        <div className="w-[90%] md:w-[90%] mt-0">
          <h2 className="text-black text-[25px] font-semibold mb-5">
            Wisata terdekat lainnya
          </h2>
          <CardWisata limit={limit} currentPage={currentPage} search={search} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
