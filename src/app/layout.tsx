import type { Metadata } from "next";
import { Montserrat, Inter} from "next/font/google"
import "./globals.css";
import { ThemeProvider } from "./themeProvider";



const montserrat = Montserrat({
  variable: "--font-heading",
  subsets: ["latin"],
})

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
})


export const metadata: Metadata = {
  title: "WeBuild",
  description: "Get Your MVP Built Fast and Scalable",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"  suppressHydrationWarning>
      <body
          className={`${montserrat.variable} ${inter.variable} antialiased`}
      >
      
        <ThemeProvider
        attribute={"class"}
        defaultTheme={'dark'}
        enableSystem
        disableTransitionOnChange
        >
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
