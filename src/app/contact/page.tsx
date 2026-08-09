import type { Metadata } from "next";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Contact | Sanjay Dharan",
  description:
    "Get in touch with Sanjay Dharan — Associate Software Engineer & Data Analyst based in Chennai, India.",
};

export default function ContactPage() {
  return (
    <>
      <div className="pt-14 sm:pt-16 md:pt-[68px]" />
      <ContactSection />
    </>
  );
}
