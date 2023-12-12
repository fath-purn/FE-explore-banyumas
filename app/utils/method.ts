import { wisata, hotel, ulasan, kecamatan } from "@/app/utils/validation";

export const POSTWISATA = async (_provider: string, data: any) => {
  const images = [data.image1, data.image2, data.image3];

  // const token = await getCookiesToken();
  // console.log(localStorage.getItem("apaansihini"), "apapapa ");
  // console.log(localStorage.getItem("token"), "kedua");

  const validasi = wisata.safeParse({
    nama: data.nama,
    deskripsi: data.deskripsi,
    alamat: data.alamat,
    maps: data.maps,
    price: Number(data.price),
    idKecamatan: Number(data.idKecamatan),
    jarak: Number(data.jarak),
    buka: data.buka,
    tutup: data.tutup,
    akomodasi: Number(data.akomodasi),
    kolam: Boolean(data.kolam),
    parkir: Boolean(data.parkir),
    tiket: Number(data.tiket),
  });

  if (validasi.success) {
    const formData = new FormData();

    formData.append("nama", data.nama);
    formData.append("deskripsi", data.deskripsi);
    formData.append("alamat", data.alamat);
    formData.append("maps", data.maps);
    formData.append("price", data.price.toString());
    formData.append("idKecamatan", data.idKecamatan.toString());
    formData.append("jarak", data.jarak ? data.jarak.toString() : "");
    formData.append("buka", data.buka || "");
    formData.append("tutup", data.tutup || "");
    formData.append(
      "akomodasi",
      data.akomodasi ? data.akomodasi.toString() : ""
    );
    JSON.stringify(data.parkir && formData.append("parkir", "true"));
    JSON.stringify(data.kolam && formData.append("kolam", "true"));
    formData.append("tiket", data.tiket ? data.tiket.toString() : "");
    
    images.forEach((image, index) => {
      formData.append(`image`, image);
    });

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/wisata`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: formData,
    });

    const dataJson = await res.json();

    if (!res) {
      return { success: false, message: "Terjadi kesalahan" };
    }
    if (res.status === 200 || res.status === 201) {
      return dataJson;
    } else {
      return dataJson;
    }
  }
};

export const UPDATEWISATA = async (_provider: string, data: any) => {
  const images = [data.image1, data.image2, data.image3];

  const validasi = wisata.safeParse({
    nama: data.nama,
    deskripsi: data.deskripsi,
    alamat: data.alamat,
    maps: data.maps,
    price: Number(data.price),
    idKecamatan: Number(data.idKecamatan),
    jarak: Number(data.jarak),
    buka: data.buka,
    tutup: data.tutup,
    akomodasi: Number(data.akomodasi),
    kolam: Boolean(data.kolam),
    parkir: Boolean(data.parkir),
    tiket: Number(data.tiket),
  });

  if (validasi.success) {
    const formData = new FormData();

    formData.append("nama", data.nama || "");
    formData.append("deskripsi", data.deskripsi || "");
    formData.append("alamat", data.alamat || "");
    formData.append("maps", data.maps || "");
    formData.append("price", data.price.toString() || "");
    formData.append("idKecamatan", data.idKecamatan.toString() || "");
    formData.append("jarak", data.jarak ? data.jarak.toString() : "");
    formData.append("buka", data.buka || "");
    formData.append("tutup", data.tutup || "");
    formData.append(
      "akomodasi",
      data.akomodasi ? data.akomodasi.toString() : ""
    );

    JSON.stringify(data.parkir && formData.append("parkir", "true"));
    JSON.stringify(data.kolam && formData.append("kolam", "true"));

    formData.append("tiket", data.tiket ? data.tiket.toString() : "");

    images.forEach((image, index) => {
      formData.append(`image`, image);
    });

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/wisata/${data.id}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: formData,
    });

    const dataJson = await res.json();

    if (!res) {
      return { success: false, message: "Terjadi kesalahan" };
    }
    if (res.status === 200 || res.status === 201) {
      return dataJson;
    } else {
      return dataJson;
    }
  } else {
    return validasi.error.stack;
  }
};

export const POSTHOTEL = async (_provider: string, data: any) => {
  const images = [data.image1, data.image2, data.image3];

  const validasi = hotel.safeParse({
    nama: data.nama,
    deskripsi: data.deskripsi,
    alamat: data.alamat,
    maps: data.maps,
    price: Number(data.price),
    idKecamatan: Number(data.idKecamatan),
    wifi: Boolean(data.wifi),
    bar: Boolean(data.bar),
    roomService: Boolean(data.roomService),
    breakfast: Boolean(data.breakfast),
    restaurant: Boolean(data.restaurant),
    pool: Boolean(data.pool),
    parkir: Boolean(data.parkir),
    bathrom: Boolean(data.bathrom),
    bedroom: Boolean(data.bedroom),
  });

  if (validasi.success) {
    const formData = new FormData();

    formData.append("nama", data.nama);
    formData.append("deskripsi", data.deskripsi);
    formData.append("alamat", data.alamat);
    formData.append("maps", data.maps);
    formData.append("price", data.price.toString());
    formData.append("idKecamatan", data.idKecamatan.toString());
    JSON.stringify(data.wifi && formData.append("wifi", "true"));
    JSON.stringify(data.bar && formData.append("bar", "true"));
    JSON.stringify(data.roomService && formData.append("roomService", "true"));
    JSON.stringify(data.breakfast && formData.append("breakfast", "true"));
    JSON.stringify(data.restaurant && formData.append("restaurant", "true"));
    JSON.stringify(data.pool && formData.append("pool", "true"));
    JSON.stringify(data.parkir && formData.append("parkir", "true"));
    JSON.stringify(data.bathrom && formData.append("bathrom", "true"));
    JSON.stringify(data.bedroom && formData.append("bedroom", "true"));

    images.forEach((image, index) => {
      formData.append(`image`, image);
    });

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/hotel`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: formData,
    });

    const dataJson = await res.json();

    if (!res) {
      return { success: false, message: "Terjadi kesalahan" };
    }
    if (res.status === 200 || res.status === 201) {
      return dataJson;
    } else {
      return dataJson;
    }
  } else {
    return validasi.error.stack;
  }
};


