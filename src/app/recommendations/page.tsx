import type { Metadata } from "next";
import RecommendationSection from "@/components/RecommendationSection";
import PeopleSummary from "@/components/PeopleSummary";

export const metadata: Metadata = {
  title: "Recommendations | Sanjay Dharan",
  description:
    "What colleagues, managers and collaborators say about working with Sanjay Dharan.",
};

export default function RecommendationsPage() {
  return (
    <>
      <div className="pt-14 sm:pt-16 md:pt-[68px]" />
      <RecommendationSection />
      <PeopleSummary />
    </>
  );
}
