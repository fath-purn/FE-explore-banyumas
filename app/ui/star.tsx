import Icon from "@mdi/react";
import { mdiStar } from "@mdi/js";

export default function star({
  jumlahBintang,
}: {
  jumlahBintang: number;
}): JSX.Element {
  return (
    <>
      {Array.from({ length: jumlahBintang }, (_, index) => {
        return (
          <Icon
            key={index}
            path={mdiStar}
            size={0.7}
            color="#FFC107"
            className="inline"
          />
        );
      })}
    </>
  );
}
