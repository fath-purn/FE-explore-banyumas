import Image from "next/image";
import Icon from "@mdi/react";
import { mdiCityVariant } from "@mdi/js";
import Start from "../star";
import Fasilitas from "./fasilitas";
import { CardButton } from "@/app/ui/button";

interface HotelProps {
  hotel: {
    id: string;
    nama: string;
    src: string;
    start: number;
    fasilitas: {
      wifi: boolean;
      bar: boolean;
      roomService: boolean;
      breakfast: boolean;
      restaurant: boolean;
    };
    price: number;
  }[];
}

export default function CardHotel({hotel}: HotelProps) {
  return (
    <>
      {hotel.map((hotel, index) => {
        return (
          <div
            key={index}
            className="flex flex-row justify-start md:justify-between md:flex-col bg-white rounded-lg shadow-md mt-3 md:max-w-[237px]"
          >
            <Image
              src={hotel.src}
              alt={hotel.nama}
              width={237}
              height={217}
              className="object-cover rounded-lg max-w-[50%] md:max-w-full"
            />
            <div className="flex items-center justify-center my-3 ml-1 md:ml-0 w-[50%] md:w-full">
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
    </>
  );
}
