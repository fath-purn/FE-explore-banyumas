// 'use client'

import Navlink from "@/app/ui/navlink";
import { LogoFull, Logo } from "@/app/ui/svg-image";
// import { useMediaQuery } from '@mui/material';

export default function Navbar() {
  // const isScreenAbove768px = useMediaQuery('(min-width:881px)');

  return (
    <div className="flex justify-center w-full bg-white fixed bottom-0 md:bottom-auto z-50 shadow-md md:top-0">
      <div className="w-full md:w-[95%] md:flex md:flex-row md:justify-between">
        {/* {isScreenAbove768px && <LogoFull /> } */}
        <LogoFull />
        <div className="flex flex-row justify-end md:gap-2">
          <Navlink />
        </div>
      </div>
    </div>
  );
}
