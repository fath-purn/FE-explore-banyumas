import type { Metadata } from "next";
import TopBaner from "@/app/ui/topBaner";
import CardDestinasi from "@/app/ui/destinasi/cardDestinasi";
import Pagination from "@/app/ui/destinasi/pagination";
import Footer from "@/app/ui/footer";

export const metadata: Metadata = {
  title: "Destinasi",
};

// ganti dengan api
export const dataKecamatan = {
  jumlahKecamatan: 112,
  data: [
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
  ],
};

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

  const totalItems = dataKecamatan.data.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <main>
      <div className="h-[528px]">
        <TopBaner />
      </div>

      {/* Card destinasi */}
      <div className="w-full mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  justify-center items-center m-auto w-[95%] mt-5 gap-5">
          <CardDestinasi dataKecamatan={dataKecamatan.data} page={currentPage} />
        </div>
      </div>

      {/* pagination */}
      <div className="flex flex-row justify-center items-center mt-10">
        <Pagination totalPages={totalPages} />
      </div>
      <Footer />
    </main>
  );
}