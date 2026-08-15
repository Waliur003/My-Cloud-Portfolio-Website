import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Waliur R Sun | Cloud Engineering & Cloud Security",
  description: "Cloud Engineering and Cloud Security portfolio showcasing AWS, Terraform, Kubernetes, DevSecOps, serverless, security automation, and AI cloud projects.",
  keywords: ["Waliur R Sun", "Cloud Engineering", "Cloud Security", "AWS", "Terraform", "Kubernetes", "DevSecOps", "AI Cloud Security"],
  authors: [{ name: "Waliur R Sun" }],
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    title: "Waliur R Sun | Cloud Engineering & Cloud Security",
    description: "AWS infrastructure, Terraform, Kubernetes, DevSecOps, cloud security, and AI cloud projects.",
    type: "website",
  },
  twitter: { card: "summary", title: "Waliur R Sun | Cloud Engineering & Cloud Security", description: "Secure, scalable cloud infrastructure and cloud-security projects." },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Waliur R Sun",
  url: "https://github.com/Waliur003",
  sameAs: ["https://github.com/Waliur003", "https://www.linkedin.com/in/waliur-r-sun-22762a31a/"],
  alumniOf: { "@type": "CollegeOrUniversity", name: "The City College of New York" },
  knowsAbout: ["AWS", "Cloud Engineering", "Cloud Security", "Terraform", "Kubernetes", "DevSecOps", "AI Cloud Security"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </body>
    </html>
  );
}
