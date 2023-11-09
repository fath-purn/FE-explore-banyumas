import Image from "next/image";

const image = [
    {
        alt: "Mountains",
        src: "https://via.placeholder.com/432x336",
    },
    {
        alt: "Mountains",
        src: "https://via.placeholder.com/432x336",
    },
    {
        alt: "Mountains",
        src: "https://via.placeholder.com/432x336",
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
                        className="rounded-lg shadow-md mb-3"
                        width={432}
                        height={336}
                    />
                </div>
            ))}
        </>
    );
}
