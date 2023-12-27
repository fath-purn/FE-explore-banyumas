  'use client'

  import Icon from "@mdi/react";
  import {
    mdiCityVariant,
    mdiImageFilterHdr,
    mdiMapMarkerRadiusOutline,
    mdiBagSuitcaseOutline,
  } from "@mdi/js";
  import { useState, useEffect } from "react";
  import { CountData } from "@/app/utils/definitions";

  export default function Page() {
    const [dataCount, setDataCount] = useState<CountData>();

    const data = [
      {
        id: 1,
        title: "Hotel",
        jumlah: dataCount?.hotel ? dataCount?.hotel : 0,
        icon: mdiCityVariant,
      },
      {
        id: 2,
        title: "Wisata",
        jumlah: dataCount?.wisata ? dataCount?.wisata : 0,
        icon: mdiImageFilterHdr,
      },
      {
        id: 3,
        title: "Kecamatan",
        jumlah: dataCount?.kecamatan ? dataCount?.kecamatan : 0,
        icon: mdiMapMarkerRadiusOutline,
      },
      // {
      //   id: 4,
      //   title: "Turis",
      //   jumlah: 4310,
      //   icon: mdiBagSuitcaseOutline,
      // },
    ];

    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/all`);
        const result = await response.json();
        setDataCount(result.data);
      };

      fetchData();
    }, []);

    return (
      <>
        {data.map((item, index) => {
          return (
            <div key={index} className="flex flex-col items-center justify-center w-[220px] h-[170px] md:h-[220px] bg-white">
              <Icon path={item.icon} size={3} className="text-black" />
              <div className="flex flex-row gap-2 mt-1">
                <h2 className="text-black text-xl font-semibold">
                  {item.jumlah}
                </h2>
                <h2 className="text-black text-xl font-semibold">{item.title}</h2>
              </div>
            </div>
          );
        })}
      </>
    );
  }
