import {z} from 'zod';

export const wisata = z.object({
    nama: z.string().min(3),
    deskripsi: z.string().min(3),
    alamat: z.string().min(3),
    maps: z.string().min(100),
    price: z.number().positive(),
    idKecamatan: z.number().positive(),
    jarak: z.number().positive(),
    buka: z.string().min(3),
    tutup: z.string().min(3),
    akomodasi: z.number().min(3),
    kolam: z.boolean(),
    parkir: z.boolean(),
    tiket: z.number(),
});

export const hotel = z.object({
    nama: z.string().min(3),
    deskripsi: z.string().min(3),
    alamat: z.string().min(3),
    maps: z.string().min(100),
    price: z.number().positive(),
    idKecamatan: z.number().positive(),
    wifi: z.boolean(),
    bar: z.boolean(),
    roomService: z.boolean(),
    breakfast: z.boolean(),
    restaurant: z.boolean(),
    pool: z.boolean(),
    parkir: z.boolean(),
    bathrom: z.boolean(),
    bedroom: z.boolean(),
});

export const ulasan = z.object({
    nama: z.string().min(3),
    ulasan: z.string().min(3),
});

export const kecamatan = z.object({
    nama: z.string().min(3),
});
