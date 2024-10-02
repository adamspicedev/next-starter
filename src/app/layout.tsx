import type { Metadata } from "next";
import { Suspense } from "react";

import Providers from "@/components/providers";

import "./globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📦</text></svg>"
      />
      <body className="h-screen w-screen">
        <Providers>
          <main className="flex-grow overflow-auto">
            <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
          </main>
        </Providers>
      </body>
    </html>
  );
}
