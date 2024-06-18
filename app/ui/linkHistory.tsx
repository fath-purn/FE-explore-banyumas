import Link from "next/link";

export default function LinkHistory({
  link,
  destinasi,
  hotel,
  nama,
  makanan,
}: {
  link: string;
  destinasi?: boolean;
  hotel?: boolean;
  makanan?: boolean;
  nama: string;
}) {
  const capitalizedLink = link.charAt(0).toUpperCase() + link.slice(1);
  const namaTempat = nama.charAt(0).toUpperCase() + nama.slice(1);
  return (
    <>
      <Link
        href="/"
        className="text-gray-500 text-sm md:text-base font-semibold"
      >
        Beranda
      </Link>
      <p className="text-gray-500 text-sm md:text-base font-semibold">/</p>
      {destinasi ? (
        <>
          <Link
            href={`/destinasi`}
            className="text-gray-500 text-sm md:text-base font-semibold"
          >
            Destinasi
          </Link>
          <p className="text-gray-500 text-sm md:text-base font-semibold">/</p>
          <Link
            href={hotel ? `/hotel` : makanan ? `/makanan` : `/wisata`}
            className="text-gray-500 text-sm md:text-base font-semibold"
          >
            {hotel ? `Hotel` : makanan ? `Makanan` : `Wisata`}
          </Link>
          <p className="text-gray-500 text-sm md:text-base font-semibold">/</p>
          <p className="text-black-500 text-sm md:text-base font-semibold">
            {namaTempat}
          </p>
        </>
      ) : (
        <>
          <Link
            href={`/${link}`}
            className="text-gray-500 text-sm md:text-base font-semibold"
          >
            {capitalizedLink}
          </Link>
          <p className="text-gray-500 text-sm md:text-base font-semibold">/</p>
          <p className="text-black text-sm md:text-base font-semibold">
            {namaTempat}
          </p>
        </>
      )}
    </>
  );
}
