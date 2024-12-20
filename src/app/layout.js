import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SideNav from "@/components/SideNav";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Wingman Assignment",
  description: "Wingman Assignment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SideNav />
        <div className="ml-[50px] md:ml-[60px] w-[calc(100vw-50px)] md:w-[calc(100vw-60px)]">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
