import Image from "next/image";

interface DataProps {
    id: number;
    kecamatan: string;
    hotel: {
        alt: string;
        src: string;
        total: number;
    };
    wisata: {
        alt: string;
        src: string;
        total: number;
    };
}

interface CardDestinasiProps {
    dataKecamatan: DataProps[];
    page: number;
}

export default function CardDestinasi({ dataKecamatan, page }: CardDestinasiProps) {
    const startIndex = (page - 1) * 10;
    const endIndex = page * 10;

    return (
        <>
            {dataKecamatan.slice(startIndex, endIndex).map((data) => (
                <div
                    key={data.id}
                    className="flex flex-col items-center border border-gray-400 shadow-md rounded-lg"
                >
                    <h3 className="text-black text-[30px] font-semibold my-5">
                        {data.kecamatan}
                    </h3>
                    <div className="flex flex-row items-center gap-3 mb-5 mx-5">
                        <div className="flex flex-col items-center">
                            <Image
                                src={data.hotel.src}
                                alt={data.hotel.alt}
                                width={280}
                                height={280}
                                className="rounded-lg shadow-sm"
                            />
                            <p className="text-black text-[25px] font-medium mt-1">
                                {data.hotel.total} Hotel
                            </p>
                        </div>
                        <div className="flex flex-col items-center">
                            <Image
                                src={data.wisata.src}
                                alt={data.wisata.alt}
                                width={280}
                                height={280}
                                className="rounded-lg shadow-sm"
                            />
                            <p className="text-black text-[25px] font-medium mt-1">
                                {data.wisata.total} Wisata
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}
