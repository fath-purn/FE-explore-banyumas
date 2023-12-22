import { Metadata } from "next";
import Search from "@/app/ui/admin/search";
import { CreateInvoice } from "@/app/ui/admin/buttons";
import { Suspense } from 'react';
import Table from "@/app/ui/admin/wisata/table";
import Pagination from "@/app/ui/destinasi/pagination";
import { InvoicesTableSkeleton } from "@/app/ui/skeletons";

export const metadata: Metadata = {
  title: "Dashboard ",
};
 
export default function Page({
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
    <div className="">
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <CreateInvoice tambah="Wisata" link="/dashboard/wisata/create" />
        <Search placeholder="Search wisata..." />
      </div>
      <Suspense key={limit + currentPage} fallback={<InvoicesTableSkeleton />}>
        <Table limit={limit} currentPage={currentPage} search={search} />
      </Suspense>
    </div>
  );
}
