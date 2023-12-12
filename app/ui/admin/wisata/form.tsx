"use client";

import Icon from "@mdi/react";
import { mdiHeart } from "@mdi/js";
import { lusitana } from "@/app/ui/fonts";
import {
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";
import { Button } from "../button";
import { useFormState, useFormStatus } from "react-dom";
import { formSubmitHandler } from "@/app/utils/actions";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Kecamatan } from "@/app/utils/definitions";

export default function LoginForm() {
  const [code, action] = useFormState(formSubmitHandler, undefined);
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
        <h1 className={`${lusitana.className} mb-3 text-2xl`}>Tambah Wisata</h1>
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
              Nama Wisata
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="nama"
                type="text"
                name="nama"
                placeholder="Masukkan nama wisata"
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
                placeholder="Masukkan deskripsi wisata"
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
                placeholder="Masukkan alamat wisata"
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
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="jarak"
            >
              Jarak
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="jarak"
                type="number"
                name="jarak"
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
              htmlFor="buka"
            >
              Buka
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="buka"
                type="time"
                name="buka"
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
              htmlFor="tutup"
            >
              Tutup
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="tutup"
                type="time"
                name="tutup"
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
              htmlFor="akomodasi"
            >
              Akomodasi
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="akomodasi"
                type="number"
                name="akomodasi"
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
              htmlFor="kolam"
            >
              Kolam
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="kolam"
                type="checkbox"
                name="kolam"
                value={"true"}
              />
            </div>
          </div>
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="parkir"
            >
              Parkir
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="parkir"
                type="checkbox"
                name="parkir"
                value={"true"}
              />
            </div>
          </div>
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="tiket"
            >
              Tiket
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="tiket"
                type="number"
                name="tiket"
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
      href="/dashboard/wisata"
      className="flex h-10 items-center rounded-lg px-4 text-sm font-medium text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500 active:bg-red-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50 mt-4 bg-red-500 hover:bg-red-600 w-[15%] justify-center"
    >
      Cancel{" "}
    </Link>
  );
}
