import Image from "next/image";

const images = [
  "https://ik.imagekit.io/fathpurn/4.png?updatedAt=1703228583230",
  "https://ik.imagekit.io/fathpurn/6.png?updatedAt=1703228583215",
  "https://ik.imagekit.io/fathpurn/5.png?updatedAt=1703228583271",
  "https://ik.imagekit.io/fathpurn/9.png?updatedAt=1703228583337",
  "https://ik.imagekit.io/fathpurn/7.png?updatedAt=1703228583380",
  "https://ik.imagekit.io/fathpurn/8.png?updatedAt=1703228582928",
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
