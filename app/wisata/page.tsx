import type { Metadata } from "next";
import TopBaner from "@/app/ui/topBaner";
import Search from "@/app/ui/search";
import Link from "next/link";
import CardWisata from "@/app/ui/wisata/cardWisata";
import Footer from "../ui/footer";

export const metadata: Metadata = {
  title: "Wisata",
};

// panggil dari api
export const dataWisata = [
  {
    id: "0",
    nama: "Java Heritage",
    src: "https://via.placeholder.com/237x217",
    price: 500000,
    keterangan: {
      jarak: 10,
      buka: "08:00",
      tutup: "17:00",
      akomodasi: 12,
    },
  },
  {
    id: "1",
    nama: "Java Heritage",
    src: "https://via.placeholder.com/237x217",
    price: 500000,
    keterangan: {
      jarak: 10,
      buka: "08:00",
      tutup: "17:00",
      akomodasi: 12,
    },
  },
  {
    id: "2",
    nama: "Java Heritage",
    src: "https://via.placeholder.com/237x217",
    price: 500000,
    keterangan: {
      jarak: 10,
      buka: "08:00",
      tutup: "17:00",
      akomodasi: 12,
    },
  },
  {
    id: "3",
    nama: "Java Heritage",
    src: "https://via.placeholder.com/237x217",
    price: 500000,
    keterangan: {
      jarak: 10,
      buka: "08:00",
      tutup: "17:00",
      akomodasi: 12,
    },
  },
  {
    id: "4",
    nama: "Java Heritage",
    src: "https://via.placeholder.com/237x217",
    price: 500000,
    keterangan: {
      jarak: 10,
      buka: "08:00",
      tutup: "17:00",
      akomodasi: 12,
    },
  },
];

export default function wisata() {
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
            href="/"
            className="text-neutral-500 text-base-md md:text-xl font-medium"
          >
            Lihat semua
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 justify-center items-center m-auto w-[95%] mt-5 gap-3">
          <CardWisata wisata={dataWisata} />
        </div>
      </div>

      {/* Wisata paling banyak pengunjung */}
      <div className="w-full mt-10">
        <div className="flex justify-between items-center m-auto w-[95%] md:w-[85%]">
          <h3 className="text-black text-[1.18rem] md:text-2xl font-semibold">
            Wisata paling banyak pengunjung
          </h3>
          <Link
            href="/"
            className="text-neutral-500 text-base-md md:text-xl font-medium"
          >
            Lihat semua
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 justify-center items-center m-auto w-[95%] mt-5 gap-3">
          <CardWisata wisata={dataWisata} />
        </div>
      </div>
      <Footer />
    </main>
  );
}
