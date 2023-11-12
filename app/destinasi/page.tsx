import type { Metadata } from "next";
import TopBaner from "@/app/ui/topBaner";

export const metadata: Metadata = {
  title: "Destinasi",
};

export default function destinasi() {
    return (
        <main className="h-[10000px]">
      <div className="h-[617px]">
        <TopBaner />
      </div>
    </main>
    )
}