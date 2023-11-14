"use client";

import React from "react";
import Icon from "@mdi/react";
import clsx from "clsx";
import { mdiCar, mdiClockOutline, mdiBed } from "@mdi/js";
import { usePathname } from "next/navigation";

type Props = {
  keterangan: {
    jarak: number;
    buka: string;
    tutup: string;
    akomodasi: number;
  };
};

const keteranganWisata = [
  {
    icon: mdiCar,
    text: (keterangan: any) => `${keterangan.jarak} km dari pusat kota`,
  },
  {
    icon: mdiClockOutline,
    text: (keterangan: any) => `Buka ${keterangan.buka} - ${keterangan.tutup}`,
  },
  {
    icon: mdiBed,
    text: (keterangan: any) => `${keterangan.akomodasi} akomodasi`,
  },
];

export default function keterangan({ keterangan }: Props): JSX.Element {
  const params = usePathname();

  return (
    <>
      {params !== "/" ? (
        keteranganWisata.map((item, index) => (
          <div key={index} className="flex items-center mt-1">
            <Icon
              path={item.icon}
              size={0.8}
              color={item.text(keterangan) ? "#FE6984" : "#E0E0E0"}
              className="inline mr-2"
            />
            <p
              className={clsx("text-neutral-500 text-[8px] font-light", {
                "-": !item.text(keterangan),
              })}
            >
              {item.text(keterangan) ? item.text(keterangan) : "-"}
            </p>
          </div>
        ))
      ) : (
        <div className="flex items-center mt-1">
          <Icon
            path={keteranganWisata[0].icon}
            size={0.8}
            color={keteranganWisata[0].text(keterangan) ? "#FE6984" : "#E0E0E0"}
            className="inline mr-2"
          />
          <p
            className={clsx("text-neutral-500 text-[8px] font-light", {
              "-": !keteranganWisata[0].text(keterangan),
            })}
          >
            {keteranganWisata[0].text(keterangan)
              ? keteranganWisata[0].text(keterangan)
              : "-"}
          </p>
        </div>
      )}
    </>
  );
}
