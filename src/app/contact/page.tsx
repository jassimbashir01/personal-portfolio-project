import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact | Jassim Bashir",
  description:
    "Get in touch with Jassim Bashir — full-stack developer building modern, scalable web applications. Reach out via Email or LinkedIn.",
};

export default function Page() {
  return <ContactClient />;
}