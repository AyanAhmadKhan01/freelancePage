import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("@/components/ui/navbar"), {ssr: true})
const Hero = dynamic(() => import("@/components/ui/hero"), {ssr: true})
const Whychooseus = dynamic(() => import("@/components/ui/whychooseus"), {ssr: true})
const Service = dynamic(() => import("@/components/ui/service"), {ssr: true})
const Stack = dynamic(() => import("@/components/ui/stack"), {ssr: true})
const Faq = dynamic(() => import("@/components/ui/faq"), {ssr: true})
const BookNow = dynamic(() => import("@/components/ui/booknow"), {ssr: true})
const Footer = dynamic(() => import("@/components/ui/footer"), {ssr: true})

export default function Home() {
  return (
    <>
    <div className="m-auto max-w-[1500px] w-[100%]">
    <Navbar/>
    <Hero/>
    <Whychooseus/>
    <Service/>
    <Stack/>
    <Faq/>
    <BookNow/>
    <Footer/>
    </div>
    </>
  );
}
