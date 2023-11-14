"use client";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Icon from "@mdi/react";
import { mdiAccountCircleOutline } from "@mdi/js";

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

export default function cardUlasan({ dataUlasan}: { dataUlasan: any}) {
  const product = dataUlasan.map((item: { id: number; user: string; title: string; comment: string; }) => (
    <Ulasan id={item.id} name={item.user} title={item.title} comment={item.comment} />
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

export function Ulasan(props: {
  id: number;
  name: string;
  title: string;
  comment: string;
}) {
  return (
    <div key={props.id} className="rounded-2xl py-5 px-5 border border-gray-400 shadow-md my-10 mx-[6px] min-h-[369px]">
      <div className="flex flex-row items-center">
        <Icon path={mdiAccountCircleOutline} title="User Profile" size={1.3} color={"#FE6984"}/>
        <h2 className="ml-3 text-neutral-700 text-[25px] font-medium">
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
