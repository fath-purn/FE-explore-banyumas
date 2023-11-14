import LinkHistory from "@/app/ui/linkHistory";
import { dataHotel } from "@/app/page";
import CardHotel from "@/app/ui/hotel/cardHotel";
import Pagination from "@/app/ui/destinasi/pagination";
import { dataKecamatan } from "@/app/destinasi/page";
import Footer from "@/app/ui/footer";

interface Props {
  params: {
    id: string;
  };
  searchParams: {
    query: string;
    page: string;
  };
}

// dari API
const dataHotelKecamatan = {
  id: 1,
  kecamatan: "Baturaden",
  totalHotel: 10,
  hotel: [dataHotel],
};

export default function Page({ params, searchParams }: Props) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  const itemsPerPage = 10; // Change this to the desired number of items per page

  const totalItems = dataKecamatan.data.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-row gap-1 w-[90%] md:w-[90%] mt-10">
          <LinkHistory
            link={dataHotelKecamatan.kecamatan}
            destinasi={true}
            hotel={true}
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="w-[90%]">
          <h1 className="text-black text-[25px] font-semibold text-left mt-10">
            Hotel di {dataHotelKecamatan.kecamatan}
          </h1>
        </div>
        <div className="w-[95%]">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 justify-center items-center m-auto mt-5 gap-3">
            <CardHotel hotel={dataHotel} />
          </div>
        </div>
      </div>
      {/* pagination */}
      <div className="flex flex-row justify-center items-center mt-10">
        <Pagination totalPages={totalPages} />
      </div>
      <Footer />
    </div>
  );
}
