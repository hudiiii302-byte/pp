import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { legalDocs } from "@/lib/legal";

const doc = legalDocs["terms-conditions"];

export const metadata: Metadata = {
  title: doc.metaTitle,
  description: doc.metaDescription,
  alternates: { canonical: "/terms-conditions" },
  openGraph: { url: "/terms-conditions", title: doc.metaTitle, description: doc.metaDescription },
};

export default function TermsConditionsPage() {
  return <LegalPage doc={doc} />;
}
