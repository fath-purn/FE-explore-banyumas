import LinkHistory from "@/app/ui/linkHistory";
import Image from "next/image";
import Link from "next/link";
import Keterangan from "@/app/ui/wisata/keterangan";
import { mdiMapMarker } from "@mdi/js";
import Icon from "@mdi/react";
import CardHotel from "@/app/ui/hotel/cardHotel";
import { dataHotel } from "@/app/page";
import Footer from "@/app/ui/footer";

// panggil dari api
const dataWisataById = [
  {
    id: "0",
    nama: "Baturaden",
    src: {
      image1: "https://via.placeholder.com/737x395",
      image2: "https://via.placeholder.com/574x187",
      image3: "https://via.placeholder.com/574x187",
    },
    deskripsi: `Lokasi wisata Baturaden terletak di sebelah selatan lereng Gunung
    Slamet, Kabupaten Banyumas, Jawa Tengah Disini wisatawan dapat
    menikmati panorama Gunung Slamet, wisatawanpun akan betah
    berlama-lama disini karena Lokawisata Baturraden menyediakan
    berbagai fasilitas super lengkap`,
    alamat:
      "Jl. Jend. Soedirman No.324, Pereng, Sokanegara, Kec. Purwokerto Timur, Kabupaten Banyumas, Jawa Tengah 53116",
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
    keterangan: {
      jarak: 10,
      buka: "08:00",
      tutup: "17:00",
      akomodasi: 12,
      kolam: true,
      parkir: true,
      tiket: 50000,
    },
  },
];

export default function Page({ params }: { params: { id: string } }) {
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-row gap-1 w-[90%] md:w-[90%] mt-10">
          <LinkHistory link="wisata" />
        </div>
        <h1 className="text-black text-[40px] font-semibold text-center mt-10">
          Lokawisata {dataWisataById[0].nama}
        </h1>

        {/* Images */}
        <div className="flex flex-col md:flex-row w-[90%] md:w-[90%] mt-8 gap-5">
          <Image
            src={dataWisataById[0].src.image1}
            alt={dataWisataById[0].nama}
            width={737}
            height={395}
            className="rounded-xl w-full md:w-[55%] shadow-sm"
          />
          <div className="flex flex-col justify-between w-full md:w-[50%] lg:w-[45%]">
            <Image
              src={dataWisataById[0].src.image2}
              alt={dataWisataById[0].nama}
              width={574}
              height={187}
              className="rounded-xl w-full mb-5 lg:max-w-[507px] shadow-sm"
            />
            <Image
              src={dataWisataById[0].src.image3}
              alt={dataWisataById[0].nama}
              width={574}
              height={187}
              className="rounded-xl w-full lg:max-w-[507px] shadow-sm"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row w-[90%] md:w-[90%] mt-8 gap-5">
          <div className="flex flex-col w-full md:w-[55%]">
            <h2 className="text-black text-3xl font-semibold">
              Tentang Lokawisata {dataWisataById[0].nama}
            </h2>
            <p className="text-gray-500 mt-3 text-[20px] font-normal">
              {dataWisataById[0].deskripsi}
            </p>
            <div className="grid grid-cols-2 mt-5">
              <Keterangan detail={true} keterangan={dataWisataById[0].keterangan} />
            </div>
          </div>
          <div className="flex flex-col w-full lg:ml-5 md:w-[50%] lg:w-[45%] shadow-md rounded-lg">
            <iframe
              src={dataWisataById[0].maps}
              height="333"
              className="rounded-xl"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="flex flex-row gap-3 my-3">
              <Icon path={mdiMapMarker} size={3} color="#FE6984" />
              <p className=" text-gray-700 text-lg font-light">
                {dataWisataById[0].alamat}
              </p>
            </div>
          </div>
        </div>

        <div className="w-[90%] md:w-[90%] mt-10">
          <h2 className="text-black text-[25px] font-semibold mb-5">
            Hotel terdekat wisata
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5">
            <Link href={`/hotel/${dataWisataById[0].hotelTerdekat[0].id}`}>
              <div className="flex-1">
                <Image
                  src={dataWisataById[0].hotelTerdekat[0].src}
                  alt={dataWisataById[0].hotelTerdekat[0].nama}
                  width={659}
                  height={390}
                  className="rounded-xl relative z-0 shadow-sm"
                />
                <p className="relative bottom-10 md:bottom-16 left-5 text-white text-base md:text-[25px] font-bold">
                  {dataWisataById[0].hotelTerdekat[0].nama}
                </p>
              </div>
            </Link>

            <Link href={`/hotel/${dataWisataById[0].hotelTerdekat[1].id}`}>
              <div className="flex-1">
                <Image
                  src={dataWisataById[0].hotelTerdekat[1].src}
                  alt={dataWisataById[0].hotelTerdekat[1].nama}
                  width={659}
                  height={390}
                  className="rounded-xl relative z-0 shadow-sm"
                />
                <p className="relative bottom-10 md:bottom-16 left-5 text-white text-base md:text-[25px] font-bold">
                  {dataWisataById[0].hotelTerdekat[1].nama}
                </p>
              </div>
            </Link>
          </div>
        </div>
        <div className="w-[95%] md:w-[90%] mt-0">
          <h2 className="text-black text-[25px] font-semibold mb-5">
            Hotel terdekat lainnya
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 justify-center items-center m-auto mt-5 gap-3">
            <CardHotel hotel={dataHotel} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

