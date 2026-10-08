import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { legalDocs } from "@/lib/legal";

const doc = legalDocs["privacy-policy"];

export const metadata: Metadata = {
  title: doc.metaTitle,
  description: doc.metaDescription,
  alternates: { canonical: "/privacy-policy" },
  openGraph: { url: "/privacy-policy", title: doc.metaTitle, description: doc.metaDescription },
};

export default function PrivacyPolicyPage() {
  return <LegalPage doc={doc} />;
}
