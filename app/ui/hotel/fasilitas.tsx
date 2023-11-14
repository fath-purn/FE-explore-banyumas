import React from "react";
import Icon from "@mdi/react";
import clsx from "clsx";
import {
  mdiWifi,
  mdiGlassMugVariant,
  mdiRoomService,
  mdiFood,
  mdiFoodVariant,
  mdiPool,
  mdiParking,
  mdiBathtub,
  mdiBed,
} from "@mdi/js";

type Props = {
  fasilitas: {
    wifi: boolean;
    bar: boolean;
    roomService: boolean;
    breakfast: boolean;
    restaurant: boolean;
    pool?: boolean;
    parkir?: boolean;
    bathrom?: boolean;
    bedroom?: boolean;
  };
  detail?: boolean;
};

const fasilitasHotel = [
  {
    icon: mdiWifi,
    text: "Free Wi-Fi",
    active: (fasilitas: any) => fasilitas.wifi,
  },
  {
    icon: mdiGlassMugVariant,
    text: "Bar",
    active: (fasilitas: any) => fasilitas.bar,
  },
  {
    icon: mdiRoomService,
    text: "Room Service",
    active: (fasilitas: any) => fasilitas.roomService,
  },
  {
    icon: mdiFood,
    text: "Free breakfast",
    active: (fasilitas: any) => fasilitas.breakfast,
  },
  {
    icon: mdiFoodVariant,
    text: "Restaurant",
    active: (fasilitas: any) => fasilitas.restaurant,
  },
  {
    icon: mdiPool,
    text: "Kolam Renang",
    active: (fasilitas: any) => fasilitas.pool,
  },
  {
    icon: mdiParking,
    text: "Free Parkir",
    active: (fasilitas: any) => fasilitas.parkir,
  },
  {
    icon: mdiBathtub,
    text: "Bathroom/kamar",
    active: (fasilitas: any) => fasilitas.bathrom,
  },
  {
    icon: mdiBed,
    text: "Nyaman",
    active: (fasilitas: any) => fasilitas.bedroom,
  },
];

export default function Fasilitas({ fasilitas, detail }: Props): JSX.Element {
  return (
    <>
      {Object.values(fasilitas).some((value) => value) && (
        <>
          {fasilitasHotel.map((item, index) => (
            <div key={index} className={clsx("flex items-center mt-1", detail && "mt-2")}>
              <Icon
                path={item.icon}
                size={detail ? 1.1 : 0.8}
                color={item.active(fasilitas) ? "#FE6984" : "#E0E0E0"}
                className="inline mr-2"
              />
              <p
                className={clsx("text-gray-500 font-light", 
                detail ? "text-[13px] md:text-[15px]" : "text-[8px]",
                {
                  "-": !item.active(fasilitas),  
                })}
              >
                {item.active(fasilitas) ? item.text : "-"}
              </p>
            </div>
          ))}
        </>
      )}
    </>
  );
}