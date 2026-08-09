import type { Metadata } from "next";
import "@fontsource/space-grotesk/400.css";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/600.css";
import "@fontsource/space-grotesk/700.css";
import "@fontsource/dm-sans/300.css";
import "@fontsource/dm-sans/400.css";
import "@fontsource/dm-sans/500.css";
import "@fontsource/dm-sans/700.css";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  metadataBase: new URL("https://sanjay-dharan.netlify.app"),
  title: "Sanjay Dharan | Data Analyst & Software Engineer",
  description:
    "Portfolio of Sanjay Dharan — Associate Software Engineer and Data Analyst specialising in SQL, Python, BigQuery, AI automation, analytics and intelligent software systems.",
  keywords: [
    "Sanjay Dharan",
    "Data Analyst",
    "Software Engineer",
    "SQL",
    "Python",
    "BigQuery",
    "AI Automation",
    "Chennai",
  ],
  authors: [{ name: "Sanjay Dharan" }],
  openGraph: {
    title: "Sanjay Dharan | Data Analyst & Software Engineer",
    description:
      "Data × Software × AI × Automation. Turning complex data into decisions.",
    url: "https://sanjay-dharan.netlify.app",
    siteName: "Sanjay Dharan",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sanjay Dharan | Data Analyst & Software Engineer",
    description: "Data × Software × AI × Automation.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-ink text-paper font-body antialiased">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <ScrollProgress />
        <CustomCursor />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
