import type { Metadata } from "next";
import TopBaner from "@/app/ui/topBaner";
import Search from "@/app/ui/search";
import CardHotel from "@/app/ui/hotel/cardHotel";
import Link from "next/link";
import Footer from "@/app/ui/footer";
import CardUlasan from "@/app/ui/cardUlasan";
import AddUlasan from "@/app/ui/ulasan/addUlasan";

export const metadata: Metadata = {
  title: "Hotel",
};

// ganti dengan api
const dataUlasan = [
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

export default function Hotel({
  searchParams,
}: {
  searchParams?: {
    limit?: number;
    page?: string;
    search?: string;
  };
}) {
  const limit = Number(searchParams?.limit) || 5;
  const currentPage = Number(searchParams?.page) || 1;
  const search = searchParams?.search || "";

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
            className="text-gray-500 text-base-md md:text-xl font-medium"
          >
            Lihat semua
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 justify-center items-center m-auto w-[95%] mt-5 gap-3">
          <CardHotel limit={limit} currentPage={currentPage} search={search} />
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
            className="text-gray-500 text-base-md md:text-xl font-medium"
          >
            Lihat semua
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 justify-center items-center m-auto w-[95%] mt-5 gap-3">
          <CardHotel limit={limit} currentPage={currentPage} search={search} />
        </div>
      </div>

      {/* Ulasan */}
      <div className="w-full mt-10">
        <hr className="bg-black" />
        <AddUlasan hotel={true} />
        <div className="">
          <CardUlasan dataUlasan={dataUlasan} />
        </div>
      </div>
      <Footer />
    </main>
  );
}
