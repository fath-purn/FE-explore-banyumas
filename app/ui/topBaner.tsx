import Image from "next/image";

export default function Background() {
  return (
    <div className="flex items-center justify-center h-full d:w-3/5 md:px-28 md:py-12">
      <Image
        alt="Mountains"
        src="https://ik.imagekit.io/fathpurn/beranda?updatedAt=1699529566298"
        quality={100}
        fill
        className="absolute top-0 left-0 z-[-1] max-h-[401px] hidden md:block w-[100%] brightness-[0.6]"
      />
      <Image
        alt="Mountains"
        src="https://ik.imagekit.io/fathpurn/beranda?updatedAt=1699529566298"
        quality={100}
        fill
        className="absolute top-0 left-0 z-[-1] max-h-[401px] block md:hidden w-full brightness-[0.6]"
      />
      <div className="flex flex-col items-center m-auto">
        <h1 className="text-white font-bold text-5xl md:text-[50px] leading-relaxed text-center w-[90%] sm:w-full">Explore Banyumas</h1>
        <p className="text-white text-2xl md:text-[30px] text-center w-[90%] sm:w-full my-6 flex justify-center space-x-2 gap-8 items-center"><span className="w-[86px] h-[5px] bg-white relative hidden md:block "></span>Temukan hotel dan wisata menarik di Banyumas! <span className="w-[86px] h-[5px] bg-white relative hidden md:block"></span> </p>
      </div>
    </div>
  );
}
