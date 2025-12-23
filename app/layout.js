import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Manrope } from 'next/font/google';
import SessionWrapper from "@/components/SessionWrapper";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '700', '800'],
});

export const metadata = {
  title: "LinkShortly",
  description: "LinkShortly is the ultimate tool to shorten, share, and manage your links effortlessly. Transform long URLs into short, memorable, and shareable links in seconds. Perfect for businesses, social media marketers, and anyone who wants to track clicks, improve link performance, and organize URLs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${manrope.className} antialiased`}
      >
        <SessionWrapper >
          {children}
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </SessionWrapper >
      </body>
    </html>
  );
}
