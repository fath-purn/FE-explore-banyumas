"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import clsx from "clsx";

interface Baner {
  alt: string;
  src: string;
  title: string;
  description?: string;
  className: string;
}

const beranda: Baner[] = [
  {
    alt: "Beranda",
    src: "https://ik.imagekit.io/fathpurn/beranda?updatedAt=1699529566298",
    title: "Explore Banyumas",
    description: "Temukan hotel dan wisata menarik di Banyumas!",
    className: "max-h-[401px]"
  },
];

const wisata: Baner[] = [
  {
    alt: "Wisata",
    src: "https://ik.imagekit.io/fathpurn/wisata.png?updatedAt=1699773494494",
    title: "Jelajahi Wisata terpopuler di Banyumas",
    className: "max-h-[617px]"
  },
];

const hotel: Baner[] = [
  {
    alt: "Hotel",
    src: "https://ik.imagekit.io/fathpurn/hotel.png?updatedAt=1699774721377",
    title: "Temukan Hotel terbaik di Banyumas",
    className: "max-h-[614px]"
  },
];

const destinasi: Baner[] = [
  {
    alt: "Destinasi",
    src: "https://ik.imagekit.io/fathpurn/destinasi.png?updatedAt=1699774720315",
    title: "Destinasi",
    description: "Temukan potensi destinasi wisata dan akomodasi di Banyumas",
    className: "max-h-[528px]"
  },
];

export default function Background() {
  const pathname = usePathname();
  const images =
    pathname === "/"
      ? beranda
      : pathname === "/wisata"
      ? wisata
      : pathname === "/hotel"
      ? hotel
      : destinasi;
  return (
    <div className="flex items-center justify-center h-full d:w-3/5 md:px-28 md:py-12">
      <Image
        alt={images[0].alt}
        src={images[0].src}
        quality={100}
        fill
        className={`${images[0].className} absolute top-0 left-0 z-[-1] hidden md:block w-[100%] brightness-[0.6]`}
      />
      <Image
        alt={images[0].alt}
        src={images[0].src}
        quality={100}
        fill
        className={`${images[0].className} absolute top-0 left-0 z-[-1] block md:hidden w-full brightness-[0.6]`}
      />
      <div className="flex flex-col items-center m-auto">
        <h1 className="text-white font-bold text-5xl md:text-[50px] leading-relaxed text-center w-[90%] sm:w-full">
          {images[0].title}
        </h1>
        {pathname === "/" || pathname === '/destinasi' ? (
          <p className="text-white text-2xl md:text-[30px] text-center w-[90%] sm:w-full my-6 flex justify-center space-x-2 gap-8 items-center">
            <span
              className={clsx(
                "w-[86px] h-[5px] bg-white relative ",
                {
                  "hidden md:block": pathname === "/",
                  "hidden": pathname !== "/",
                }
              )}
            ></span>
            {images[0].description}
            <span
              className={clsx(
                "w-[86px] h-[5px] bg-white relative",
                {
                  "hidden md:block": pathname === "/",
                  "hidden": pathname !== "/",
                }
              )}
            ></span>{" "}
          </p>
        ) : null}
      </div>
    </div>
  );
}
