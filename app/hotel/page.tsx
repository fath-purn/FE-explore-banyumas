import type { Metadata } from "next";
import TopBaner from "@/app/ui/topBaner";

export const metadata: Metadata = {
  title: "Hotel",
};

export default function hotel() {
    return (
        <main className="h-[10000px]">
      <div className="h-[617px]">
        <TopBaner />
      </div>
    </main>
    )
}