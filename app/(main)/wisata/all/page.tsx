import type { Metadata } from "next";
import CardWisata from "@/app/ui/wisata/cardWisata";
import Footer from "@/app/ui/footer";
import CardUlasan from "@/app/ui/cardUlasan";
import AddUlasan from "@/app/ui/ulasan/addUlasan";
import LinkHistory from "@/app/ui/linkHistory";

export const metadata: Metadata = {
  title: "Wisata",
};

export default function WisataAll({
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
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-row gap-1 w-[90%] md:w-[90%] mt-10">
          <LinkHistory link={"wisata"} nama={"Semua"} />
        </div>
      </div>

      {/* Wisata Terbaik */}
      <div className="w-full mt-10">
        <CardWisata limit={limit} currentPage={currentPage} search={search} pagination={true}/>
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
