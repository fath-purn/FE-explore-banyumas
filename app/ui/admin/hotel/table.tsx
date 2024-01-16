"use client";

import Image from "next/image";
import { UpdateInvoice, DeleteInvoice } from "@/app/ui/admin/buttons";
import { PageLimitSearch } from "@/app/utils/definitions";
import Link from "next/link";
import Pagination from "@/app/ui/destinasi/pagination";
import { Key, useState } from "react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { useEffect } from "react";

async function getData({ currentPage, limit, search }: PageLimitSearch) {
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

export default function TableHotel({
  currentPage,
  limit,
  search,
}: {
  limit: number;
  currentPage: number;
  search: string;
}) {
  const [dataHotel, setDataHotel] = useState<any[]>([]);
  const [totalPages, setTotalPages] = useState<number>(0);

  useEffect(() => {
    async function fetchData() {
      const data = await getData({ currentPage, limit, search });
      setDataHotel(data.hotel);
      setTotalPages(Math.ceil(data.pagination.total_items / 10));
    }

    fetchData();
  }, [currentPage, limit, search]);

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {dataHotel?.map(
              (data: {
                gambar: any;
                id: Key | null | undefined;
                src: { image1: string | StaticImport };
                nama: string;
                kecamatan: string | number;
              }) => (
                <div
                  key={data.id}
                  className="mb-2 w-full rounded-md bg-white p-4"
                >
                  <div className="flex items-center justify-between border-b pb-4">
                    <div>
                      <div className="mb-2 flex items-center">
                        <Image
                          src={data.gambar[0]}
                          className="mr-2 rounded-full"
                          width={28}
                          height={28}
                          alt={`${data.nama}'s profile picture`}
                        />
                        <p>{data.nama}</p>
                      </div>
                      <p className="text-sm text-gray-500">{data.kecamatan}</p>
                    </div>
                  </div>
                  <div className="flex w-full items-center justify-between pt-4">
                    <div className="flex justify-end gap-2">
                      <UpdateInvoice
                        id={data.id ? Number(data.id) : -1}
                        params={"hotel"}
                      />
                      <DeleteInvoice
                        id={data.id ? Number(data.id) : -1}
                        params={"hotel"}
                      />
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
          <table className="hidden min-w-full max-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-3 py-5 font-medium text-center">
                  Image
                </th>
                <th scope="col" className="px-3 py-5 font-medium text-center">
                  Nama
                </th>
                <th scope="col" className="px-3 py-5 font-medium text-center">
                  Kecamatan
                </th>
                <th scope="col" className="px-3 py-5 font-medium text-center">
                  Deskripsi
                </th>
                <th scope="col" className="px-3 py-5 font-medium text-center">
                  Link maps
                </th>
                <th scope="col" className="px-3 py-5 font-medium text-center">
                  Harga
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {dataHotel?.map(
                (data: {
                  gambar: any;
                  id: Key | null | undefined;
                  src: { image1: string | StaticImport };
                  nama: string;
                  kecamatan: string | number;
                  deskripsi: string;
                  maps: string;
                  price: number;
                  keterangan: {
                    buka: string;
                    tutup: string;
                  };
                }) => (
                  <tr
                    key={data.id}
                    className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                  >
                    <td className="whitespace-nowrap py-3 pl-6 pr-3">
                      <Image
                        src={data.gambar[0]}
                        className="rounded-full"
                        width={28}
                        height={28}
                        alt={`${data.nama}'s picture`}
                      />
                    </td>
                    <td className="whitespace-nowrap px-3 py-3 underline">
                      <Link href={`/hotel/${data.id}`}>{data.nama}</Link>
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      {data.kecamatan}
                    </td>
                    <td className="whitespace-nowrap px-3 py-3 w-[200px]">
                      {typeof data.deskripsi === "string" &&
                      data.deskripsi.length > 20
                        ? `${data.deskripsi.slice(0, 20)}...`
                        : data.deskripsi}
                    </td>
                    <td className="whitespace-nowrap px-3 py-3 w-[200px]">
                      {typeof data.maps === "string" && data.maps.length > 20
                        ? `${data.maps.slice(0, 20)}...`
                        : data.maps}
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      {data.price}
                    </td>
                    <td className="flex justify-end gap-2 whitespace-nowrap px-6 py-4 text-sm">
                      <UpdateInvoice
                        id={data.id ? Number(data.id) : -1}
                        params={"hotel"}
                      />
                      <DeleteInvoice
                        id={data.id ? Number(data.id) : -1}
                        params={"hotel"}
                      />
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}
