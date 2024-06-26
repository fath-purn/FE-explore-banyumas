"use client";

import Image from "next/image";
import { CardButton } from "@/app/ui/button";
import Keterangan from "./keterangan";
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
      `${process.env.NEXT_PUBLIC_API_URL}/kecamatan/wisata/${id}`,
      { cache: "no-store" }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await res.json();
    return data.data;
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/wisata?page=${currentPage}&limit=${limit}&search=${search}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  return data.data;
}

export default async function TableWisata({
  currentPage,
  limit,
  search,
  id,
  destinasi,
  pagination,
}: CardWisatHotelFood) {
  const [dataWisata, setDataWisata] = useState<any[]>([]);
  const [totalPages, setTotalPages] = useState<number>(0);

  useEffect(() => {
    async function fetchData() {
      const data = await getData({ currentPage, limit, search, destinasi, id });

      if (destinasi) {
        setDataWisata(data.kecamatan.wisata);
      } else {
        setDataWisata(data.wisataObject);
        setTotalPages(Math.ceil(data.pagination.total_items / 10));
      }
    }

    fetchData();
  }, [currentPage, limit, search, destinasi, id]);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 justify-items-center items-center m-auto max-w-[95%] xl:max-w-[90%] 2xl:max-w-[80%] mt-5 gap-3">
        {dataWisata?.map((wisata, index) => {
          return (
            <div
              key={wisata.id}
              className="flex flex-row justify-start md:flex-col bg-white rounded-lg shadow-md mt-3 md:max-w-[237px] h-full md:max-h-[442px]"
            >
              <Image
                src={wisata.gambar[0]}
                alt={wisata.nama}
                width={237}
                height={217}
                // className="rounded-lg object-cover max-w-[50%] md:max-w-full max-h-[217px]"
                className="rounded-lg object-cover max-w-[50%] md:max-w-full h-[217px]"
              />
              <div className="flex items-center justify-center my-3 ml-1 md:ml-0 w-[50%] md:w-full">
                <div className="w-[90%]">
                  <h3 className="text-black text-xl font-medium mb-3 line-clamp-1">
                    {wisata.nama}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 items-center justify-between mt-3 w-full">
                    <Keterangan keterangan={wisata.keterangan} />
                  </div>
                  <h4 className="text-neutral-500 text-[9px] sm:text-[10px] font-light mt-3">
                    Mulai dari
                  </h4>
                  <div className="flex flex-row justify-between items-center">
                    <h3 className="text-black text-[14px] sm:text-[15px] font-medium">
                      RP {wisata.price.toLocaleString("id-ID")}
                    </h3>
                    <CardButton href={wisata.id} hw={"wisata"} />
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