export const UPDATEHOTEL = async (_provider: string, data: any) => {
  const images = [data.image1, data.image2, data.image3];

  const validasi = hotel.safeParse({
    nama: data.nama,
    deskripsi: data.deskripsi,
    alamat: data.alamat,
    maps: data.maps,
    price: Number(data.price),
    idKecamatan: Number(data.idKecamatan),
    wifi: Boolean(data.wifi),
    bar: Boolean(data.bar),
    roomService: Boolean(data.roomService),
    breakfast: Boolean(data.breakfast),
    restaurant: Boolean(data.restaurant),
    pool: Boolean(data.pool),
    parkir: Boolean(data.parkir),
    bathrom: Boolean(data.bathrom),
    bedroom: Boolean(data.bedroom),
  });

  if (validasi.success) {
    const formData = new FormData();

    formData.append("nama", data.nama);
    formData.append("deskripsi", data.deskripsi);
    formData.append("alamat", data.alamat);
    formData.append("maps", data.maps);
    formData.append("price", data.price.toString());
    formData.append("idKecamatan", data.idKecamatan.toString());
    JSON.stringify(data.wifi && formData.append("wifi", "true"));
    JSON.stringify(data.bar && formData.append("bar", "true"));
    JSON.stringify(data.roomService && formData.append("roomService", "true"));
    JSON.stringify(data.breakfast && formData.append("breakfast", "true"));
    JSON.stringify(data.restaurant && formData.append("restaurant", "true"));
    JSON.stringify(data.pool && formData.append("pool", "true"));
    JSON.stringify(data.parkir && formData.append("parkir", "true"));
    JSON.stringify(data.bathrom && formData.append("bathrom", "true"));
    JSON.stringify(data.bedroom && formData.append("bedroom", "true"));


    images.forEach((image, index) => {
      formData.append(`image`, image);
    });

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/hotel/${data.id}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: formData,
    });

    const dataJson = await res.json();

    if (!res) {
      return { success: false, message: "Terjadi kesalahan" };
    }
    if (res.status === 200 || res.status === 201) {
      return dataJson;
    } else {
      return dataJson;
    }
  } else {
    return validasi.error.stack;
  }
};

export const POSTULASAN = async (_provider: string, data: any) => {
  const validasi = ulasan.safeParse({
    nama: data.nama,
    ulasan: data.ulasan,
  });
  
  if (validasi.success) {
    const formData = new FormData();

    formData.append("nama", data.nama);
    formData.append("ulasan", data.ulasan);
    data.hotelId && formData.append("hotelId", data.hotelId.toString());
    data.wisataId && formData.append("wisataId", data.wisataId.toString());

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/ulasan`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: formData,
    });

    const dataJson = await res.json();
    if (!res) {
      return { success: false, message: "Terjadi kesalahan" };
    }

    if (res.status === 200 || res.status === 201) {
      return dataJson;
    } else {
      return dataJson;
    }
  } else {
    return validasi.error.stack;
  }
};

export const UPDATEULASAN = async (_provider: string, data: any) => {
  const validasi = ulasan.safeParse({
    nama: data.nama,
    ulasan: data.ulasan,
  });
  
  if (validasi.success) {
    const formData = new FormData();

    formData.append("nama", data.nama);
    formData.append("ulasan", data.ulasan);
    data.hotelId && formData.append("hotelId", data.hotelId.toString());
    data.wisataId && formData.append("wisataId", data.wisataId.toString());

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/ulasan/${data.id}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: formData,
    });

    const dataJson = await res.json();
    
    if (!res) {
      return { success: false, message: "Terjadi kesalahan" };
    }

    if (res.status === 200 || res.status === 201) {
      return dataJson;
    } else {
      return dataJson;
    }
  } else {
    return validasi.error.stack;
  }
};

export const POSTKECAMATAN = async (_provider: string, data: any) => {
  const validasi = kecamatan.safeParse({
    nama: data.nama,
  });
  
  if (validasi.success) {
    const formData = new FormData();

    formData.append("nama", data.nama);

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/kecamatan`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: formData,
    });

    const dataJson = await res.json();
    if (!res) {
      return { success: false, message: "Terjadi kesalahan" };
    }

    if (res.status === 200 || res.status === 201) {
      return dataJson;
    } else {
      return dataJson;
    }
  } else {
    return validasi.error.stack;
  }
};

export const UPDATEKECAMATAN = async (_provider: string, data: any) => {
  const validasi = kecamatan.safeParse({
    nama: data.nama,
  });
  
  if (validasi.success) {
    const formData = new FormData();

    formData.append("nama", data.nama);

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/kecamatan/${data.id}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: formData,
    });

    const dataJson = await res.json();
    
    if (!res) {
      return { success: false, message: "Terjadi kesalahan" };
    }

    if (res.status === 200 || res.status === 201) {
      return dataJson;
    } else {
      return dataJson;
    }
  } else {
    return validasi.error.stack;
  }
};