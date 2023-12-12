import Form from "@/app/ui/admin/hotel/form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create hotel",
};

export default async function Page() {
  return (
    <main>
      <Form />
    </main>
  );
}
