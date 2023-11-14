import Icon from "@mdi/react";
import {
  mdiCityVariant,
  mdiImageFilterHdr,
  mdiMapMarkerRadiusOutline,
  mdiBagSuitcaseOutline,
} from "@mdi/js";

const data = [
  {
    id: 1,
    title: "Hotel",
    jumlah: 1012,
    icon: mdiCityVariant,
  },
  {
    id: 2,
    title: "Wisata",
    jumlah: 1012,
    icon: mdiImageFilterHdr,
  },
  {
    id: 3,
    title: "Kecamatan",
    jumlah: 1043,
    icon: mdiMapMarkerRadiusOutline,
  },
  {
    id: 4,
    title: "Turis",
    jumlah: 4310,
    icon: mdiBagSuitcaseOutline,
  },
];

export default function Page() {
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
