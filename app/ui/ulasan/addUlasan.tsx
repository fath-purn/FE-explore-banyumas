"use client";

import { useState, useEffect } from "react";

interface Props {
  wisata?: boolean;
  hotel?: boolean;
}

async function getData({wisata
}: {wisata?:boolean}) {
  if (wisata) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/wisata`,
      { cache: "no-store" }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await res.json();
    return data.data;
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/hotel`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  
  const data = await res.json();
  return data.data;
}


export default function AddUlasan({ wisata, hotel }: Props): JSX.Element {
  const [ulasan, setUlasan] = useState(false);
  const [nama, setNama] = useState("");
  const [wisataId, setWisataId] = useState<null | number>(null);
  const [hotelId, setHotelId] = useState<null | number>(null);
  const [ulasanText, setUlasanText] = useState("");
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getData({ wisata });
      if (wisata) {
        setData(data);
      } else {
        setData(data);
      }
    }

    fetchData();
  }, [wisata]);

  const handleSubmit = () => {
    const formData = new FormData();
  
    formData.append("nama", nama);
    formData.append(wisata ? "wisataId" : "hotelId", String(wisata ? wisataId : hotelId));
    formData.append("ulasan", ulasanText);
  
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/ulasan`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setUlasan(false);
        setNama("");
        setWisataId(null);
        setHotelId(null);
        setUlasanText("");
      })
      .catch((err) => console.log(err));
  };
  
  const handleChange = (value: boolean) => {
    setUlasan(value);
  };

  const handleId = (value: number) => {
    if (wisata) {
      setWisataId(value);
    } else if (hotel) {
      setHotelId(value);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center m-auto w-[95%] md:w-[85%] mt-10">
        <h3 className="text-black text-[1.18rem] md:text-2xl font-semibold">
          Ulasan pengunjung
        </h3>
        <button
          onClick={() => handleChange(true)}
          className="select-none text-gray-500 text-base underline"
          data-ripple-light="true"
          data-dialog-target="animated-dialog"
        >
          Tambah ulasan
        </button>
      </div>
      {ulasan && (
        <div
          data-dialog-backdrop="animated-dialog"
          data-dialog-backdrop-close="true"
          className="fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60  backdrop-blur-sm transition-opacity duration-300"
        >
          <div
            data-dialog="animated-dialog"
            data-dialog-mount="opacity-100 translate-y-0 scale-100"
            data-dialog-unmount="opacity-0 -translate-y-28 scale-90 pointer-events-none"
            data-dialog-transition="transition-all duration-300"
            className="relative m-4 w-[90%] md:w-[40%] rounded-lg bg-white font-sans text-base font-light leading-relaxed text-blue-gray-500 antialiased shadow-2xl"
          >
            <div className="flex mt-5 items-center p-4 font-sans text-2xl antialiased font-semibold leading-snug shrink-0 text-blue-gray-900">
              Tambahkan ulasan di {wisata ? "wisata" : "hotel"}
            </div>
            <div className="relative p-4 font-sans text-base antialiased font-light leading-relaxed border-t border-t-blue-gray-100 text-blue-gray-500">
              <form action="">
                <div className="w-full">
                  <div className="relative w-full min-w-[200px] h-10">
                    <input
                      className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                      placeholder=" "
                      onChange={(e) => setNama(e.target.value)}
                      required
                      value={nama}
                    />
                    <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
                      Nama
                    </label>
                  </div>
                  <div className="relative w-full min-w-[200px] h-10 my-3">
                    <select
                      className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                      onChange={(e) => handleId(parseInt(e.target.value))}
                      value={
                        wisata ? wisataId?.toString() : hotelId?.toString()
                      }
                    >
                      <option value="">Choose an option</option>
                      {data.map((item) => (
                        <option key={item.id} value={item.id}>
                          {item.nama}
                        </option>
                      ))}
                    </select>
                    <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
                      {wisata ? "Wisata" : "Hotel"}
                    </label>
                  </div>
                  <div className="relative w-full min-w-[200px] h-10">
                    <input
                      className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                      placeholder=" "
                      onChange={(e) => setUlasanText(e.target.value)}
                      required
                      value={ulasanText}
                    />
                    <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
                      Ulasan
                    </label>
                  </div>
                </div>
                <div className="flex flex-wrap mt-4 items-center justify-end p-4 shrink-0 text-blue-gray-500">
                  <button
                    data-ripple-dark="true"
                    data-dialog-close="true"
                    className="px-6 py-3 mr-1 font-sans text-xs font-bold text-red-500 uppercase transition-all rounded-lg middle none center hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    onClick={() => handleChange(false)}
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSubmit}
                    type="submit"
                    className=" rounded-lg bg-gradient-to-tr from-green-600 to-green-400 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    disabled={
                      (wisata ? wisataId : hotelId) === null ||
                      ulasanText === "" ||
                      nama === ""
                    }
                  >
                    Confirm
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
