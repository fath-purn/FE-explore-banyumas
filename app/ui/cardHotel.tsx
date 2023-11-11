import Image from "next/image";
import Icon from "@mdi/react";
import { mdiCityVariant } from "@mdi/js";
import Start from "./start";
import Fasilitas from "./fasilitas";
import { CardButton } from "@/app/ui/button";

const hotel = [
  {
    id: "0",
    nama: "Java Heritage",
    src: "https://via.placeholder.com/237x217",
    start: 5,
    fasilitas: {
      wifi: true,
      bar: false,
      roomService: true,
      breakfast: true,
      restaurant: true,
    },
    price: 500000,
  },
  {
    id: "1",
    nama: "Java Heritage",
    src: "https://via.placeholder.com/237x217",
    start: 5,
    fasilitas: {
      wifi: true,
      bar: false,
      roomService: true,
      breakfast: true,
      restaurant: true,
    },
    price: 500000,
  },
  {
    id: "2",
    nama: "Java Heritage",
    src: "https://via.placeholder.com/237x217",
    start: 5,
    fasilitas: {
      wifi: true,
      bar: false,
      roomService: true,
      breakfast: true,
      restaurant: true,
    },
    price: 500000,
  },
  {
    id: "3",
    nama: "Java Heritage",
    src: "https://via.placeholder.com/237x217",
    start: 5,
    fasilitas: {
      wifi: true,
      bar: false,
      roomService: true,
      breakfast: true,
      restaurant: true,
    },
    price: 500000,
  },
  {
    id: "4",
    nama: "Java Heritage",
    src: "https://via.placeholder.com/237x217",
    start: 5,
    fasilitas: {
      wifi: true,
      bar: false,
      roomService: true,
      breakfast: true,
      restaurant: true,
    },
    price: 500000,
  },
];

export default function CardHotel() {
  return (
    <>
      {hotel.map((hotel, index) => {
        return (
          <div key={index} className="flex flex-row justify-between md:flex-col bg-white rounded-lg shadow-md mt-3 md:max-w-[237px]">
            <Image
              src={hotel.src}
              alt={hotel.nama}
              width={237}
              height={217}
              className="object-cover rounded-lg"
            />
            <div className="flex items-center justify-center my-3 ml-1 md:ml-0 w-[50%]">
              <div className="w-[90%]">
                <h3 className="text-black text-xl font-medium mb-3">
                  {hotel.nama}
                </h3>
                <Icon
                  path={mdiCityVariant}
                  size={1}
                  color="black"
                  className="inline mr-2"
                />
                <Start jumlahBintang={hotel.start} />
                <Fasilitas fasilitas={hotel.fasilitas} />
                <h4 className="text-neutral-500 text-[9px] sm:text-[10px] font-light mt-3">
                  Mulai dari
                </h4>
                <div className="flex flex-row justify-between items-center">
                  <h3 className="text-black text-[14px] sm:text-[15px] font-medium">
                    RP {hotel.price.toLocaleString("id-ID")}
                  </h3>
                  <CardButton href={hotel.id} hw={"hotel"}/>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
