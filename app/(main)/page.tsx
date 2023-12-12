import TopBaner from "@/app/ui/topBaner";
import Search from "@/app/ui/search";
import DataBanyumas from "@/app/ui/dataBanyumas";
import CardImage from "@/app/ui/cardImage";
import Link from "next/link";
import CardHotel from "@/app/ui/hotel/cardHotel";
import CardWisata from "@/app/ui/wisata/cardWisata";
import Footer from "@/app/ui/footer";

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

export const dataHotel = [
  {
    id: "0",
    nama: "Java Heritage",
    src: "https://via.placeholder.com/237x217",
    start: 5,
    fasilitas: {
      wifi: true,
      bar: false,
      roomService: true,
      breakfast: true,
      restaurant: true,
    },
    price: 500000,
  },
  {
    id: "1",
    nama: "Java Heritage",
    src: "https://via.placeholder.com/237x217",
    start: 5,
    fasilitas: {
      wifi: true,
      bar: false,
      roomService: true,
      breakfast: true,
      restaurant: true,
    },
    price: 500000,
  },
  {
    id: "2",
    nama: "Java Heritage",
    src: "https://via.placeholder.com/237x217",
    start: 5,
    fasilitas: {
      wifi: true,
      bar: false,
      roomService: true,
      breakfast: true,
      restaurant: true,
    },
    price: 500000,
  },
  {
    id: "3",
    nama: "Java Heritage",
    src: "https://via.placeholder.com/237x217",
    start: 5,
    fasilitas: {
      wifi: true,
      bar: false,
      roomService: true,
      breakfast: true,
      restaurant: true,
    },
    price: 500000,
  },
  {
    id: "4",
    nama: "Java Heritage",
    src: "https://via.placeholder.com/237x217",
    start: 5,
    fasilitas: {
      wifi: true,
      bar: false,
      roomService: true,
      breakfast: true,
      restaurant: true,
    },
    price: 500000,
  },
];

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) {
  const query = searchParams?.query || ""; // lanjutkan ke database

  return (
    <main>
      <div className="h-[401px]">
        <TopBaner />
      </div>
      <div className="w-full relative bottom-[1.5rem]">
        <div className="flex items-center justify-between m-auto w-[95%] md:w-[80%]">
          <Search placeholder="Search invoices..." />
        </div>
      </div>

      {/* Selamat datang */}
      <div className="w-full mt-10">
        <div className="flex justify-center m-auto w-[95%] md:w-[85%]">
          <h2 className="text-zinc-950 text-3xl font-bold text-center mb-5">
            Selamat Datang di BANYUMAS!
          </h2>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center m-auto w-[95%] md:w-[85%] gap-4">
          <CardImage />
        </div>
        <div className="flex flex-col items-center justify-center m-auto w-[95%] md:w-[85%]">
          <h2 className="text-zinc-950 text-3xl font-bold text-center mt-10 mb-5">
            Seputar Banyumas
          </h2>
          <p className="text-center text-stone-700 text-base font-normal w-[90%] md:w-[65%]">
            Kabupaten Banyumas, yang terletak di Provinsi Jawa Tengah,
            Indonesia, adalah kabupaten dengan destinasi wisata yang menawarkan
            kekayaan budaya, keindahan alam, dan warisan sejarah yang
            menakjubkan. Beragam wisata di Banyumas menjadikan kota ini maju
            dibidang perhotelan
          </p>
          <Link
            href="/"
            className="text-gray-500 text-base font-medium mt-5 underline"
          >
            Selengkapnya
          </Link>
          <div className="flex items-center justify-center m-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 m-auto w-[95%] md:w-full gap-4">
              <DataBanyumas />
            </div>
          </div>
        </div>
      </div>

      {/* Hotel terbaik di Banyumas */}
      <div className="w-full mt-10">
        <div className="flex justify-between items-center m-auto w-[95%] md:w-[85%]">
          <h3 className="text-black text-[1.18rem] md:text-2xl font-semibold">
            Hotel Terbaik di Banyumas
          </h3>
          <Link href="/destinasi" className="text-gray-500 text-base-md md:text-xl font-medium">
            Lihat semua
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 justify-center items-center m-auto w-[95%] mt-5 gap-3">
          <CardHotel hotel={dataHotel} />
        </div>
      </div>
      {/* Hotel terbaik di Banyumas */}
      <div className="w-full mt-10">
        <div className="flex justify-between items-center m-auto w-[95%] md:w-[85%]">
          <h3 className="text-black text-[1.18rem] md:text-2xl font-semibold">
            Wisata Terbaik di Banyumas
          </h3>
          <Link href="/destinasi" className="text-gray-500 text-base-md md:text-xl font-medium">
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