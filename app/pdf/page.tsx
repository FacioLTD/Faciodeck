import { PdfDeck } from "@/components/pdf/PdfDeck";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Facio Investor Deck — PDF Export",
  description: "Facio Investor Presentation — Print-optimized version",
};

export default function PdfPage() {
  return <PdfDeck />;
}
