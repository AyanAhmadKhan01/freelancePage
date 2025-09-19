import { motion } from "motion/react"
import Image from "next/image"
import Link from "next/link"


export default function Hero() {
  

    return(
        <>


        <div id="home" className="flex flex-col justify-center items-center h-[80vh] pt-70 border-b-2 px-4 xl:px-0">
            <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-medium text-center xl:text-left">We Build <span className="text-primary font-extrabold">MVPs Fast</span>. We Scale Them <span className="bg-accent">Smarter</span></h1>
            <div className="w-[120px] sm:w-[160px] lg:w-[180px] xl:w-[200px] h-[8px] xl:h-[10px] bg-primary xl:mr-96"></div>
            <p className="mt-3 text-base sm:text-lg xl:text-xl text-center xl:text-left max-w-2xl xl:max-w-none">Delivering modern, high-performance web solutions with the latest technology, built to last and designed to grow</p>  
            <div className="w-[110px] sm:w-[150px] lg:w-[170px] xl:w-[190px] h-[8px] xl:h-[10px] border-b-5 bg-primary rounded-4xl"></div>
            <Link href={'https://calendly.com/ayanahmadkhan042/30min'}>
            <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.8 }}
                className="bg-primary p-2 sm:p-3 rounded-2xl xl:rounded-3xl mt-5 border-b-6 xl:border-b-8 border-r-3 xl:border-r-4 shadow-2xl cursor-pointer text-sm xl:text-base"
           
            >
                Book A Meeting
            </motion.div>
            </Link>
            <Image src={'/Cursor-Highlight-Click-1--Streamline-Freehand.svg'} width={60}  height={65} className="hidden xl:block text-amber-800 translate-x-20 -translate-y-10" alt="gg"/>
            <Image src={'/Cursor-Speed-1--Streamline-Freehand.svg'} width={50}  height={50} className="hidden xl:block text-amber-800 ml-auto -translate-x-64 -translate-y-38" alt="gg"/>

            <div className="mt-auto border-t-2 border-l-2 border-r-2 w-[90%] p-4 xl:p-6">
                <h1 className="text-sm xl:text-base">Trusted By Google, Vercel</h1>
            </div> 
        </div>

        </>
    )
}