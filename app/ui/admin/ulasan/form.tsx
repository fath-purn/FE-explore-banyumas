"use client";

import Icon from "@mdi/react";
import { mdiHeart } from "@mdi/js";
import { lusitana } from "@/app/ui/fonts";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import { Button } from "../button";
import { useFormState, useFormStatus } from "react-dom";
import { formSubmitHandlerUlasan } from "@/app/utils/actions";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Wisata, Hotel } from "@/app/utils/definitions";

export default function LoginForm() {
  const [code, action] = useFormState(formSubmitHandlerUlasan, undefined);
  const [wisata, setWisata] = useState<Wisata[]>([]);
  const [hotel, setHotel] = useState<Hotel[]>([]);

  const dataWisata = async () => {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/wisata");
    const data = await res.json();
    setWisata(data.data);
  };

  const dataHotel = async () => {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/hotel");
    const data = await res.json();
    setHotel(data.data);
  };

  useEffect(() => {
    dataWisata();
    dataHotel();
  }, []);

  return (
    <form action={action} className="space-y-3">
      <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
        <h1 className={`${lusitana.className} mb-3 text-2xl`}>Tambah Ulasan</h1>
        <div className="w-full">
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="nama"
            >
              Nama
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="nama"
                type="text"
                name="nama"
                placeholder="Masukkan nama anda"
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
              htmlFor="ulasan"
            >
              Ulasan
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="ulasan"
                type="text"
                name="ulasan"
                placeholder="Masukkan ulasan"
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
              htmlFor="hotelId"
            >
              Hotel
            </label>
            <div className="relative">
              <select
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="hotelId"
                name="hotelId"
                placeholder="Masukkan harga tiket masuk"
                defaultValue={0}
              >
                <option value={0}>
                  Pilih Hotel
                </option>
                {hotel.map((item, index) => (
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
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="wisataId"
            >
              Wisata
            </label>
            <div className="relative">
              <select
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="wisataId"
                name="wisataId"
                placeholder="Masukkan harga tiket masuk"
                defaultValue={0}
              >
                <option value={0}>
                  Pilih Wisata
                </option>
                {wisata.map((item, index) => (
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
        </div>
        <div className="flex flex-row gap-3 justify-end">
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
      href="/dashboard/ulasan"
      className="flex h-10 items-center rounded-lg px-4 text-sm font-medium text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500 active:bg-red-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50 mt-4 bg-red-500 hover:bg-red-600 w-[15%] justify-center"
    >
      Cancel{" "}
    </Link>
  );
}
