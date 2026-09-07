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


export const metadata = {
  title: "Ayan Codes | Websites That Actually Ship",
  description:
    "Ayan Codes builds fast, thoughtful websites with design, development, and hosting handled by one person in Bangalore.",
  keywords:
    "Ayan Codes, freelance web developer Bangalore, full-stack developer India, Next.js developer, React developer",
  verification: {
    google: "tdvRZe94YDHuXcrksdEvvVCSB8_z6OtNkDifOFp5gH4",
  },
  openGraph: {
    title: "Ayan Codes - Websites That Actually Ship",
    description:
      "Design, code, and hosting handled by one person. Ayan Codes builds clear, fast, modern websites for founders and small businesses.",
    url: "https://mvpfast.vercel.app",
    images: [
      {
        url: "https://res.cloudinary.com/dt5qoqw6u/image/upload/v1758325540/zhqadz7p8wunxoczo9mh.png",
        alt: "Ayan Codes website preview",
      },
    ],
  },
  alternates: {
    canonical: "https://mvpfast.vercel.app",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
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
