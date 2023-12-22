'use client'

import LinkHistory from "@/app/ui/linkHistory";
import CardHotel from "@/app/ui/hotel/cardHotel";
import Pagination from "@/app/ui/destinasi/pagination";
import Footer from "@/app/ui/footer";
import { PageLimitSearch } from "@/app/utils/definitions";
import { useState, useEffect } from "react";

async function getData({ currentPage, limit, search, id }: PageLimitSearch) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/kecamatan/hotel/${id}/?page=${currentPage}&limit=${limit}&search=${search}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  return data.data;
}

export default function HotelPageDestinasi({
  searchParams,
  params,
}: {
  searchParams?: {
    limit?: number;
    page?: string;
    search?: string;
  };
  params: {
    id: string;
  };
}) {
  const limit = Number(searchParams?.limit) || 5;
  const currentPage = Number(searchParams?.page) || 1;
  const search = searchParams?.search || "";

  const [totalPages, setTotalPages] = useState<number>(0);
  const [dataHotelKecamatan, setDataHotelKecamatan] = useState<string>();

  useEffect(() => {
    async function fetchData() {
      const data = await getData({ currentPage, limit, search, id: params.id });
      setDataHotelKecamatan(data.kecamatan.nama);
      setTotalPages(Math.ceil(data.pagination.total_items / 10));
    }

    fetchData();
  }, [currentPage, limit, search, params]);

  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-row gap-1 w-[90%] md:w-[90%] mt-10">
          <LinkHistory
            hotel={true}
            link={dataHotelKecamatan ? dataHotelKecamatan : "-"}
            nama={dataHotelKecamatan ? dataHotelKecamatan : "-"}
            destinasi={true}
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="w-[90%]">
          <h1 className="text-black text-[25px] font-semibold text-left mt-10">
            Hotel di {dataHotelKecamatan}
          </h1>
        </div>
        <div className="w-[95%]">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 justify-center items-center m-auto mt-5 gap-3">
            <CardHotel
              currentPage={currentPage}
              limit={limit}
              search={search}
              destinasi={true}
              id={params.id}
            />
          </div>
        </div>
      </div>
      {/* pagination */}
      {/* <div className="flex flex-row justify-center items-center mt-10">
        <Pagination totalPages={totalPages} />
      </div> */}
      <Footer />
    </div>
  );
}
