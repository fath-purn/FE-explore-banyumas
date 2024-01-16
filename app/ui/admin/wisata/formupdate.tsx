"use client";

import Icon from "@mdi/react";
import { mdiHeart } from "@mdi/js";
import { lusitana } from "@/app/ui/fonts";
import {
  AtSymbolIcon,
  KeyIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";
import { Button } from "../button";
import { useFormState, useFormStatus } from "react-dom";
import { formUpdateHandler } from "@/app/utils/actions";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface Kecamatan {
  id: number;
  nama: string;
  createdAt: string;
  updatedAt: string;
  jumlah_hotel: number;
  jumlah_wisata: number;
}

export default function FormUpdate({ id }: { id: string }) {
  const [code, action] = useFormState(formUpdateHandler, undefined);
  const [kecamatan, setKecamatan] = useState<Kecamatan[]>([]);
  const [image1, setImage1] = useState<File>();
  const [image2, setImage2] = useState<File>();
  const [image3, setImage3] = useState<File>();
  const [linkImage1, setLinkImage1] = useState<string>();
  const [linkImage2, setLinkImage2] = useState<string>();
  const [linkImage3, setLinkImage3] = useState<string>();
  const [nama, setNama] = useState<string>();
  const [deskripsi, setDeskripsi] = useState<string>();
  const [alamat, setAlamat] = useState<string>();
  const [maps, setMaps] = useState<string>();
  const [price, setPrice] = useState<number>();
  const [idKecamatan, setIdKecamatan] = useState<number>();
  const [jarak, setJarak] = useState<number>();
  const [buka, setBuka] = useState<string>();
  const [tutup, setTutup] = useState<string>("02:02");
  const [akomodasi, setAkomodasi] = useState<number>();
  const [kolam, setKolam] = useState<boolean>();
  const [parkir, setParkir] = useState<boolean>();
  const [tiket, setTiket] = useState<number>();
  const [error, setError] = useState<string>();

  const getKecamatan = async () => {
    await fetch(process.env.NEXT_PUBLIC_API_URL + "/kecamatan")
      .then((response) => response.json())
      .then((data) => setKecamatan(data.data))
      .catch((error) => setError(error.message));
  };

  const getWisata = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/wisata/${id}`);

    if (!res.ok) {
      setError("Failed to fetch data");
      throw new Error("Failed to fetch data");
    }

    const data = await res.json();

    setNama(data.data.wisataObject.nama);
    setDeskripsi(data.data.wisataObject.deskripsi);
    setAlamat(data.data.wisataObject.alamat);
    // setMaps(data.data.maps);
    setPrice(data.data.wisataObject.price);
    setIdKecamatan(data.data.wisataObject.idKecamatan);
    setLinkImage1(data.data.wisataObject.gambar[0]);
    setLinkImage2(data.data.wisataObject.gambar[1]);
    setLinkImage3(data.data.wisataObject.gambar[2]);
    setJarak(data.data.wisataObject.keterangan.jarak);
    setBuka(data.data.wisataObject.keterangan.buka.replace(".", ":"));
    setTutup(data.data.wisataObject.keterangan.tutup.replace(".", ":"));
    setAkomodasi(data.data.wisataObject.keterangan.akomodasi);
    setKolam(data.data.wisataObject.keterangan.kolam);
    setParkir(data.data.wisataObject.keterangan.parkir);
    setTiket(data.data.wisataObject.keterangan.tiket);
  };

  useEffect(() => {
    getKecamatan();
    getWisata();
  }, []);

  return (
    <form action={action} className="space-y-3">
      <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
        <h1 className={`${lusitana.className} mb-3 text-2xl`}>Edit Wisata</h1>
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
                required={linkImage1 ? false : true}
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    setLinkImage1("");
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
                required={linkImage2 ? false : true}
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    setLinkImage2("");
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
                required={linkImage3 ? false : true}
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    setLinkImage3("");
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
              {linkImage1 && (
                <span>
                  <Image
                    src={linkImage1}
                    width={100}
                    height={100}
                    alt={linkImage1}
                  />
                  <Link
                    href={linkImage1}
                    className="mt-2 text-gray-700 text-xs font-normal"
                  >
                    <p className="text-center">Gambar 1</p>
                  </Link>
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
              {linkImage2 && (
                <span>
                  <Image
                    src={linkImage2}
                    width={100}
                    height={100}
                    alt={linkImage2}
                  />
                  <Link
                    href={linkImage2}
                    className="mt-2 text-gray-700 text-xs font-normal"
                  >
                    <p className="text-center">Gambar 2</p>
                  </Link>
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
              {linkImage3 && (
                <span>
                  <Image
                    src={linkImage3}
                    width={100}
                    height={100}
                    alt={linkImage3}
                  />
                  <Link
                    href={linkImage3}
                    className="mt-2 text-gray-700 text-xs font-normal"
                  >
                    <p className="text-center">Gambar 3</p>
                  </Link>
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
                onChange={(e) => {
                  setNama(e.target.value);
                }}
                value={nama}
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
                onChange={(e) => {
                  setDeskripsi(e.target.value);
                }}
                value={deskripsi}
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
                onChange={(e) => {
                  setAlamat(e.target.value);
                }}
                value={alamat}
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
                onChange={(e) => {
                  setMaps(e.target.value);
                }}
                value={maps}
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
                onChange={(e) => {
                  setPrice(Number(e.target.value));
                }}
                value={price}
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
                defaultValue={idKecamatan}
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
                placeholder="Masukkan jarak dari pusat kota"
                required
                onChange={(e) => {
                  setJarak(Number(e.target.value));
                }}
                value={jarak}
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
                onChange={(e) => {
                  setBuka(e.target.value);
                }}
                value={buka}
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
                onChange={(e) => {
                  setTutup(e.target.value);
                }}
                value={tutup}
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
                onChange={(e) => {
                  setAkomodasi(Number(e.target.value));
                }}
                value={akomodasi}
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
                checked={kolam}
                onChange={(e) => {
                  setKolam(e.target.checked);
                }}
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
                checked={parkir}
                onChange={(e) => {
                  setParkir(e.target.checked);
                }}
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
                onChange={(e) => {
                  setTiket(Number(e.target.value));
                }}
                value={tiket}
              />
              <Icon
                path={mdiHeart}
                size={1}
                color="red"
                className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"
              />
            </div>
            <div className="hidden">
              <input
                className="hidden"
                id="id"
                type="number"
                name="id"
                defaultValue={id}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-3 justify-end">
          <CancelButton />
          <SubmitButton />
        </div>
        <div className="flex h-8 items-end space-x-1">
          {error && (
            <>
              <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
              <p aria-live="polite" className="text-sm text-red-500">
                {error}
              </p>
            </>
          )}
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

function SubmitButton() {
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
