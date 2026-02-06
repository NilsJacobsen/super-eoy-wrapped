import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/header";
import { SuperDataProvider } from "@/components/superDataProvider";
import Footer from "@/components/footer";

const universalSans = localFont({
  src: "../public/UniversalSansGX-Medium (1).ttf",
  variable: "--font-universal-sans",
  display: "swap",
});

const polySansBrand = localFont({
  src: "../public/PolySans-Neutral.otf",
  variable: "--font-poly-sans-brand",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Super EOY Wrapped 2026",
    template: "%s · Super EOY Wrapped 2026",
  },
  description:
    "Super's End of Year Wrapped 2026. A personalized recap of your work, insights, and impact.",
  applicationName: "Super EOY Wrapped 2026",
  metadataBase: new URL("https://super.work"),
  openGraph: {
    title: "Super EOY Wrapped 2026",
    description:
      "Super's End of Year Wrapped 2026. A personalized recap of your work, insights, and impact.",
    type: "website",
    url: "/",
    siteName: "Super EOY Wrapped 2026",
  },
  twitter: {
    card: "summary_large_image",
    title: "Super EOY Wrapped 2026",
    description:
      "Super's End of Year Wrapped 2026. A personalized recap of your work, insights, and impact.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${universalSans.variable} ${polySansBrand.variable} antialiased min-h-screen`}>
        <SuperDataProvider>
          <Header />
          <div className="h-screen w-full max-w-4xl mx-auto flex flex-col items-center justify-center px-4 py-16">
            {children}
          </div>
          <Footer />
        </SuperDataProvider>
      </body>
    </html>
  );
}
