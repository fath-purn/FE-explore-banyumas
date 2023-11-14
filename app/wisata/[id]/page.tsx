import LinkHistory from "@/app/ui/linkHistory";
import Image from "next/image";
import Link from "next/link";
import Keterangan from "@/app/ui/wisata/keterangan";

// panggil dari api
export const imageById = [
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
      kolam: true,
      parkir: true,
      tiket: 50000,
    },
  },
]

export default function Page({ params }: { params: { id: string } }) {
  return (
    <div className="h-[10000px]">
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-row gap-1 w-[90%] mt-10">
          <LinkHistory link="wisata" />
        </div>
        <h1 className="text-black text-[40px] font-semibold text-center">
          Lokawisata Baturaden
        </h1>

        {/* Images */}
        <div className="flex flex-row w-[90%] mt-8 gap-5">
          <Image
            src="https://via.placeholder.com/737x395"
            alt="Baturaden"
            width={737}
            height={395}
            className="rounded-xl w-[55%]"
          />
          <div className="flex flex-col justify-between w-[45%]">
            <Image
              src="https://via.placeholder.com/574x187"
              alt="Baturaden"
              width={574}
              height={187}
              className="rounded-xl"
            />
            <Image
              src="https://via.placeholder.com/574x187"
              alt="Baturaden"
              width={574}
              height={187}
              className="rounded-xl"
            />
          </div>
        </div>
        <div>
          <div>
            <h2>Tentang Lokawisata Baturraden</h2>
            <p>
              Lokasi wisata Baturaden terletak di sebelah selatan lereng Gunung
              Slamet, Kabupaten Banyumas, Jawa Tengah Disini wisatawan dapat
              menikmati panorama Gunung Slamet, wisatawanpun akan betah
              berlama-lama disini karena Lokawisata Baturraden menyediakan
              berbagai fasilitas super lengkap
            </p>
            <div>
              <Keterangan keterangan={imageById[0].keterangan} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
