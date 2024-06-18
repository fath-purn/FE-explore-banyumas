import type { Metadata } from "next";
import CardHotel from "@/app/ui/hotel/cardHotel";
import Footer from "@/app/ui/footer";
import CardUlasan from "@/app/ui/cardUlasan";
import AddUlasan from "@/app/ui/ulasan/addUlasan";
import LinkHistory from "@/app/ui/linkHistory";
import CardFood from "@/app/ui/food/cardFood";
import AddUlasanMakanan from "@/app/ui/ulasan/addUlasanMakanan";

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
  const limit = Number(searchParams?.limit) || 20;
  const currentPage = Number(searchParams?.page) || 1;
  const search = searchParams?.search || "";

  return (
    <main className="">
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-row gap-1 w-[90%] md:w-[90%] mt-10">
          <LinkHistory link={"hotel"} nama={"Semua"} />
        </div>
      </div>

      {/* Hotel Terbaik */}
      <div className="w-full mt-10">
        <CardFood limit={limit} currentPage={currentPage} search={search} pagination={true}/>
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
