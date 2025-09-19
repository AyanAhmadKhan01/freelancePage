import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

export default function Booknow() {
  return (
    <>
    
      <div id="book" className="scroll-mt-35 border-2 mx-5 bg-primary p-4 rounded-t-xl">
  <div className="relative h-full bg-black m-6 rounded-4xl overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-white/8 via-transparent to-white/5" />
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_150%_100%_at_50%_50%,rgba(132,204,22,0.15),transparent_70%)]" />
    <div className="absolute inset-0 bg-gradient-to-t from-white/8 via-transparent to-transparent" />

  
    <div className="absolute top-[40%] left-[10%] w-[150px] h-[150px] bg-[rgba(255,255,255,0.09)] rounded-full blur-3xl" />
    <div className="absolute bottom-[15%] right-[15%] w-[200px] h-[200px] bg-[rgba(132,204,22,0.35)] rounded-full blur-3xl" />
    <div className="absolute top-[10%] right-[50%] w-[120px] h-[120px] bg-[rgba(132,204,22,0.3)] rounded-full blur-3xl" />
    <div className="absolute bottom-[70%] left-[60%] w-[180px] h-[180px] bg-[rgba(132,204,22,0.25)] rounded-full blur-3xl" />

    <div className="absolute inset-0 bg-black/55 backdrop-blur-[8px]" />

    
    <div className="absolute inset-0"
         style={{
           background:
             "repeating-linear-gradient(to right, rgba(132,204,22,0.08) 0 60px, transparent 60px 120px), " +
             "repeating-linear-gradient(to bottom, rgba(132,204,22,0.08) 0 60px, transparent 60px 120px)",
           maskImage: "radial-gradient(ellipse 80% 50% at 50% 0%, #000 60%, transparent 100%)",
           WebkitMaskImage: "radial-gradient(ellipse 80% 50% at 50% 0%, #000 60%, transparent 100%)"
         }}
    />

    <div className="absolute top-5 right-5">
      <Image src="/Keyboard-Asterisk-1--Streamline-Freehand.svg" width={50} height={50} alt="decor" />
    </div>
    <div className="absolute bottom-5 left-5">
      <Image src="/Keyboard-Asterisk-1--Streamline-Freehand.svg" width={50} height={50} alt="decor" />
    </div>

  
    <div className="flex flex-col h-[700px] justify-center items-center relative z-10 px-6">
      <h1 className="text-5xl text-white text-center font-extrabold leading-tight">
        Get Your MVP Built <br /> Fast and Scalable
      </h1>
      <Link href={'https://calendly.com/ayanahmadkhan042/30min'}>
       <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.8 }}
                className="bg-primary p-2 sm:p-3 rounded-2xl xl:rounded-3xl mt-5 border-b-6 xl:border-b-8 border-r-3 xl:border-r-4 shadow-2xl cursor-pointer text-sm xl:text-base"
           
         >
     
        Book Now
      </motion.div>
      </Link>
    </div>
  </div>
</div>

    </>
  );
}
