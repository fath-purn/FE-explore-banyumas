"use client";

import { signIn, signUp } from "@/app/utils/auth";
import {
  POSTWISATA,
  UPDATEWISATA,
  POSTHOTEL,
  UPDATEHOTEL,
  POSTULASAN,
  UPDATEULASAN,
  POSTKECAMATAN,
  UPDATEKECAMATAN,
} from "@/app/utils/method";
import { redirect } from "next/navigation";

export async function authenticate(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    const code = await signIn("credentials", Object.fromEntries(formData));

    if (code && code.success === true) {
      window.location.href = "/dashboard";
      return code;
    }

    if (code && code.success === false) {
      return code;
    }
  } catch (error) {
    console.error("Error during authentication:", error);
    return { success: false, message: "Authentication failed" };
  }
}

export async function register(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    const code = await signUp("credentials", Object.fromEntries(formData));

    if (code && code.success === true) {
      window.location.href = "/dashboard";
      return code;
    }

    if (code && code.success === false) {
      return code;
    }
  } catch (error) {
    console.error("Error during authentication:", error);
    return { success: false, message: "Authentication failed" };
  }
}

export async function SignOut() {
  try {
    localStorage.setItem("token", 'hehew');
    window.location.href = "/login";
  } catch (error) {
    return { success: false, message: "Authentication failed" };
  }
}

export async function formSubmitHandler(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    const code = await POSTWISATA("POSTWISATA", Object.fromEntries(formData));

    if (code && code.success === true) {
      window.location.href = "/dashboard/wisata";
      return code;
    }

    if (code && code.success === false) {
      return code;
    } else {
      return {
        success: false,
        message: "Gagal menambahkan wisata tolong cek field kembali",
      };
    }
  } catch (error) {
    return { success: false, message: "Form submission failed" };
  }
}

export async function formUpdateHandler(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    const code = await UPDATEWISATA("POSTWISATA", Object.fromEntries(formData));

    if (code && code.success === true) {
      window.location.href = "/dashboard/wisata";
      return code;
    }

    if (code && code.success === false) {
      return code;
    } else {
      return {
        success: false,
        message: "Gagal Update wisata tolong cek field kembali",
      };
    }
  } catch (error) {
    return { success: false, message: "Form submission failed" };
  }
}

export async function formDeleteHandler({
  id,
  params,
}: {
  id: number;
  params: string;
}) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/${params}/${id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    const code = await res.json();

    if (code && code.success === false) {
      window.location.href = `/dashboard/${params}`;
      return code;
    } else {
      return {
        success: false,
        message: "Gagal Update wisata tolong cek field kembali",
      };
    }
  } catch (error) {
    return { success: false, message: "Form submission failed" };
  }
}

export async function formSubmitHandlerHotel(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    const code = await POSTHOTEL("POSTHOTEL", Object.fromEntries(formData));

    if (code && code.success === true) {
      window.location.href = "/dashboard/hotel";
      return code;
    }

    if (code && code.success === false) {
      return code;
    } else {
      return {
        success: false,
        message: "Gagal menambahkan wisata tolong cek field kembali",
      };
    }
  } catch (error) {
    return { success: false, message: "Form submission failed" };
  }
}

export async function formUpdateHandlerHotel(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    const code = await UPDATEHOTEL("UPDATEHOTEL", Object.fromEntries(formData));

    if (code && code.success === true) {
      window.location.href = "/dashboard/hotel";
      return code;
    }

    if (code && code.success === false) {
      return code;
    } else {
      return {
        success: false,
        message: "Gagal Update wisata tolong cek field kembali",
      };
    }
  } catch (error) {
    return { success: false, message: "Form submission failed" };
  }
}

export async function formSubmitHandlerUlasan(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    const code = await POSTULASAN("POSTULASAN", Object.fromEntries(formData));

    if (code && code.success === true) {
      window.location.href = "/dashboard/ulasan";
      return code;
    }

    if (code && code.success === false) {
      return code;
    } else {
      return {
        success: false,
        message: "Gagal menambahkan wisata tolong cek field kembali",
      };
    }
  } catch (error) {
    return { success: false, message: "Form submission failed" };
  }
}

export async function formUpdateHandlerUlasan(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    const code = await UPDATEULASAN(
      "UPDATEULASAN",
      Object.fromEntries(formData)
    );

    if (code && code.success === true) {
      window.location.href = "/dashboard/ulasan";
      return code;
    }

    if (code && code.success === false) {
      return code;
    } else {
      return {
        success: false,
        message: "Gagal Update wisata tolong cek field kembali",
      };
    }
  } catch (error) {
    return { success: false, message: "Form submission failed" };
  }
}

export async function formSubmitHandlerKecamatan(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    const code = await POSTKECAMATAN(
      "POSTKECAMATAN",
      Object.fromEntries(formData)
    );

    if (code && code.status === true) {
      window.location.href = "/dashboard/kecamatan";
      return code;
    }

    if (code && code.status === false) {
      return code;
    } else {
      return {
        success: false,
        message: "Gagal menambahkan kecamatan tolong cek field kembali",
      };
    }
  } catch (error) {
    return { success: false, message: "Form submission failed" };
  }
}

export async function formUpdateHandlerKecamatan(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    const code = await UPDATEKECAMATAN(
      "UPDATEKECAMATAN",
      Object.fromEntries(formData)
    );

    if (code && code.status === true) {
      window.location.href = "/dashboard/kecamatan";
      return code;
    }

    if (code && code.success === false) {
      return code;
    } else {
      return {
        success: false,
        message: "Gagal Update kecamatan tolong cek field kembali",
      };
    }
  } catch (error) {
    return { success: false, message: "Form submission failed" };
  }
}
