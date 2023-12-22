"use client";

import CardDestinasi from "@/app/ui/destinasi/cardDestinasi";
import Pagination from "@/app/ui/destinasi/pagination";
import { useEffect, useState } from "react";
import { Destinasi, PageLimitSearch } from "@/app/utils/definitions";

async function getData({ currentPage, limit, search }: PageLimitSearch) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/kecamatan?page=${currentPage}&limit=${limit}&search=${search}`,
      { cache: "no-store" }
    );
  
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
  
    const data = await res.json();
    return data.data;
  }

export default function Content({
  currentPage,
  limit,
  search,
}: {
  limit?: number;
  currentPage?: number;
  search?: string;
}) {
  const [totalPages, setTotalPages] = useState<number>(0);
  const [dataKecamatan, setDataKecamatan] = useState<Destinasi[]>([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getData({ currentPage, limit, search });
      setDataKecamatan(data.kecamatan);
      setTotalPages(Math.ceil(data.pagination.total_items / 10));
    }

    fetchData();
  }, [currentPage, limit, search]);

  return (
    <>
      <div className="w-full mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  justify-center items-center m-auto w-[95%] mt-5 gap-5">
          <CardDestinasi
          dataKecamatan={dataKecamatan}
          />
        </div>
      </div>

      {/* pagination */}
      <div className="flex flex-row justify-center items-center mt-10">
        <Pagination totalPages={totalPages} />
      </div>
    </>
  );
}
