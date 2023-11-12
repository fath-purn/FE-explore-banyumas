import FooterIcon from "./footerIcon";
import FooterGalery from "./footerGalery";

export default function Footer() {
  return (
    <footer className="mt-10 w-full bg-slate-950 ">
      <div className="flex justify-center">
        <div className="w-[95%] md:w-full pb-8 flex flex-col items-center">
          <div className="flex items-center mt-8 justify-center ">
            <div className="mr-5 flex flex-col items-end">
              <span className="w-[55px] h-[3px] bg-rose-500 hidden md:block mb-1"></span>
              <span className="w-[85px] h-[3px] bg-rose-500 hidden md:block"></span>
            </div>
            <h2 className="text-white text-[30px] md:text-[40px] font-semibold">
              ExploreBanyumas
            </h2>
            <div className="ml-5">
              <span className="w-[55px] h-[3px] bg-rose-500 hidden md:block mb-1"></span>
              <span className="w-[85px] h-[3px] bg-rose-500 hidden md:block"></span>
            </div>
          </div>
          <div className="mt-10 w-[80%] flex flex-col md:flex-row">
            <div className="w-full md:w-[45%]">
              <h6 className="text-white text-[18px] text-center font-semibold mb-3">
                Kontak
              </h6>
              <div className="flex flex-col items-start">
                <FooterIcon />
              </div>
            </div>
            <div className="w-[10%] flex justify-center">
              <span className="w-[5px] h-full bg-white hidden md:block"></span>
            </div>
            <div className="w-full md:w-[45%] flex flex-col items-center justify-center mt-5">
              <h6 className="text-white text-[18px] text-center font-semibold mb-3">
                Galeri
              </h6>
              <div className="grid grid-cols-3 gap-3">
                <FooterGalery />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
