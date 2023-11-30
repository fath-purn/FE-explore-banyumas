import type { Metadata } from "next";
import TopBaner from "@/app/ui/topBaner";
import Image from "next/image";
import CardMember from "@/app/ui/about/cardMember";
import Footer from "@/app/ui/footer";

export const metadata: Metadata = {
  title: "About US",
};

const teamMembersTop = [
  {
    name: "Muhammad Taufiq Hidayat",
    imageUrl: "https://via.placeholder.com/405x426",
  },
  { name: "John Doe", imageUrl: "https://via.placeholder.com/405x426" },
  { name: "Jane Doe", imageUrl: "https://via.placeholder.com/405x426" },
];

const teamMembersBott = [
  { name: "John Doe", imageUrl: "https://via.placeholder.com/405x426" },
  { name: "Jane Doe", imageUrl: "https://via.placeholder.com/405x426" },
];

export default function about() {
  return (
    <main>
      <div className="h-[521px]">
        <TopBaner />
      </div>

      {/* Deskripsi */}
      <div className="w-full mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-center m-auto w-[95%] md:w-[85%]">
          <div className="w-[90%]">
            <h2 className="text-black text-[28px] font-semibold">
              Deskripsi Explore Banyumas
            </h2>
            <p className="text-[#888080] text-[20px] break-words font-normal mt-3 mb-5">
              Explore Banyumas merupakan sebuah website yang menyediakan layanan
              informasi mengenai hotel maupun wisata yang ada di Kabupaten
              Banyumas. Diharapkan dengan adanya website ini dapat membantu
              menambah informasi anda mengenai hotel dan wisata yang tersedia.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col justify-between gap-3">
              <Image
                src="https://via.placeholder.com/337x232"
                alt="Destinasi"
                width={337}
                height={232}
                className="rounded-lg shadow-sm min-h-[230px] object-cover"
              />
              <Image
                src="https://via.placeholder.com/337x232"
                alt="Destinasi"
                width={337}
                height={232}
                className="rounded-lg shadow-sm min-h-[230px] object-cover"
              />
            </div>
            <Image
              src="https://via.placeholder.com/281x475"
              alt="Destinasi"
              width={281}
              height={475}
              className="rounded-lg shadow-sm h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="w-full mt-10">
        <hr className="bg-black" />
        <div className="flex items-center mt-8 justify-center ">
          <div className="mr-5 flex flex-col items-end">
            <span className="w-[55px] h-[2px] bg-[#FE6984] hidden md:block"></span>
            <span className="w-[85px] h-[2px] bg-[#FE6984] hidden md:block mt-1"></span>
          </div>
          <h2 className="text-black text-[25px] font-semibold">Team Project</h2>
          <div className="ml-5">
            <span className="w-[55px] h-[2px] bg-[#FE6984] hidden md:block"></span>
            <span className="w-[85px] h-[2px] bg-[#FE6984] hidden md:block mt-1"></span>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
            <CardMember teamMembers={teamMembersTop} top={true} />
            <CardMember teamMembers={teamMembersBott} top={false} />
        </div>
      </div>
      <Footer />
    </main>
  );
}

// https://via.placeholder.com/405x426
