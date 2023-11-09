'use client';

import Icon from '@mdi/react';
import { mdiHome, mdiHomeVariantOutline, mdiImageFilterHdr, mdiImageFilterHdrOutline, mdiHomeOutline, mdiCityVariant, mdiCityVariantOutline, mdiTrendingUp, mdiAccountGroup, mdiAccountGroupOutline } from '@mdi/js';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Beranda', href: '/', icon: mdiHome, iconOutline: mdiHomeOutline },
  { name: 'Wisata', href: '/wisata', icon: mdiImageFilterHdr, iconOutline: mdiImageFilterHdrOutline },
  { name: 'Hotel', href: '/hotel', icon: mdiCityVariant, iconOutline: mdiCityVariantOutline },
  { name: 'Destinasi', href: '/destinasi', icon: mdiTrendingUp, iconOutline: mdiTrendingUp },
  { name: 'Tentang kami', href: '/about', icon: mdiAccountGroup, iconOutline: mdiAccountGroupOutline },
];


export default function Navlink() {
    const pathname = usePathname();
    
    return (
        <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 bg-white p-3 text-sm font-medium hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'text-black': pathname !== link.href,
                'text-blue-600': pathname === link.href,
              },
            )}
          >
            <Icon
              path={pathname === link.href ? link.icon : link.iconOutline}
              size={1}
              color="currentColor"
            />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
    )
}