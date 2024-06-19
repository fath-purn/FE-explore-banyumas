import type { Metadata } from "next";
import TopBaner from "@/app/ui/topBaner";
import Search from "@/app/ui/search";
import Link from "next/link";
import Footer from "@/app/ui/footer";
import CardUlasan from "@/app/ui/cardUlasan";
import CardFood from "@/app/ui/food/cardFood";
import AddUlasanMakanan from "@/app/ui/ulasan/addUlasanMakanan";

export const metadata: Metadata = {
  title: "Makanan",
};

export default function Makanan({
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

      {/* Makanan Terbaik */}
      <div className="w-full mt-10">
        <div className="flex justify-between items-center m-auto w-[95%] md:w-[85%]">
          <h3 className="text-black text-[1.18rem] md:text-2xl font-semibold">
            Kuliner Khas Banyumas
          </h3>
          <Link
            href="/food/all"
            className="text-gray-500 text-base-md md:text-xl font-medium"
          >
            Lihat semua
          </Link>
        </div>
        <CardFood limit={limit} currentPage={currentPage} search={search} />
      </div>

      {/* Hotel Populer */}
      <div className="w-full mt-10">
        <div className="flex justify-between items-center m-auto w-[95%] md:w-[85%]">
          <h3 className="text-black text-[1.18rem] md:text-2xl font-semibold">
            Kuliner Populer di Banyumas
          </h3>
          <Link
            href="/food/all"
            className="text-gray-500 text-base-md md:text-xl font-medium"
          >
            Lihat semua
          </Link>
        </div>
        <CardFood limit={limit} currentPage={currentPage+1} search={search} />
      </div>

      {/* Ulasan */}
      <div className="w-full mt-10">
        <hr className="bg-black" />
        <AddUlasanMakanan />
        <div className="">
          <CardUlasan />
        </div>
      </div>
      <Footer />
    </main>
  );
}
