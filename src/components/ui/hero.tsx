import { motion } from "motion/react"
import Image from "next/image"
import Link from "next/link"
import Website from "../website"

export default function Hero() {
  

    return(
        <>


        <div id="home" className="flex flex-col justify-center items-center  pt-70 border-b-2 sm:px-5 xl:px-0 ">
            <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-xl sm:text-3xl md:text-4xl xl:text-6xl font-[600] text-center xl:text-left "
            >
            We Build Your <span className="p-2 border-[rgba(255,255,255,.6)] backdrop-blur-3xl border-2 bg-[rgba(255,255,255,.05)] rounded-2xl shadow-[inset_0_10px_0px_rgba(255,255,255,.09)] ">Website Fast</span>
            </motion.h1>
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.3, ease: "easeOut" }}
                className="text-xl sm:text-3xl md:text-4xl xl:text-6xl font-[600] mt-2 xl:m-4 text-center xl:text-left"
            >
           We Keep It  <span className="p-2 border-primary  border-2 bg-[rgba(255,255,255,.05)] rounded-2xl shadow-[inset_0_10px_0px_rgba(255,255,255,.09)]">Running Smoothly</span>

            </motion.h1>
            
            <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "auto" }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                className="w-[120px] sm:w-[160px] lg:w-[180px] xl:w-[200px] h-[8px] xl:h-[10px] bg-primary xl:mr-96"
            />
            
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
                className="mt-3 text-base sm:text-lg xl:text-xl text-center max-w-2xl "
            >
                From design to development, domain to hosting, everything is set up for you in one simple, one-time package.
            </motion.p>
            
            <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "auto" }}
                transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
               
            />
            
            <Link href={'https://calendly.com/ayanahmadkhan042/30min'}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 1.5, ease: "easeOut" }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.8 }}
                    className="py-4 px-20 mt-8 border-primary backdrop-blur-3xl border-2 bg-[rgba(255,255,255,.05)] rounded-2xl shadow-[inset_0_10px_0px_rgba(255,255,255,.09)]"
                >
                    Book A Meeting
                </motion.div>
                
            </Link>
            
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 1.8, ease: "backOut" }}
            >
                
                <motion.div
                    animate={{ 
                        y: [0, -8, 3, -5, 0],
                        x: [0, 5, -3, 2, 0],
                        rotate: [0, 10, -5, 8, -3, 0],
                        scale: [1, 1.1, 0.95, 1.05, 1]
                    }}
                    transition={{ 
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    <Image 
                        src={'/Cursor-Highlight-Click-1--Streamline-Freehand.svg'} 
                        width={60}  
                        height={65} 
                        className="hidden xl:block translate-x-20 -translate-y-10 drop-shadow-lg" 
                        alt="cursor pointing to button"
                    />
                  
                </motion.div>
            </motion.div>
            
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1.2, ease: "backOut" }}
            >
                <motion.div
                    animate={{                   
                        x: [0, 40, 80, 120, 60, -10, 20, 100, 0],
                        y: [5, 8, 4, 9, 10, 12, -12, 7, 5],
                        rotate: [0, 5, -3, 8, -5, 10, -2, 4, 0],
                        scale: [1, 1.03, 0.98, 1.05, 0.97, 1.02, 1.04, 0.99, 1]
                    }}
                    transition={{ 
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut",
                        times: [0, 0.15, 0.3, 0.45, 0.6, 0.75, 0.85, 0.95, 1]
                    }}
                >
                    <Image 
                        src={'/Cursor-Speed-1--Streamline-Freehand.svg'} 
                        width={50}  
                        height={50} 
                        className="hidden xl:block text-amber-800 ml-auto -translate-x-64 -translate-y-38 drop-shadow-lg" 
                        alt="cursor reading content"
                    />
                </motion.div>
            </motion.div>



            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 2.1, ease: "easeOut" }}
                className=" w-[100%] xl:w-[90%] "
            >
               
            

                <div className="flex justify-center items-center select-none">
                      
                     {/* <Link href={'https://tibblab.vercel.app/'} target="_blank">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.8 }}      
         >
           
                <div className=" px-4 rounded-2xl cursor-pointer">
    <h1 className="text-2xl md:text-3xl font-medium tracking-tighter">Tibb <span className='tracking-wide text-[hsl(209,96%,36%)]'>Labs</span></h1>
                </div>
             
                </motion.div>
                   </Link> */}
                </div>
                  <Website/>
            </motion.div>     
         
        </div>
        </>
    )
}