export type PageLimitSearch = {
  currentPage?: number;
  limit?: number;
  search?: string;
  id?: string;
  destinasi?: boolean;
};

export type Wisata = {
  id: number;
  nama: string;
  deskripsi: string;
  alamat: string;
  maps: string;
  price: number;
  idKecamatan: number;
  createdAt: string;
  updatedAt: string;
  gambar: string[];
  keterangan: {
    jarak: number;
    buka: string;
    tutup: string;
    akomodasi: number;
    kolam: boolean;
    parkir: boolean;
    tiket: number;
  };
};

export type Hotel = {
  id: number;
  nama: string;
  deskripsi: string;
  alamat: string;
  maps: string;
  price: number;
  idKecamatan: number;
  createdAt: string;
  updatedAt: string;
  gambar: string[];
  fasilitas: {
    wifi: boolean;
    bar: boolean;
    roomService: boolean;
    breakfast: boolean;
    restaurant: boolean;
    pool: boolean;
    parkir: boolean;
    bathrom: boolean;
    bedroom: boolean;
  };
};

export type Makanan = {
  id: number;
  nama: string;
  deskripsi: string;
  harga: number;
  idKecamatan: number;
  created: string;
  updated: string;
  gambar: string[],
  kecamatan: string;
}

export type City = {
  city_id: string;
    province_id: string;
    province: string;
    type: string;
    city_name: string;
    postal_code: string;
}

export type Kecamatan = {
  id: number;
  nama: string;
  createdAt: string;
  updatedAt: string;
  jumlah_hotel: number;
  jumlah_wisata: number;
};

export interface Destinasi {
  id: number;
  nama: string;
  hotel: {
    total: number;
    representativeImage: string;
  };
  wisata: {
    total: number;
    representativeImage: string;
  };
}

export interface CountData {
  hotel: number;
  wisata: number;
  kecamatan: number;
  ulasan: number;
  makanan: number;
}

export interface DataWisataKecamatan {
  id: number;
  nama: string;
  wisata: Wisata[];
}

export interface Ulasan {
  id: number;
  nama: string;
  ulasan: string;
  wisataId: number | null;
  hotelId: number | null;
  createdAt: string;
  updatedAt: string;
  wisata?: string;
  Hotel?: string;
  MakananKhas?: string;
}

export interface CardWisatHotelFood {
  limit: number;
  currentPage: number;
  search: string;
  id?: string;
  destinasi?: boolean;
  pagination?: boolean;
}