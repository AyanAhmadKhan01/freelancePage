import { Montserrat, Inter} from "next/font/google"
import "./globals.css";
import { ThemeProvider } from "./themeProvider";
import Script from "next/script";


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
  openGraph: {
    title: "Mvp Fast - Website Development Agency in Bangalore",
    description:
      "We build fast, scalable, modern websites using React, Next.js, Node.js, Prisma, MongoDB, PostgreSQL, AWS & more.",
    url: "https://mvpfast.com/",
    images: [
      {
        url: "https://res.cloudinary.com/dt5qoqw6u/image/upload/v1758294633/mkqetfpr21r7eovalpwx.png",
        alt: "Mvp Fast Preview",
      },
    ],
  },
  alternates: {
    canonical: "https://mvpfast.com/",
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
           <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-BWSNNCG0B7"
        />
        <Script id="gtag-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-BWSNNCG0B7', {
            page_path: window.location.pathname,
          });
        `}</Script>
        {children}
        </ThemeProvider>
      </body>
      
    </html>
  );
}
