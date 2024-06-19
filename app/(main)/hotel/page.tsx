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
            href="/hotel/all"
            className="text-gray-500 text-base-md md:text-xl font-medium"
          >
            Lihat semua
          </Link>
        </div>
        <CardHotel limit={limit} currentPage={currentPage+1} search={search} />
      </div>

      {/* Hotel Populer */}
      <div className="w-full mt-10">
        <div className="flex justify-between items-center m-auto w-[95%] md:w-[85%]">
          <h3 className="text-black text-[1.18rem] md:text-2xl font-semibold">
            Hotel Populer
          </h3>
          <Link
            href="/hotel/all"
            className="text-gray-500 text-base-md md:text-xl font-medium"
          >
            Lihat semua
          </Link>
        </div>
        <CardHotel limit={limit} currentPage={currentPage} search={search} />
      </div>

      {/* Ulasan */}
      <div className="w-full mt-10">
        <hr className="bg-black" />
        <AddUlasan hotel={true} />
        <div className="">
          <CardUlasan />
        </div>
      </div>
      <Footer />
    </main>
  );
}
