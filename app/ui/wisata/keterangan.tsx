"use client";

import React from "react";
import Icon from "@mdi/react";
import clsx from "clsx";
import { mdiCar, mdiClockOutline, mdiBed, mdiPool, mdiParking  } from "@mdi/js";
import { usePathname } from "next/navigation";

type Props = {
  keterangan: {
    jarak: number;
    buka: string;
    tutup: string;
    akomodasi: number;
    kolam?: boolean;
    parkir?: boolean;
    tiket?: number;
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
  {
    icon: mdiPool,
    text: (keterangan: any) => (keterangan.kolam ? "Kolam renang" : ""),
  },
  {
    icon: mdiParking,
    text: (keterangan: any) => (keterangan.parkir ? "Parkir Luas" : ""),
  },
  {
    icon: mdiCar,
    text: (keterangan: any) => (keterangan.tiket ? "Tiket" : ""),
  },
];

export default function keterangan({ keterangan }: Props): JSX.Element {
  const params = usePathname();

  const filteredKeteranganWisata = keteranganWisata.filter((item) => item.text(keterangan));

  return (
    <>
      {params !== "/" ? (
        filteredKeteranganWisata.map((item, index) => (
          <div key={index} className="flex items-center mt-1">
            <Icon
              path={item.icon}
              size={0.8}
              color="#FE6984"
              className="inline mr-2"
            />
            <p
              className="text-neutral-500 text-[8px] font-light"
            >
              {item.text(keterangan)}
            </p>
          </div>
        ))
      ) : (
        <div className="flex items-center mt-1">
          <Icon
            path={filteredKeteranganWisata[0].icon}
            size={0.8}
            color="#FE6984"
            className="inline mr-2"
          />
          <p
            className="text-neutral-500 text-[8px] font-light"
          >
            {filteredKeteranganWisata[0].text(keterangan)}
          </p>
        </div>
      )}
    </>
  );
}
