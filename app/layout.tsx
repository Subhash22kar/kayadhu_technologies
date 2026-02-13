import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/theme-provider";
import { Toaster } from "../components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Kayadhu Technologies - Master the Future of Tech",
    template: "%s | Kayadhu Technologies",
  },
  description: "Premier institute for Full Stack Development, DevOps, and Data Structures & Algorithms. Join Kayadhu Technologies today.",
  keywords: ["Full Stack", "DevOps", "DSA", "Web Development", "Coding Classes", "Pune"],
  authors: [{ name: "Kayadhu Technologies" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
