import Image from "next/image";
import Icon from "@mdi/react";
import { mdiCar } from "@mdi/js";
import { CardButton } from "@/app/ui/button";
import Keterangan from "./keterangan";

const wisata = [
  {
    id: "0",
    nama: "Java Heritage",
    src: "https://via.placeholder.com/237x217",
    price: 500000,
    keterangan: {
      jarak: 10,
      buka: "08:00",
      tutup: "17:00",
      akomodasi: 12,
    },
  },
  {
    id: "1",
    nama: "Java Heritage",
    src: "https://via.placeholder.com/237x217",
    price: 500000,
    keterangan: {
      jarak: 10,
      buka: "08:00",
      tutup: "17:00",
      akomodasi: 12,
    },
  },
  {
    id: "2",
    nama: "Java Heritage",
    src: "https://via.placeholder.com/237x217",
    price: 500000,
    keterangan: {
      jarak: 10,
      buka: "08:00",
      tutup: "17:00",
      akomodasi: 12,
    },
  },
  {
    id: "3",
    nama: "Java Heritage",
    src: "https://via.placeholder.com/237x217",
    price: 500000,
    keterangan: {
      jarak: 10,
      buka: "08:00",
      tutup: "17:00",
      akomodasi: 12,
    },
  },
  {
    id: "4",
    nama: "Java Heritage",
    src: "https://via.placeholder.com/237x217",
    price: 500000,
    keterangan: {
      jarak: 10,
      buka: "08:00",
      tutup: "17:00",
      akomodasi: 12,
    },
  },
];

export default function CardWisata() {
  return (
    <>
      {wisata.map((wisata, index) => {
        return (
          <div
            key={index}
            className="flex flex-row justify-start md:justify-between md:flex-col bg-white rounded-lg shadow-md mt-3 md:max-w-[237px]"
          >
            <Image
              src={wisata.src}
              alt={wisata.nama}
              width={237}
              height={217}
              className="rounded-lg object-cover max-w-[50%] md:max-w-full"
            />
            <div className="flex items-center justify-center my-3 ml-1 md:ml-0 w-[50%] md:w-full">
              <div className="w-[90%]">
                <h3 className="text-black text-xl font-medium mb-3">
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
    </>
  );
}
