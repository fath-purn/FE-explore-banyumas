"use client";

import { LogoFull } from "@/app/ui/svg-image";
import { setCookiesToken, getCookiesToken } from "@/app/utils/cookies";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();

    const { username, password } = e.currentTarget;

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username.value,
        password: password.value,
      }),
    });
    console.log(res);

    if (res.ok) {
      const user = await res.json();
      console.log(user.data);
      setCookiesToken(user.data);

      setLoading(false);
      router.push("/dashboard");
    }

    if (!res.ok) {
      const error = await res.json();
      setError(true);
      setLoading(false);
      console.log(error);
    }

    const cookiesToken = await getCookiesToken();
    if (cookiesToken) {
      console.log(cookiesToken.value, "ini token");
    }
  };

  return (
    <div className="">
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <div className="flex flex-col items-center justify-center w-full max-w-sm px-4 py-8 bg-white rounded-md shadow-md">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gradient-to-tr from-blue-500 to-blue-600">
            <LogoFull className="w-10 h-10 text-white" />
          </div>
          <div className="w-full">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="flex flex-col space-y-1">
                <label
                  htmlFor="username"
                  className="text-sm font-medium text-gray-700"
                >
                  username address
                </label>
                <input
                  id="username"
                  name="username"
                  autoComplete="off"
                  required
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  type="text"
                />
              </div>
              <div className="flex flex-col space-y-1">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                </div>
                <input
                  id="password"
                  name="password"
                  autoComplete="off"
                  required
                  type="password"
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  onClick={() => handleSubmit}
                >
                  {loading ? "Loading..." : "Sign in"}
                </button>
              </div>
            </form>
            {error && (
              <div className="text-red-400 mt-3 text-sm">
                <p>*Masukkan username dan password yang benar</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
