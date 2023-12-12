import Form from "@/app/ui/admin/ulasan/form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create wisata",
};

export default async function Page() {
  return (
    <main>
      <Form />
    </main>
  );
}
