import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ScrollToTopButton } from "@/components/ScrollToTopButton";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Your Blog",
  description: "A personal blog about software engineering and technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
            <nav className="fixed top-4 right-4 z-50">
              <ThemeToggle />
            </nav>
            {children}
            <ScrollToTopButton />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
