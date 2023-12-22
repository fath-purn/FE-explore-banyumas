import Image from "next/image";

const image = [
  {
    alt: "Mountains",
    src: "https://ik.imagekit.io/fathpurn/pl_PFAhOEMyB?updatedAt=1703079378947",
  },
  {
    alt: "Mountains",
    src: "https://ik.imagekit.io/fathpurn/2.png?updatedAt=1703079986662",
  },
  {
    alt: "Mountains",
    src: "https://ik.imagekit.io/fathpurn/3.png?updatedAt=1703079986687",
  },
];

export default function CardImage() {
  return (
    <>
      {image.map((img) => (
        <div key={img.src}>
          <Image
            alt={img.alt}
            src={img.src}
            quality={100}
            className="rounded-lg shadow-md mb-3 w-[432px] h-[270px] object-cover"
            width={432}
            height={336}
          />
        </div>
      ))}
    </>
  );
}
