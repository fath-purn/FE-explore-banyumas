import TopBaner from "@/app/ui/topBaner";
import Search from "@/app/ui/search";
import DataBanyumas from "@/app/ui/dataBanyumas";
import CardImage from "@/app/ui/cardImage";
import Link from "next/link";
import CardHotel from "@/app/ui/hotel/cardHotel";
import CardWisata from "@/app/ui/wisata/cardWisata";
import Footer from "@/app/ui/footer";
import { Suspense } from "react";
import { CardSkeleton } from "../ui/skeletons";
import CardFood from "../ui/food/cardFood";

export default function Page({
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
      <div className="h-[401px]">
        <TopBaner />
      </div>
      <div className="w-full relative bottom-[1.5rem]">
        <div className="flex items-center justify-between m-auto w-[95%] md:w-[80%]">
          <Search placeholder="Search invoices..." />
        </div>
      </div>

      {/* Selamat datang */}
      <div className="w-full mt-10">
        <div className="flex justify-center m-auto w-[95%] md:w-[85%]">
          <h2 className="text-zinc-950 text-3xl font-bold text-center mb-5">
            Selamat Datang di BANYUMAS!
          </h2>
        </div>
        <div className="flex flex-col items-center justify-center m-auto w-[95%] md:w-[85%]">
          <h2 className="text-zinc-950 text-3xl font-bold text-center mt-10 mb-5">
            Seputar Banyumas
          </h2>
          <p className="text-center text-stone-700 text-base font-normal w-[90%] md:w-[65%]">
            Kabupaten Banyumas, yang terletak di Provinsi Jawa Tengah,
            Indonesiam adalah destinasi wisata yang memukau dengan keindahan
            alam, warisan sejarah, dan kekayaan budaya yang memikat. Nikamti
            kelezatan kuliner khas seperti mendoan yang gurih dan soto Sokaraja
            dengan kuah kacangnya yang unik. Temukan pesona air terjun,
            perbukitan hijau, serta kekayaan sejarah yang ada di setiap
            sudutnya. Jelajahi Banyumas dan rasakan pengalaman tak terlupakan di
            destinasi wisata yang semakin berkembang dengan berbagai pilihan
            akomodasi yang nyaman dan menarik.
          </p>
          {/* <Link
            href="/destinasi"
            className="text-gray-500 text-base font-medium mt-5 underline"
          >
            Selengkapnya
          </Link> */}
          <div className="flex items-center justify-center m-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 m-auto w-[95%] md:w-full gap-4">
              <DataBanyumas />
            </div>
          </div>
        </div>
      </div>

      {/* Hotel terbaik di Banyumas */}
      <div className="w-full mt-10">
        <div className="flex justify-between items-center m-auto w-[95%] md:w-[85%]">
          <h3 className="text-black text-[1.18rem] md:text-2xl font-semibold">
            Hotel Terbaik di Banyumas
          </h3>
          <Link
            href="/hotel/all"
            className="text-gray-500 text-base-md md:text-xl font-medium"
          >
            Lihat semua
          </Link>
        </div>
        <Suspense fallback={<CardSkeleton />}>
          <CardHotel limit={limit} currentPage={currentPage} search={search} />
        </Suspense>
      </div>
      {/* Wisata terbaik di Banyumas */}
      <div className="w-full mt-10">
        <div className="flex justify-between items-center m-auto w-[95%] md:w-[85%]">
          <h3 className="text-black text-[1.18rem] md:text-2xl font-semibold">
            Wisata Terbaik di Banyumas
          </h3>
          <Link
            href="/wisata/all"
            className="text-gray-500 text-base-md md:text-xl font-medium"
          >
            Lihat semua
          </Link>
        </div>
        <Suspense fallback={<CardSkeleton />}>
          <CardWisata limit={limit} currentPage={currentPage} search={search} />
        </Suspense>
      </div>
      {/* Makanan terbaik di Banyumas */}
      <div className="w-full mt-10">
        <div className="flex justify-between items-center m-auto w-[95%] md:w-[85%]">
          <h3 className="text-black text-[1.18rem] md:text-2xl font-semibold">
            Makanan Khas Terbaik di Banyumas
          </h3>
          <Link
            href="/food/all"
            className="text-gray-500 text-base-md md:text-xl font-medium"
          >
            Lihat semua
          </Link>
        </div>
        <Suspense fallback={<CardSkeleton />}>
          <CardFood limit={limit} currentPage={currentPage} search={search} />
        </Suspense>
      </div>
      <Footer />
    </main>
  );
}
