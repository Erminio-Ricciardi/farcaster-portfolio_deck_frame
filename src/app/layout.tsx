import "./globals.css";

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
};

import { League_Gothic } from "next/font/google";

const league_gothic = League_Gothic({ subsets: ["latin"], variable: "--font-league_gothic" });

import locaFont from "next/font/local";

const integrity_illusion = locaFont({
  src: "./IntegrityIllusion.woff2",
  variable: "--font-integrity_illusion",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg_camaleonte ${league_gothic.className} ${integrity_illusion.variable} league_gothic`}>
        {children}
      </body>
    </html>
  );
}
