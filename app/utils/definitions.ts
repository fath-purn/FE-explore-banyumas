// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// For simplicity of teaching, we're manually defining these types.
// However, these types are generated automatically if you're using an ORM such as Prisma.
export type User = {
  username: string;
  password: string;
};

export type Customer = {
  id: string;
  name: string;
  email: string;
  image_url: string;
};

export type Invoice = {
  id: string;
  customer_id: string;
  amount: number;
  date: string;
  // In TypeScript, this is called a string union type.
  // It means that the "status" property can only be one of the two strings: 'pending' or 'paid'.
  status: 'pending' | 'paid';
};

export type Revenue = {
  month: string;
  revenue: number;
};

export type LatestInvoice = {
  id: string;
  name: string;
  image_url: string;
  email: string;
  amount: string;
};

// The database returns a number for amount, but we later format it to a string with the formatCurrency function
export type LatestInvoiceRaw = Omit<LatestInvoice, 'amount'> & {
  amount: number;
};

export type InvoicesTable = {
  id: string;
  customer_id: string;
  name: string;
  email: string;
  image_url: string;
  date: string;
  amount: number;
  status: 'pending' | 'paid';
};

export type CustomersTable = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_invoices: number;
  total_pending: number;
  total_paid: number;
};

export type FormattedCustomersTable = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_invoices: number;
  total_pending: string;
  total_paid: string;
};

export type CustomerField = {
  id: string;
  name: string;
};

export type InvoiceForm = {
  id: string;
  customer_id: string;
  amount: number;
  status: 'pending' | 'paid';
};

export type PageLimitSearch = {
  currentPage?: number;
  limit?: number;
  search?: string;
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

export type Kecamatan = {
  id: number;
  nama: string;
  createdAt: string;
  updatedAt: string;
  jumlah_hotel: number;
  jumlah_wisata: number;
}

export type Ulasan = {
  id: number;
  nama: string;
  ulasan: string;
  createdAt: string;
  updatedAt: string;
  hotelId: number;
  wisataId: number;
  hotel?: string;
  wisata?: string;
}