"use client";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Icon from "@mdi/react";
import { mdiAccountCircleOutline } from "@mdi/js";
import { useState, useEffect } from "react";
import { Ulasan } from "@/app/utils/definitions";
import clsx from "clsx";

export const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1024 },
    items: 5,
    slidesToSlide: 2,
  },
  desktop: {
    breakpoint: { max: 1024, min: 800 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 800, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const getData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/ulasan`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  return data.data;
};

export default function CardUlasan() {
  const [dataUlasan, setDataUlasan] = useState<Ulasan[]>([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getData();

      setDataUlasan(data);
    }

    fetchData();
  }, []);

  const product = dataUlasan.map((item: Ulasan) => (
    <UlasanCard
      key={item.id}
      id={item.id}
      name={item.nama}
      title={
        item.Hotel
          ? item.Hotel
          : item.wisata
          ? item.wisata
          : item.MakananKhas
          ? item.MakananKhas
          : "-"
      }
      comment={item.ulasan}
    />
  ));

  return (
    <div className="gap-3">
      <Carousel
        showDots={true}
        responsive={responsive}
        arrows={false}
        swipeable
        draggable
        infinite
        autoPlay
        autoPlaySpeed={5000}
      >
        {product}
      </Carousel>
    </div>
  );
}

export function UlasanCard(props: {
  id: number;
  name: string;
  title: string;
  comment: string;
}) {
  const isTextLong = props.name.length > 15;
  return (
    <div
      key={props.id}
      className="rounded-2xl py-5 px-5 border border-gray-400 shadow-md my-10 mx-[6px] min-h-[369px]"
    >
      <div className="flex flex-row items-center">
        <Icon
          path={mdiAccountCircleOutline}
          title="User Profile"
          size={1.3}
          color={"#FE6984"}
        />
        <h2
          className={clsx("ml-3", "text-neutral-700", {
            "text-[25px]": !isTextLong, // Gunakan ukuran normal jika teks tidak panjang
            "text-sm": isTextLong, // Gunakan ukuran yang lebih kecil jika teks panjang
            "font-medium": true, // Atau gunakan properti font sesuai kebutuhan Anda
          })}
        >
          {props.name}
        </h2>
      </div>
      <h2 className="text-neutral-700 text-xl font-medium mt-3">
        {props.title}
      </h2>
      <p className="text-black text-[13px] font-light mt-2">{props.comment}</p>
    </div>
  );
}
