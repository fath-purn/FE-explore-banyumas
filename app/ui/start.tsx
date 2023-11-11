import Icon from "@mdi/react";
import { mdiStar } from "@mdi/js";

export default function start({ jumlahBintang }: { jumlahBintang: number }): JSX.Element {
    return (
        <>
            {Array.from({ length: jumlahBintang }, (_, index) => {
                return (
                    <Icon
                        key={index}
                        path={mdiStar}
                        size={0.8}
                        color="#FFC107"
                        className="inline"
                    />
                );
            })}
        </>
    );
}
