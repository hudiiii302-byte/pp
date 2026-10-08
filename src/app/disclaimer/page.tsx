import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { legalDocs } from "@/lib/legal";

const doc = legalDocs.disclaimer;

export const metadata: Metadata = {
  title: doc.metaTitle,
  description: doc.metaDescription,
  alternates: { canonical: "/disclaimer" },
  openGraph: { url: "/disclaimer", title: doc.metaTitle, description: doc.metaDescription },
};

export default function DisclaimerPage() {
  return <LegalPage doc={doc} />;
}
