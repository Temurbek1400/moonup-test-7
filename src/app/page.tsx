import { Metadata } from "next";
import { redirect } from "next/navigation";

export default function Home() {
  redirect("/main");
}

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};