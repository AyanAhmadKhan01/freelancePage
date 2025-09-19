'use client'
import Silk from "@/components/Silk";
import dynamic from "next/dynamic";


const Navbar = dynamic(() => import("@/components/ui/navbar"), {ssr: true})
const Whychooseus = dynamic(() => import("@/components/ui/whychooseus"), {ssr: true})
const Service = dynamic(() => import("@/components/ui/service"), {ssr: true})
const Stack = dynamic(() => import("@/components/ui/stack"), {ssr: true})
const Faq = dynamic(() => import("@/components/ui/faq"), {ssr: false})
const BookNow = dynamic(() => import("@/components/ui/booknow"), {ssr: true})
const Footer = dynamic(() => import("@/components/ui/footer"), {ssr: true})

export default function Home() {
  return (
    <>
     <Silk 
      speed={5}
  scale={1}
  color="#1e1f1d"
  noiseIntensity={1.5}
  rotation={0}
     />
    <div className="m-auto max-w-[1500px] w-[100%]  border-l-2  border-r-2">
    <Navbar/>
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
