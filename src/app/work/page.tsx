import type { Metadata } from "next";
import ProjectStory from "@/components/ProjectStory";

export const metadata: Metadata = {
  title: "Work | Sanjay Dharan",
  description:
    "Four featured projects — Vendor Audit & Compliance Dashboard, Dynamic Revenue Intelligence Dashboard, YouTube Comment Analyzer AI, and Quotation Automation Tool.",
};

export default function WorkPage() {
  return (
    <>
      <div className="pt-14 sm:pt-16 md:pt-[68px]" />
      <ProjectStory />
    </>
  );
}
