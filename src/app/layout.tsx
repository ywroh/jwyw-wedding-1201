import type {Metadata} from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
    title: "노용우❤김지원 결혼식에 초대합니다",
    description: "2024년 12월 1일 일요일 오후 2시",
    openGraph: {
        type: "website",
        title: "노용우❤김지원 결혼식에 초대합니다",
        description: "2024년 12월 1일 일요일 오후 2시",
        url: "https://ywroh.github.io/jwyw-wedding-1201/"
    },
    keywords: "2024년 12월 1일 일요일 오후 2시",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
