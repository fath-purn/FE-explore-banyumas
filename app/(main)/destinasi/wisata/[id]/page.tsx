"use client";

import LinkHistory from "@/app/ui/linkHistory";
import CardWisata from "@/app/ui/wisata/cardWisata";
import Pagination from "@/app/ui/destinasi/pagination";
import Footer from "@/app/ui/footer";
import {
  PageLimitSearch,
  DataWisataKecamatan,
  Wisata,
} from "@/app/utils/definitions";
import { useState, useEffect } from "react";

async function getData({ currentPage, limit, search, id }: PageLimitSearch) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/kecamatan/wisata/${id}/?page=${currentPage}&limit=${limit}&search=${search}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  return data.data;
}

export default function WisataPageDestinasi({
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
  const [dataWisataKecamatan, setDataWisataKecamatan] = useState<string>();

  useEffect(() => {
    async function fetchData() {
      const data = await getData({ currentPage, limit, search, id: params.id });
      setDataWisataKecamatan(data.kecamatan.nama);
      setTotalPages(Math.ceil(data.pagination.total_items / 10));
    }

    fetchData();
  }, [currentPage, limit, search, params]);

  return (
    <main>
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-row gap-1 w-[90%] md:w-[90%] mt-10">
          <LinkHistory
            link={dataWisataKecamatan ? dataWisataKecamatan : "-"}
            destinasi={true}
            nama={dataWisataKecamatan ? dataWisataKecamatan : "-"}
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="w-[90%]">
          <h1 className="text-black text-[25px] font-semibold text-left mt-10">
            Wisata di {dataWisataKecamatan}
          </h1>
        </div>
        <div className="w-[95%]">
          <CardWisata
            currentPage={currentPage}
            limit={limit}
            search={search}
            destinasi={true}
            id={params.id}
          />
        </div>
      </div>
      {/* pagination */}
      {/* <div className="flex flex-row justify-center items-center mt-10"> */}
      {/* <Pagination totalPages={totalPages} /> */}
      {/* </div> */}
      <Footer />
    </main>
  );
}
