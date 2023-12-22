"use client";

import Image from "next/image";
import Link from "next/link";
import { Destinasi } from "@/app/utils/definitions";

export default function CardDestinasi({
  dataKecamatan
}: {
  dataKecamatan: Destinasi[]
}) {

  console.log(dataKecamatan, 'adsfaf')

  return (
    <>
      {dataKecamatan.map((data) => (
        <div
          key={data.id}
          className="flex flex-col items-center border border-gray-400 shadow-md rounded-lg"
        >
          <h3 className="text-black text-[30px] font-semibold my-5">
            {data.nama}
          </h3>
          <div className="flex flex-row items-center gap-3 mb-5 mx-5">
            <Link
              href={`/destinasi/hotel/${data.id}`}
              className="flex flex-col items-center"
            >
              <div>
                <Image
                  src={data.hotel.representativeImage ? data.hotel.representativeImage : "https://via.placeholder.com/405x426"}
                  alt={`hotel ${data.nama}`}
                  width={280}
                  height={280}
                  className="rounded-lg shadow-sm h-[280px] w-[280px] object-cover"
                />
                <p className="text-black text-[25px] font-medium mt-1 text-center">
                  {data.hotel.total} Hotel
                </p>
              </div>
            </Link>
            <Link
              href={`/destinasi/wisata/${data.id}`}
              className="flex flex-col items-center"
            >
              <div>
                <Image
                  src={data.wisata.representativeImage ? data.hotel.representativeImage : "https://via.placeholder.com/405x426"}
                  alt={`wisata ${data.nama}`}
                  width={280}
                  height={280}
                  className="rounded-lg shadow-sm h-[280px] w-[280px] object-cover"
                />
                <p className="text-black text-[25px] font-medium mt-1 text-center">
                  {data.wisata.total} Wisata
                </p>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
