import type { Metadata } from "next";
import TopBaner from "@/app/ui/topBaner";
import CardDestinasi from "../ui/destinasi/cardDestinasi";
import Pagitation from "../ui/destinasi/pagination";

export const metadata: Metadata = {
  title: "Destinasi",
};

export const dataKecamatan = [
  {
    id: 0,
    kecamatan: "Baturaden",
    hotel: {
      alt: "Hotel",
      src: "https://via.placeholder.com/271x289",
      total: 113,
    },
    wisata: {
      alt: "Wisata",
      src: "https://via.placeholder.com/271x289",
      total: 113,
    },
  },
  {
    id: 1,
    kecamatan: "Banyumas",
    hotel: {
      alt: "Hotel",
      src: "https://via.placeholder.com/271x289",
      total: 113,
    },
    wisata: {
      alt: "Wisata",
      src: "https://via.placeholder.com/271x289",
      total: 113,
    },
  },
  {
    id: 2,
    kecamatan: "Purwokerto Selatan",
    hotel: {
      alt: "Hotel",
      src: "https://via.placeholder.com/271x289",
      total: 113,
    },
    wisata: {
      alt: "Wisata",
      src: "https://via.placeholder.com/271x289",
      total: 113,
    },
  },
  {
    id: 3,
    kecamatan: "Cilongok",
    hotel: {
      alt: "Hotel",
      src: "https://via.placeholder.com/271x289",
      total: 113,
    },
    wisata: {
      alt: "Wisata",
      src: "https://via.placeholder.com/271x289",
      total: 113,
    },
  },
  {
    id: 4,
    kecamatan: "Baturaden",
    hotel: {
      alt: "Hotel",
      src: "https://via.placeholder.com/271x289",
      total: 113,
    },
    wisata: {
      alt: "Wisata",
      src: "https://via.placeholder.com/271x289",
      total: 113,
    },
  },
  {
    id: 5,
    kecamatan: "Banyumas",
    hotel: {
      alt: "Hotel",
      src: "https://via.placeholder.com/271x289",
      total: 113,
    },
    wisata: {
      alt: "Wisata",
      src: "https://via.placeholder.com/271x289",
      total: 113,
    },
  },
  {
    id: 6,
    kecamatan: "Purwokerto Selatan",
    hotel: {
      alt: "Hotel",
      src: "https://via.placeholder.com/271x289",
      total: 113,
    },
    wisata: {
      alt: "Wisata",
      src: "https://via.placeholder.com/271x289",
      total: 113,
    },
  },
  {
    id: 7,
    kecamatan: "Cilongok",
    hotel: {
      alt: "Hotel",
      src: "https://via.placeholder.com/271x289",
      total: 113,
    },
    wisata: {
      alt: "Wisata",
      src: "https://via.placeholder.com/271x289",
      total: 113,
    },
  },
  {
    id: 8,
    kecamatan: "Baturaden",
    hotel: {
      alt: "Hotel",
      src: "https://via.placeholder.com/271x289",
      total: 113,
    },
    wisata: {
      alt: "Wisata",
      src: "https://via.placeholder.com/271x289",
      total: 113,
    },
  },
  {
    id: 9,
    kecamatan: "Banyumas",
    hotel: {
      alt: "Hotel",
      src: "https://via.placeholder.com/271x289",
      total: 113,
    },
    wisata: {
      alt: "Wisata",
      src: "https://via.placeholder.com/271x289",
      total: 113,
    },
  },
  {
    id: 10, 
    kecamatan: "Purwokerto Selatan",
    hotel: {
      alt: "Hotel",
      src: "https://via.placeholder.com/271x289",
      total: 113,
    },
    wisata: {
      alt: "Wisata",
      src: "https://via.placeholder.com/271x289",
      total: 113,
    },
  },
  {
    id: 11,
    kecamatan: "safnsafnsajfnajln",
    hotel: {
      alt: "Hotel",
      src: "https://via.placeholder.com/271x289",
      total: 113,
    },
    wisata: {
      alt: "Wisata",
      src: "https://via.placeholder.com/271x289",
      total: 113,
    },
  },
];

export default async function Destinasi({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  const itemsPerPage = 10; // Change this to the desired number of items per page

  const totalItems = dataKecamatan.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <main className="h-[10000px]">
      <div className="h-[528px]">
        <TopBaner />
      </div>

      {/* Card destinasi */}
      <div className="w-full mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  justify-center items-center m-auto w-[95%] mt-5 gap-5">
          <CardDestinasi dataKecamatan={dataKecamatan} page={currentPage}/>
        </div>
      </div>

      {/* pagination */}
      <div className="flex flex-row justify-center items-center mt-10">
        <Pagitation totalPages={totalPages} />
      </div>
    </main>
  );
}
