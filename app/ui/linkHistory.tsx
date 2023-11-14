import Link from "next/link";

export default function LinkHistory({ link }: { link: string }) {
  const capitalizedLink = link.charAt(0).toUpperCase() + link.slice(1);
  return (
    <>
      <Link href="/" className="text-gray-500 text-lg font-semibold">
        Beranda
      </Link>
      <p className="text-gray-500 text-lg font-semibold">/</p>
      <Link href={`/${link}`} className="text-gray-500 text-lg font-semibold">
        {capitalizedLink}
      </Link>
      <p className="text-gray-500 text-lg font-semibold">/</p>
      <p className="text-black text-lg font-semibold">
        Detail {capitalizedLink}
      </p>
    </>
  );
}
