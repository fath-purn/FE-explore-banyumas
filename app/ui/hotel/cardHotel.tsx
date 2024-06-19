"use client";

import Image from "next/image";
import Icon from "@mdi/react";
import { mdiCityVariant } from "@mdi/js";
import Start from "../star";
import Fasilitas from "./fasilitas";
import { CardButton } from "@/app/ui/button";
import { useState, useEffect } from "react";
import { PageLimitSearch, CardWisatHotelFood } from "@/app/utils/definitions";
import Pagination from "@/app/ui/destinasi/pagination";

async function getData({
  currentPage,
  limit,
  search,
  destinasi,
  id,
}: PageLimitSearch) {
  if (destinasi) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/kecamatan/hotel/${id}`,
      { cache: "no-store" }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await res.json();
    return data.data;
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/hotel?page=${currentPage}&limit=${limit}&search=${search}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  return data.data;
}

export default function CardHotel({
  currentPage,
  limit,
  search,
  destinasi,
  id,
  pagination,
}: CardWisatHotelFood) {
  const [dataHotel, setDataHotel] = useState<any[]>([]);
  const [totalPages, setTotalPages] = useState<number>(0);

  useEffect(() => {
    async function fetchData() {
      const data = await getData({ currentPage, limit, search, destinasi, id });

      if (destinasi) {
        setDataHotel(data.kecamatan.hotel);
      } else {
        setDataHotel(data.hotel);
        setTotalPages(Math.ceil(data.pagination.total_items / 10));
      }
    }

    fetchData();
  }, [currentPage, limit, search, destinasi, id]);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 justify-items-center items-center m-auto max-w-[95%] xl:max-w-[90%] 2xl:max-w-[80%] mt-5 gap-3">
        {dataHotel?.map((hotel, index) => {
          return (
            <div
              key={index}
              className="flex flex-row justify-start md:flex-col bg-white rounded-lg shadow-md mt-3 md:max-w-[237px] h-full md:max-h-[442px]"
            >
              <Image
                src={hotel.gambar[0]}
                alt={hotel.nama}
                width={237}
                height={217}
                // className="object-cover rounded-lg max-w-[50%] md:max-w-full max-h-[217px]"
                className="object-cover rounded-lg max-w-[50%] md:max-w-full h-[217px]"
              />
              <div className="flex items-center justify-center my-3 ml-1 md:ml-0 w-[50%] md:w-full">
                <div className="w-[90%]">
                  <h3 className="text-black text-xl font-medium mb-3 line-clamp-1">
                    {hotel.nama}
                  </h3>
                  <Icon
                    path={mdiCityVariant}
                    size={1}
                    color="black"
                    className="inline mr-2"
                  />
                  <Start jumlahBintang={4} />
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 items-center justify-between mt-3 w-full">
                    <Fasilitas fasilitas={hotel.fasilitas} />
                  </div>
                  <h4 className="text-neutral-500 text-[9px] sm:text-[10px] font-light mt-3">
                    Mulai dari
                  </h4>
                  <div className="flex flex-row justify-between items-center">
                    <h3 className="text-black text-[14px] sm:text-[15px] font-medium">
                      RP {hotel.price.toLocaleString("id-ID")}
                    </h3>
                    <CardButton href={hotel.id} hw={"hotel"} />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/* pagination */}
      {pagination && (
        <div className="flex flex-row justify-center items-center mt-10">
          <Pagination totalPages={totalPages} />
        </div>
      )}
    </div>
  );
}
