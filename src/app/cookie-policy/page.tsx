import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { legalDocs } from "@/lib/legal";

const doc = legalDocs["cookie-policy"];

export const metadata: Metadata = {
  title: doc.metaTitle,
  description: doc.metaDescription,
  alternates: { canonical: "/cookie-policy" },
  openGraph: { url: "/cookie-policy", title: doc.metaTitle, description: doc.metaDescription },
};

export default function CookiePolicyPage() {
  return <LegalPage doc={doc} />;
}
