import type { Metadata } from "next";
import TopBaner from "@/app/ui/topBaner";
import Search from "@/app/ui/search";
import CardHotel from "../ui/hotel/cardHotel";
import Link from "next/link";
import Footer from "../ui/footer";
import CardUlasan from "../ui/cardUlasan";

export const metadata: Metadata = {
  title: "Hotel",
};

export const productData = [
  {
    id: 0,
    user: "Ferina Nur W",
    title: "Java Heritage",
    comment:
      "Cocok untuk staycation bersama keluarga, kebersihan terjamin dan nyaman. staffnya sangat ramah, parkirnya sangat luas dan tidak terlalu jauh dengan pusat kota yaa, overall sangat oke ",
  },
  {
    id: 1,
    user: "Purno",
    title: "COR Hotel",
    comment:
      "Kamarnya luas, bersih nyaman, rasanya ingin disini terus awikwokwkwk  ",
  },
  {
    id: 2,
    user: "Nafidanisa",
    title: "Dominic Hotel",
    comment:
      " Hotelnya bersih, staffnya juga ramah, kolam renang bersih, dapat sarapan pagi juga, sangat oke",
  },
  {
    id: 3,
    user: "Sindy",
    title: "Dominic Hotel",
    comment:
      "Kamarnya luas dan bersih ya, disediakan air minum juga, sangat nyamannn ",
  },
  {
    id: 4,
    user: "Dela",
    title: "Luminor Hotel",
    comment:
      "Dekat dengan alun-alun Purwokerto, aksesnya sangat mudah dijangkau karenna dipusat kota, sangat nyaman  ",
  },
  {
    id: 5,
    user: "Ferina Nur W",
    title: "Java Heritage",
    comment:
      "Kamarnya luas dan bersih ya, disediakan air minum juga, sangat nyamannn ",
  },
  {
    id: 6,
    user: "Ferina Nur W",
    title: "Java Heritage",
    comment:
      "Hotelnya bersih, staffnya juga ramah, kolam renang bersih, dapat sarapan pagi juga, sangat oke ",
  },
  {
    id: 7,
    user: "Dela",
    title: "Java Heritage",
    comment:
      "Cocok untuk staycation bersama keluarga, kebersihan terjamin dan nyaman. staffnya sangat ramah, parkirnya sangat luas dan tidak terlalu jauh dengan pusat kota yaa, overall sangat oke  ",
  },
];

export default function hotel() {
  return (
    <main className="">
      <div className="h-[617px]">
        <TopBaner />
      </div>
      <div className="w-full relative bottom-[1.5rem]">
        <div className="flex items-center justify-between m-auto w-[95%] md:w-[80%]">
          <Search placeholder="Search invoices..." />
        </div>
      </div>

      {/* Hotel Terbaik */}
      <div className="w-full mt-10">
        <div className="flex justify-between items-center m-auto w-[95%] md:w-[85%]">
          <h3 className="text-black text-[1.18rem] md:text-2xl font-semibold">
            Hotel Terbaik
          </h3>
          <Link
            href="/"
            className="text-neutral-500 text-base-md md:text-xl font-medium"
          >
            Lihat semua
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 justify-center items-center m-auto w-[95%] mt-5 gap-3">
          <CardHotel />
        </div>
      </div>

      {/* Hotel Populer */}
      <div className="w-full mt-10">
        <div className="flex justify-between items-center m-auto w-[95%] md:w-[85%]">
          <h3 className="text-black text-[1.18rem] md:text-2xl font-semibold">
            Hotel Populer
          </h3>
          <Link
            href="/"
            className="text-neutral-500 text-base-md md:text-xl font-medium"
          >
            Lihat semua
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 justify-center items-center m-auto w-[95%] mt-5 gap-3">
          <CardHotel />
        </div>
      </div>

      {/* Ulasan */}
      <div className="w-full mt-10">
        <hr className="bg-black" />
        <div className="flex items-center mt-8 justify-center ">
          <div className="mr-5 flex flex-col items-end">
            <span className="w-[55px] h-[2px] bg-rose-500 hidden md:block"></span>
            <span className="w-[85px] h-[2px] bg-rose-500 hidden md:block mt-1"></span>
          </div>
          <h2 className="text-black text-[25px] font-semibold">Ulasan</h2>
          <div className="ml-5">
            <span className="w-[55px] h-[2px] bg-rose-500 hidden md:block"></span>
            <span className="w-[85px] h-[2px] bg-rose-500 hidden md:block mt-1"></span>
          </div>
        </div>
        <div className="">
          <CardUlasan productData={productData} />
        </div>
      </div>
      <Footer />
    </main>
  );
}
