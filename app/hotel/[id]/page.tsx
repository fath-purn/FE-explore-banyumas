import LinkHistory from "@/app/ui/linkHistory";
import Image from "next/image";
import Link from "next/link";
import { mdiMapMarker } from "@mdi/js";
import Icon from "@mdi/react";
import { dataWisata } from "@/app/page";
import Footer from "@/app/ui/footer";
import CardWisata from "@/app/ui/wisata/cardWisata";
import Fasilitas from "@/app/ui/hotel/fasilitas";

// panggil dari api
const dataHotelById = [
  {
    id: "0",
    nama: "Baturaden",
    src: {
      image1: "https://via.placeholder.com/737x395",
      image2: "https://via.placeholder.com/574x187",
      image3: "https://via.placeholder.com/574x187",
    },
    deskripsi: `Luminor Hotel Purwokerto telah beroperasi sejak tahun 2010 dan merupakan anak perusahaan dari Waringin Group. Luminor Hotel Purwokerto memiliki tiga (3) tipe kamar, Deluxe Room, Executive Room, Suite Room dengan ukuran kamar mulai dari dua puluh satu (21) meter persegi hingga tiga puluh sembilan (39) meter persegi.`,
    alamat:
      "Jl. Jend. Soedirman No.324, Pereng, Sokanegara, Kec. Purwokerto Tim., Kabupaten Banyumas, Jawa Tengah 53116",
    maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7030.945539579376!2d109.22849562391517!3d-7.309144998757797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6ff5d136111f1d%3A0x1067397af999a915!2sTaman%20Botani%20Baturraden!5e0!3m2!1sid!2sid!4v1699948201567!5m2!1sid!2sid",
    hotelTerdekat: [
      {
        id: 0,
        nama: "Java Heritage",
        src: "https://via.placeholder.com/659x390",
      },
      {
        id: 1,
        nama: "Apapun itu",
        src: "https://via.placeholder.com/659x390",
      },
    ],
    price: 500000,
    kecamatan: "Baturaden",
    fasilitas: {
        wifi: true,
        bar: false,
        roomService: true,
        breakfast: true,
        restaurant: true,
        pool: true,
        parkir: true,
        bathrom: true,
        bedroom: true,
      },
  },
];

export default function Page({ params }: { params: { id: string } }) {
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-row gap-1 w-[90%] md:w-[90%] mt-10">
          <LinkHistory link="hotel" />
        </div>
        <h1 className="text-black text-[40px] font-semibold text-center mt-10">
          {dataHotelById[0].nama}
        </h1>

        {/* Images */}
        <div className="flex flex-col md:flex-row w-[90%] md:w-[90%] mt-8 gap-5">
          <Image
            src={dataHotelById[0].src.image1}
            alt={dataHotelById[0].nama}
            width={737}
            height={395}
            className="rounded-xl w-full md:w-[55%] shadow-sm"
          />
          <div className="flex flex-col justify-between w-full md:w-[50%] lg:w-[45%]">
            <Image
              src={dataHotelById[0].src.image2}
              alt={dataHotelById[0].nama}
              width={574}
              height={187}
              className="rounded-xl w-full mb-5 lg:max-w-[507px] shadow-sm"
            />
            <Image
              src={dataHotelById[0].src.image3}
              alt={dataHotelById[0].nama}
              width={574}
              height={187}
              className="rounded-xl w-full lg:max-w-[507px] shadow-sm"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row w-[90%] md:w-[90%] mt-8 gap-5">
          <div className="flex flex-col w-full md:w-[55%]">
            <h2 className="text-black text-3xl font-semibold">
              Tentang {dataHotelById[0].nama}
            </h2>
            <p className="text-gray-500 mt-3 text-[20px] font-normal">
              {dataHotelById[0].deskripsi}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 mt-5">
              <Fasilitas detail={true} fasilitas={dataHotelById[0].fasilitas} />
            </div>
          </div>
          <div className="flex flex-col w-full lg:ml-5 md:w-[50%] lg:w-[45%] shadow-md rounded-lg">
            <iframe
              src={dataHotelById[0].maps}
              height="333"
              className="rounded-xl"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="flex flex-row gap-3 my-3">
              <Icon path={mdiMapMarker} size={3} color="#FE6984" />
              <p className=" text-gray-700 text-lg font-light">
                {dataHotelById[0].alamat}
              </p>
            </div>
          </div>
        </div>

        <div className="w-[90%] md:w-[90%] mt-10">
          <h2 className="text-black text-[25px] font-semibold mb-5">
            Hotel serupa terdekat
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5">
            <Link href={`/hotel/${dataHotelById[0].hotelTerdekat[0].id}`}>
              <div className="flex-1">
                <Image
                  src={dataHotelById[0].hotelTerdekat[0].src}
                  alt={dataHotelById[0].hotelTerdekat[0].nama}
                  width={659}
                  height={390}
                  className="rounded-xl relative z-0 shadow-sm"
                />
                <p className="relative bottom-10 md:bottom-16 left-5 md:left-10 text-white text-lg md:text-[25px] font-bold">
                  {dataHotelById[0].hotelTerdekat[0].nama}
                </p>
              </div>
            </Link>

            <Link href={`/hotel/${dataHotelById[0].hotelTerdekat[1].id}`}>
              <div className="flex-1">
                <Image
                  src={dataHotelById[0].hotelTerdekat[1].src}
                  alt={dataHotelById[0].hotelTerdekat[1].nama}
                  width={659}
                  height={390}
                  className="rounded-xl relative z-0 shadow-sm"
                />
                <p className="relative bottom-10 md:bottom-16 left-5 md:left-10 text-white text-lg md:text-[25px] font-bold">
                  {dataHotelById[0].hotelTerdekat[1].nama}
                </p>
              </div>
            </Link>
          </div>
        </div>
        <div className="w-[90%] md:w-[90%] mt-0">
          <h2 className="text-black text-[25px] font-semibold mb-5">
            Wisata terdekat lainnya
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 justify-center items-center m-auto mt-5 gap-3">
            <CardWisata wisata={dataWisata} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

