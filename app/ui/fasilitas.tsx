import React from "react";
import Icon from "@mdi/react";
import clsx from "clsx";
import {
  mdiWifi,
  mdiGlassMugVariant,
  mdiRoomService,
  mdiFood,
  mdiFoodVariant,
} from "@mdi/js";

type FasilitasProps = {
  fasilitas: {
    wifi: boolean;
    bar: boolean;
    roomService: boolean;
    breakfast: boolean;
    restaurant: boolean;
  };
};

const fasilitasList = [
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
];

export default function Fasilitas({ fasilitas }: FasilitasProps): JSX.Element {
  return (
    <>
      {fasilitasList.map((item, index) => (
        <div key={index} className="flex items-center mt-1">
          <Icon
            path={item.icon}
            size={0.8}
            color={item.active(fasilitas) ? "#FE6984" : "#E0E0E0"}
            className="inline mr-2"
          />
          <p
            className={clsx("text-neutral-500 text-[8px] font-light", {
              "-": !item.active(fasilitas),
            })}
          >
            {item.active(fasilitas) ? item.text : "-"}
          </p>
        </div>
      ))}
    </>
  );
}
