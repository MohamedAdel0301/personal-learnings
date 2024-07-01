import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "components/header/Header";
import Footer from "components/Footer";
import Container from "components/Container";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  fallback: ["sans-serif"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Project Evento",
  description: "Browse more than 10,000 events",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} overflow-y-scroll bg-gray-950 text-white`}
      >
        <Container>
          <Header />
          {children}
          <Footer />
        </Container>
      </body>
    </html>
  );
}
