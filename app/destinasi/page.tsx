import type { Metadata } from "next";
import TopBaner from "@/app/ui/topBaner";
import CardDestinasi from "../ui/destinasi/cardDestinasi";

export const metadata: Metadata = {
  title: "Destinasi",
};

export default function destinasi() {
  return (
    <main className="h-[10000px]">
      <div className="h-[528px]">
        <TopBaner />
      </div>

      {/* Card destinasi */}
      {/* Hotel terbaik di Banyumas */}
      <div className="w-full mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 justify-center items-center m-auto w-[95%] mt-5 gap-3">
          <CardDestinasi />
        </div>
      </div>
    </main>
  );
}
