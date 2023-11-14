"use client";

import React from "react";
import Icon from "@mdi/react";
import clsx from "clsx";
import { mdiCar, mdiClockOutline, mdiBed, mdiPool, mdiParking } from "@mdi/js";
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
  detail?: boolean;
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

export default function keterangan({ keterangan, detail }: Props): JSX.Element {
  const params = usePathname();

  const filteredKeteranganWisata = keteranganWisata.filter((item) =>
    item.text(keterangan)
  );

  return (
    <>
      {params !== "/" ? (
        filteredKeteranganWisata.map((item, index) => (
          <div key={index} className={clsx("flex items-center mt-1", detail && "mt-2")}>
            <Icon
              path={item.icon}
              size={detail ? 1.1 : 0.8}
              color="#FE6984"
              className="inline mr-2"
            />
            <p
              className={clsx(
                "text-gray-500 text-[8px] font-light",
                detail && "text-[15px]",
              )}
            >
              {item.text(keterangan)}
            </p>
          </div>
        ))
      ) : (
        <div className="flex items-center mt-1">
          <Icon
            path={filteredKeteranganWisata[0].icon}
            size={detail ? 1.1 : 0.8}
            color="#FE6984"
            className="inline mr-2"
          />
          <p
            className={clsx(
              "text-gray-500 text-[8px] font-light",
              detail ? "text-[15px]" : ""
            )}
          >
            {filteredKeteranganWisata[0].text(keterangan)}
          </p>
        </div>
      )}
    </>
  );
}
