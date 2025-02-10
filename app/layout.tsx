// app/layout.tsx
import "./globals.css";
import { Poppins } from "next/font/google";
import ClientProviders from "./ClientProviders";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] });

export const metadata = {
  title: "Project_A",
  description: "Transparent Trend Community",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={`${poppins.className} bg-white text-gray-800`}>
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
