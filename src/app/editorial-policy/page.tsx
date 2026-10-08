import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { legalDocs } from "@/lib/legal";

const doc = legalDocs["editorial-policy"];

export const metadata: Metadata = {
  title: doc.metaTitle,
  description: doc.metaDescription,
  alternates: { canonical: "/editorial-policy" },
  openGraph: { url: "/editorial-policy", title: doc.metaTitle, description: doc.metaDescription },
};

export default function EditorialPolicyPage() {
  return <LegalPage doc={doc} />;
}
