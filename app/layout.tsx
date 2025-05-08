// import type { Metadata } from 'next'
// import './globals.css'

// export const metadata: Metadata = {
//   title: 'v0 App',
//   description: 'Created with v0',
//   generator: 'v0.dev',
// }

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode
// }>) {
//   return (
//     <html lang="en">
//       <body>{children}</body>
//     </html>
//   )
// }

//import type React from "react";
import "@/app/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { LanguageProvider } from "@/components/providers/language-provider";
import { ThemeToggle } from "@/components/theme-toggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cloudinary Image Manager",
  description: "Manage your Cloudinary images and folders",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="overflow-x-hidden"
      data-theme="dark"
    >
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        {/* <link rel="manifest" href="/site.webmanifest"></link> */}
      </head>
      <body className={`${inter.className}`} suppressHydrationWarning>
        {/* <div className="bg-white dark:bg-amber-600"> */}
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          storageKey="theme"
          disableTransitionOnChange
        >
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
        {/* </div> */}
      </body>
    </html>
  );
}
