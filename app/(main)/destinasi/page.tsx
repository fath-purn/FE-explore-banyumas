import type { Metadata } from "next";
import TopBaner from "@/app/ui/topBaner";
import Footer from "@/app/ui/footer";
import Content from "@/app/ui/destinasi/content";

export const metadata: Metadata = {
  title: "Destinasi",
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
  const limit = Number(searchParams?.limit) || 10;
  const currentPage = Number(searchParams?.page) || 1;
  const search = searchParams?.search || "";

  return (
    <main>
      <div className="h-[528px]">
        <TopBaner />
      </div>

      {/* Card destinasi */}
      <div>
        <Content limit={limit} currentPage={currentPage} search={search} />
      </div>
      <Footer />
    </main>
  );
}
