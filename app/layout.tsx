import type { Metadata } from "next";
import "./globals.css";
import { Geologica } from "next/font/google";

const geologica = Geologica({ weight: "200", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lucas Gingera",
  description: "Learn about Lucas Gingera"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geologica.className}>
      <head>
        <link rel="icon" type="image/png" href="/icon.png" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
