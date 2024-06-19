import type { Metadata } from "next";
import TopBaner from "@/app/ui/topBaner";
import Search from "@/app/ui/search";
import Link from "next/link";
import CardWisata from "@/app/ui/wisata/cardWisata";
import Footer from "@/app/ui/footer";
import CardUlasan from "@/app/ui/cardUlasan";
import AddUlasan from "@/app/ui/ulasan/addUlasan";

export const metadata: Metadata = {
  title: "Wisata",
};

export default function Wisata({
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
    <main>
      <div className="h-[617px]">
        <TopBaner />
      </div>
      <div className="w-full relative bottom-[1.5rem]">
        <div className="flex items-center justify-between m-auto w-[95%] md:w-[80%]">
          <Search placeholder="Search invoices..." />
        </div>
      </div>

      {/* Wisata Terdekat */}
      <div className="w-full mt-10">
        <div className="flex justify-between items-center m-auto w-[95%] md:w-[85%]">
          <h3 className="text-black text-[1.18rem] md:text-2xl font-semibold">
            Wisata Terdekat
          </h3>
          <Link
            href="/wisata/all"
            className="text-gray-500 text-base-md md:text-xl font-medium"
          >
            Lihat semua
          </Link>
        </div>
        <CardWisata limit={limit} currentPage={currentPage} search={search} />
      </div>

      {/* Wisata paling banyak pengunjung */}
      <div className="w-full mt-10">
        <div className="flex justify-between items-center m-auto w-[95%] md:w-[85%]">
          <h3 className="text-black text-[1.18rem] md:text-2xl font-semibold">
            Wisata paling banyak pengunjung
          </h3>
          <Link
            href="/wisata/all"
            className="text-gray-500 text-base-md md:text-xl font-medium"
          >
            Lihat semua
          </Link>
        </div>
        <CardWisata limit={limit} currentPage={currentPage+1} search={search} />
      </div>
      {/* Ulasan */}
      <div className="w-full mt-10">
        <hr className="bg-black" />
        <AddUlasan wisata={true} />
        <div className="">
          <CardUlasan />
        </div>
      </div>
      <Footer />
    </main>
  );
}
