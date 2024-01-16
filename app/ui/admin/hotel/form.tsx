"use client";

import Icon from "@mdi/react";
import { mdiHeart } from "@mdi/js";
import { lusitana } from "@/app/ui/fonts";
import {
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";
import { Button } from "@/app/ui/admin/button";
import { useFormState, useFormStatus } from "react-dom";
import { formSubmitHandlerHotel } from "@/app/utils/actions";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Kecamatan } from "@/app/utils/definitions";

const fasilitas = [
  {
    id: "wifi",
    name: "Wifi",
  },
  {
    id: "bar",
    name: "Bar",
  },
  {
    id: "roomService",
    name: "Room Service",
  },
  {
    id: "breakfast",
    name: "Breakfast",
  },
  {
    id: "restaurant",
    name: "Restaurant",
  },
  {
    id: "pool",
    name: "Pool",
  },
  {
    id: "parkir",
    name: "Parkir",
  },
  {
    id: "bathrom",
    name: "Bathrom",
  },
  {
    id: "bedroom",
    name: "Bedroom",
  },
];


export default function LoginForm() {
  const [code, action] = useFormState(formSubmitHandlerHotel, undefined);
  const [kecamatan, setKecamatan] = useState<Kecamatan[]>([]);
  const [image1, setImage1] = useState<File>();
  const [image2, setImage2] = useState<File>();
  const [image3, setImage3] = useState<File>();

  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_API_URL + "/kecamatan")
      .then((response) => response.json())
      .then((data) => setKecamatan(data.data));
  }, []);

  return (
    <form action={action} className="space-y-3">
      <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
        <h1 className={`${lusitana.className} mb-3 text-2xl`}>Tambah Hotel</h1>
        <div className="w-full">
        <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="image"
            >
              Image
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="image1"
                type="file"
                name="image1"
                required
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    setImage1(file);
                  }
                }}
              />
              <Icon
                path={mdiHeart}
                size={1}
                color="red"
                className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"
              />
            </div>
            <div className="relative my-3">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="image2"
                type="file"
                name="image2"
                required
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    setImage2(file);
                  }
                }}
              />
              <Icon
                path={mdiHeart}
                size={1}
                color="red"
                className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"
              />
            </div>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="image3"
                type="file"
                name="image3"
                required
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    setImage3(file);
                  }
                }}
              />
              <Icon
                path={mdiHeart}
                size={1}
                color="red"
                className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"
              />
            </div>
            <div className="relative flex flex-row gap-3 mt-3">
              {image1 && (
                <span>
                  <Image
                    src={URL.createObjectURL(image1)}
                    width={100}
                    height={100}
                    alt={image1.name}
                  />
                  <p className="mt-2 text-gray-700 text-xs font-normal">
                    {image1.name}
                  </p>
                </span>
              )}
              {image2 && (
                <span>
                  <Image
                    src={URL.createObjectURL(image2)}
                    width={100}
                    height={100}
                    alt={image2.name}
                  />
                  <p className="mt-2 text-gray-700 text-xs font-normal">
                    {image2.name}
                  </p>
                </span>
              )}
              {image3 && (
                <span>
                  <Image
                    src={URL.createObjectURL(image3)}
                    width={100}
                    height={100}
                    alt={image3.name}
                  />
                  <p className="mt-2 text-gray-700 text-xs font-normal">
                    {image3.name}
                  </p>
                </span>
              )}
            </div>
          </div>
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="nama"
            >
              Nama Hotel
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="nama"
                type="text"
                name="nama"
                placeholder="Masukkan nama hotel"
                required
              />
              <Icon
                path={mdiHeart}
                size={1}
                color="red"
                className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"
              />
            </div>
          </div>
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="deskripsi"
            >
              Deskripsi
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="deskripsi"
                type="text"
                name="deskripsi"
                placeholder="Masukkan deskripsi hotel"
                required
              />
              <Icon
                path={mdiHeart}
                size={1}
                color="red"
                className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"
              />
            </div>
          </div>
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="alamat"
            >
              Alamat
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="alamat"
                type="text"
                name="alamat"
                placeholder="Masukkan alamat hotel"
                required
              />
              <Icon
                path={mdiHeart}
                size={1}
                color="red"
                className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"
              />
            </div>
          </div>
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="maps"
            >
              Maps
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="maps"
                type="text"
                name="maps"
                placeholder="Masukkan link maps yang didapatkan dari share -> html"
                required
              />
              <Icon
                path={mdiHeart}
                size={1}
                color="red"
                className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"
              />
            </div>
          </div>
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="price"
            >
              Price
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="price"
                type="number"
                name="price"
                placeholder="Masukkan harga tiket masuk"
                required
              />
              <Icon
                path={mdiHeart}
                size={1}
                color="red"
                className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"
              />
            </div>
          </div>
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="idKecamatan"
            >
              Kecamatan
            </label>
            <div className="relative">
              <select
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="idKecamatan"
                name="idKecamatan"
                placeholder="Masukkan harga tiket masuk"
                required
                defaultValue={0}
              >
                <option value={0} disabled>
                  Pilih Kecamatan
                </option>
                {kecamatan.map((item, index) => (
                  <option key={index} value={item.id}>
                    {item.nama}
                  </option>
                ))}
              </select>
              <Icon
                path={mdiHeart}
                size={1}
                color="red"
                className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"
              />
            </div>
          </div>
          <div className="mt-5 relative flex flex-col text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
            <nav className="flex min-w-[240px] flex-col gap-1 p-2 font-sans text-base font-normal text-blue-gray-700">
              <h2 className=" font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                Fasilitas
              </h2>
              <div className="flex flex-col justify-start">
                {fasilitas.map((item, index) => (
                  <div
                    role="button"
                    className="flex items-center w-full p-0 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                    key={index}
                  >
                    <label
                      htmlFor={item.id}
                      className="flex items-center w-full px-3 py-2 cursor-pointer"
                    >
                      <div className="grid mr-3 place-items-center">
                        <div className="inline-flex items-center">
                          <label
                            className="relative flex items-center p-0 rounded-full cursor-pointer"
                            htmlFor={item.id}
                          > 
                            <input
                              id={item.id}
                              type="checkbox"
                              className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-0"
                              name={item.id}
                              value={"true"}
                            />
                            <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-3.5 w-3.5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                stroke="currentColor"
                                strokeWidth="1"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                ></path>
                              </svg>
                            </span>
                          </label>
                        </div>
                      </div>
                      <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                        {item.name}
                      </p>
                    </label>
                  </div>
                ))}
              </div>
            </nav>
          </div>
        </div>
        <div className="flex justify-end gap-3">

        <CancelButton />
        <LoginButton />
        </div>
        <div className="flex h-8 items-end space-x-1">
          {code !== undefined && (
            <>
              <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
              <p aria-live="polite" className="text-sm text-red-500">
                {code.message}
              </p>
            </>
          )}
        </div>
      </div>
    </form>
  );
}

function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      className="mt-4 bg-green-500 hover:bg-green-600 w-[15%] justify-center focus-visible:outline-green-500 active:bg-green-600"
      aria-disabled={pending}
    >
      Simpan
    </Button>
  );
}

function CancelButton() {
  return (
    <Link
      href="/dashboard/hotel"
      className="flex h-10 items-center rounded-lg px-4 text-sm font-medium text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500 active:bg-red-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50 mt-4 bg-red-500 hover:bg-red-600 w-[15%] justify-center"
    >
      Cancel{" "}
    </Link>
  );
}
