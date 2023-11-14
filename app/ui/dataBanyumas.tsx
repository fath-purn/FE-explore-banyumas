import Icon from "@mdi/react";
import {
  mdiCityVariant,
  mdiImageFilterHdr,
  mdiMapMarkerRadiusOutline,
  mdiBagSuitcaseOutline,
} from "@mdi/js";

const data = [
  {
    title: "Hotel",
    jumlah: 1012,
    icon: mdiCityVariant,
  },
  {
    title: "Wisata",
    jumlah: 1012,
    icon: mdiImageFilterHdr,
  },
  {
    title: "Kecamatan",
    jumlah: 1043,
    icon: mdiMapMarkerRadiusOutline,
  },
  {
    title: "Turis",
    jumlah: 4310,
    icon: mdiBagSuitcaseOutline,
  },
];

export default function Page() {
  return (
    <>
      {data.map((item) => {
        return (
          <div className="flex flex-col items-center justify-center w-[220px] h-[170px] md:h-[220px] bg-white">
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
