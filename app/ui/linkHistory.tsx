import Link from "next/link";

export default function LinkHistory({ link }: { link: string }) {
  const capitalizedLink = link.charAt(0).toUpperCase() + link.slice(1);
  return (
    <>
      <Link href="/" className="text-gray-500 text-sm md:text-base font-semibold">
        Beranda
      </Link>
      <p className="text-gray-500 text-sm md:text-base font-semibold">/</p>
      <Link href={`/${link}`} className="text-gray-500 text-sm md:text-base font-semibold">
        {capitalizedLink}
      </Link>
      <p className="text-gray-500 text-sm md:text-base font-semibold">/</p>
      <p className="text-black text-sm md:text-base font-semibold">
        Detail {capitalizedLink}
      </p>
    </>
  );
}
