"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Icon from "@mdi/react";
import {
  mdiImageFilterHdrOutline,
  mdiCityVariant,
  mdiAccountGroupOutline,
  mdiMapMarkerRadiusOutline,
  mdiHomeOutline,
} from "@mdi/js";

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: "Home", href: "/dashboard", icon: mdiHomeOutline },
  {
    name: "Wisata",
    href: "/dashboard/wisata",
    icon: mdiImageFilterHdrOutline,
  },
  {
    name: "Hotel",
    href: "/dashboard/hotel",
    icon: mdiCityVariant,
  },
  { name: "Ulasan", href: "/dashboard/ulasan", icon: mdiAccountGroupOutline },
  {
    name: "Kecamatan",
    href: "/dashboard/kecamatan",
    icon: mdiMapMarkerRadiusOutline,
  },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[48px] md:w-[95%] md:mt-3 grow items-center justify-center gap-2 rounded-md  p-3 text-sm font-medium hover:bg-white hover:text-black md:flex-none md:justify-start md:p-2 md:px-3",
              {
                "bg-white text-black": pathname === link.href,
                "bg-[#AED4FF] text-black": pathname !== link.href,
              }
            )}
          >
            <Icon path={String(link.icon)} size={1.2} className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
