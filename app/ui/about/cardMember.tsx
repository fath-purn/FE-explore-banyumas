import Image from "next/image";
import clsx from "clsx";

interface TeamProps {
  teamMembers: {
    name: string;
    imageUrl: string;
  }[];
  top: boolean;
}

export default function CardAbout({ teamMembers, top }: TeamProps) {
  return (
    <div
      className={clsx("grid grid-cols-1  gap-5 mt-10 w-[90%]", {
        "md:grid-cols-3": top,
        "md:grid-cols-2": !top,
      })}
    >
      {teamMembers.map((member) => (
        <div key={member.name} className="flex flex-col items-center mb-5">
          <Image
            src={member.imageUrl}
            alt="Destinasi"
            width={405}
            height={426}
            className="shadow-sm object-cover"
          />
          <p className="text-black text-[18px] mt-3 font-semibold">
            {member.name}
          </p>
        </div>
      ))}
    </div>
  );
}
