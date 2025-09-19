'use client'

import { useState, useEffect } from "react"
import { motion } from "motion/react"
import Image from "next/image"

declare global {
    interface Window {
        Calendly: any;
    }
}

export default function Hero() {
    const [show, setShow] = useState<boolean>(false)
    const [isCalendlyLoaded, setIsCalendlyLoaded] = useState<boolean>(false)

    useEffect(() => {
        const loadCalendly = () => {
            if (typeof window !== 'undefined') {
                const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')
                
                if (!existingScript) {
                    const script = document.createElement('script')
                    script.src = 'https://assets.calendly.com/assets/external/widget.js'
                    script.async = true
                    script.onload = () => setIsCalendlyLoaded(true)
                    document.head.appendChild(script)
                } else {
                    setIsCalendlyLoaded(true)
                }
            }
        }
        loadCalendly()
    }, [])

    useEffect(() => {
        if (show && isCalendlyLoaded && typeof window !== 'undefined' && window.Calendly) {
            setTimeout(() => {
                const element = document.querySelector('.calendly-inline-widget')
                if (element) {
                    window.Calendly.initInlineWidget({
                        url: 'https://calendly.com/ayanahmadkhan042/30min',
                        parentElement: element,
                        prefill: {},
                        utm: {}
                    })
                }
            }, 100)
        }
    }, [show, isCalendlyLoaded])


    return(
        <>


        <div className="flex flex-col justify-center items-center h-[80vh] pt-70 border-b-2 px-4 xl:px-0">
            <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-medium text-center xl:text-left">We Build <span className="text-primary font-extrabold">MVPs Fast</span>. We Scale Them <span className="bg-accent">Smarter</span></h1>
            <div className="w-[120px] sm:w-[160px] lg:w-[180px] xl:w-[200px] h-[8px] xl:h-[10px] bg-primary xl:mr-96"></div>
            <p className="mt-3 text-base sm:text-lg xl:text-xl text-center xl:text-left max-w-2xl xl:max-w-none">Delivering modern, high-performance web solutions with the latest technology, built to last and designed to grow</p>  
            <div className="w-[110px] sm:w-[150px] lg:w-[170px] xl:w-[190px] h-[8px] xl:h-[10px] border-b-5 bg-primary rounded-4xl"></div>
            <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.8 }}
                className="bg-primary p-2 sm:p-3 rounded-2xl xl:rounded-3xl mt-5 border-b-6 xl:border-b-8 border-r-3 xl:border-r-4 shadow-2xl cursor-pointer text-sm xl:text-base"
                onClick={() => setShow(true)}
            >
                Book A Meeting
            </motion.div>
            <Image src={'/Cursor-Highlight-Click-1--Streamline-Freehand.svg'} width={60}  height={65} className="hidden xl:block text-amber-800 translate-x-20 -translate-y-10" alt="gg"/>
            <Image src={'/Cursor-Speed-1--Streamline-Freehand.svg'} width={50}  height={50} className="hidden xl:block text-amber-800 ml-auto -translate-x-64 -translate-y-38" alt="gg"/>

            <div className="mt-auto border-t-2 border-l-2 border-r-2 w-[90%] p-4 xl:p-6">
                <h1 className="text-sm xl:text-base">Trusted By Google, Vercel</h1>
            </div> 
        </div>

     {show && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 xl:p-0">
    <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl h-[85vh] xl:h-[80vh] bg-[rgba(255,255,255,0.05)] rounded-2xl xl:rounded-3xl shadow-2xl border border-primary p-3 xl:p-4 flex flex-col">
      
      <button
        onClick={() => setShow(false)}
        className="absolute top-3 right-3 xl:top-4 xl:right-4 text-white bg-primary/30 hover:bg-primary/50 rounded-full w-8 h-8 xl:w-10 xl:h-10 flex items-center justify-center font-bold transition text-lg"
      >
        ×
      </button>
      
      <div className="flex-1 overflow-hidden mt-10 xl:mt-6">
        {isCalendlyLoaded ? (
          <div
            className="calendly-inline-widget w-full h-full rounded-xl xl:rounded-2xl"
            data-url="https://calendly.com/ayanahmadkhan042/30min"
            style={{ minWidth: '280px', height: '100%' }}
          ></div>
        ) : (
          <div className="flex items-center justify-center h-full">
            <div className="text-white text-center">
              <div className="animate-spin rounded-full h-10 w-10 xl:h-12 xl:w-12 border-b-2 border-primary mx-auto mb-4"></div>
              <p className="text-sm xl:text-base">Loading calendar...</p>
            </div>
          </div>
        )}
      </div>
    </div>
  </div>
)}


        </>
    )
}