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
  title: "Mvp Fast | Best Web Development Agency in Bangalore",
  description:
    "Mvp Fast offers full-stack website development in Bangalore. Experts in React, Next.js, Node.js, Prisma, MongoDB, AWS, and more.",
  keywords:
    "Web Development Agency Bangalore, Full Stack Development Bangalore, Next.js Developers Bangalore, React Agency India, Startup Web Agency Bangalore",
  verification: {
    google: "tdvRZe94YDHuXcrksdEvvVCSB8_z6OtNkDifOFp5gH4",
  },
  openGraph: {
    title: "Mvp Fast - Website Development Agency in Bangalore",
    description:
      "We build fast, scalable, modern websites using React, Next.js, Node.js, Prisma, MongoDB, PostgreSQL, AWS & more.",
    url: "https://mvpfast.vercel.app",
    images: [
      {
        url: "https://res.cloudinary.com/dt5qoqw6u/image/upload/v1758325540/zhqadz7p8wunxoczo9mh.png",
        alt: "Mvp Fast Preview",
      },
    ],
  },
  alternates: {
    canonical: "https://mvpfast.vercel.app",
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
