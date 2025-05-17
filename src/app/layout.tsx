import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageWrapper from "@/components/PageWrapper";
import ThemeProvider from "@/components/ThemeProvider";
import Container from "@/components/layout/Container";

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-sans',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen flex flex-col bg-background text-primary antialiased">
        <ThemeProvider>
          <Navbar />
          <main className="flex-grow pt-24">
            <Container>
              <PageWrapper>
                {children}
              </PageWrapper>
            </Container>
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
