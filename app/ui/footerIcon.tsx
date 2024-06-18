import Icon from "@mdi/react";
import { mdiInstagram, mdiPhone, mdiEmailOutline  } from "@mdi/js";

const kontak = [
  {
    icon: mdiEmailOutline ,
    text: "ExploreBanyumasJateng@gmail.com",
  },
  {
    icon: mdiInstagram,
    text: "ExploreBanyumas.official",
  },
  {
    icon: mdiPhone,
    text: "+62 85155040590",
  },
];

export default function FooterIcon() {
  return (
    <>
      {kontak.map((item, index) => (
        <div key={index} className="flex items-center justify-center mb-2">
          <Icon path={item.icon} size={1} color="#FE6984" className="mr-2" />
          <p className="text-white text-[13px] lg:text-[15px] font-normal">
            {item.text}
          </p>
        </div>
      ))}
    </>
  );
}
