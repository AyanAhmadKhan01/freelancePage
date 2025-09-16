'use client'

import { useState } from "react"
import { motion } from "motion/react"
import Image from "next/image"


export default function Hero() {
    const [show, hide] = useState<boolean>(false)


    return(
        <>


        <div className="flex flex-col justify-center items-center h-[80vh] pt-70 border-b-2">
            <h1 className="text-5xl font-medium">We Build <span className="text-primary font-extrabold">MVPs Fast</span>. We Scale Them <span className="bg-accent">Smarter</span></h1>
            <div className="w-[200px] h-[10px] bg-primary mr-96"></div>
            <p className="mt-3 text-xl">Delivering modern, high-performance web solutions with the latest technology, built to last and designed to grow</p>  <div className="w-[190px] h-[10px] border-b-5 bg-primary rounded-4xl"></div>
  <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
       className="bg-primary p-3 rounded-3xl mt-5 border-b-8 border-r-4 shadow-2xl cursor-pointer"
       onClick={() => {hide(prev => !prev);}}
        >
            Book A Meeting
            </motion.div>
              <Image src={'/Cursor-Highlight-Click-1--Streamline-Freehand.svg'} width={60}  height={65} className="text-amber-800 translate-x-20 -translate-y-10" alt="gg"/>
              <Image src={'/Cursor-Speed-1--Streamline-Freehand.svg'} width={50}  height={50} className="text-amber-800 ml-auto -translate-x-64 -translate-y-38" alt="gg"/>

             <div className="mt-auto border-t-2 border-l-2 border-r-2 w-[90%] p-6">
                <h1>Trusted By Google, Vercel</h1>
                </div> 
        </div>

       {show &&(
        <div className="flex flex-col justify-center items-center absolute top-0 left-0 w-[100%] h-[100%] bg-accent overflow-hidden">
            <div className="w-[100%] h-[80%]">
        <div className="calendly-inline-widget" data-url="https://calendly.com/ayanahmadkhan042/30min"  style={{minWidth: '320px',height:'700px'}}></div>
<script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
</div>
<button onClick={() => hide(prev => !prev)}>close</button>
</div>
       )}

        </>
    )
}