import Image from "next/image";

const images = [
  "https://via.placeholder.com/106x99",
  "https://via.placeholder.com/106x99",
  "https://via.placeholder.com/106x99",
  "https://via.placeholder.com/106x99",
  "https://via.placeholder.com/106x99",
  "https://via.placeholder.com/106x99",
];

export default function FooterGalery() {
  return (
    <>
      {images.map((item, index) => (
        <div key={index} className="flex items-center justify-center">
          <Image src={item} alt="image" width={106} height={99} className="" />
        </div>
      ))}
    </>
  );
}
