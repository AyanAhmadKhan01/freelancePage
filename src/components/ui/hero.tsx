import { motion } from "motion/react"
import Image from "next/image"
import Link from "next/link"


export default function Hero() {
  

    return(
        <>


        <div id="home" className="flex flex-col justify-center items-center h-[80vh] pt-70 border-b-2 px-4 xl:px-0">
            <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-medium text-center xl:text-left"
            >
                We Build <span className="text-primary font-extrabold">MVPs Fast</span>. We Scale Them <span className="bg-accent">Smarter</span>
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
                className="mt-3 text-base sm:text-lg xl:text-xl text-center xl:text-left max-w-2xl xl:max-w-none"
            >
                Delivering modern, high-performance web solutions with the latest technology, built to last and designed to grow
            </motion.p>
            
            <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "auto" }}
                transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
                className="w-[110px] sm:w-[150px] lg:w-[170px] xl:w-[190px] h-[8px] xl:h-[10px] border-b-5 bg-primary rounded-4xl"
            />
            
            <Link href={'https://calendly.com/ayanahmadkhan042/30min'}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 1.5, ease: "easeOut" }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.8 }}
                    className="bg-primary p-2 sm:p-3 rounded-2xl xl:rounded-3xl mt-5 border-b-6 xl:border-b-8 border-r-3 xl:border-r-4 shadow-2xl cursor-pointer text-sm xl:text-base"
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
                        className="hidden xl:block text-amber-800 translate-x-20 -translate-y-10 drop-shadow-lg" 
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
                        y: [5, 8, 4, 9, 15, 20, 12, 7, 5],
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
                className="mt-auto border-t-2 border-l-2 border-r-2 w-[90%] p-4 xl:p-6"
            >
                <motion.h1 
                    className="text-sm xl:text-base"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.3, duration: 0.5 }}
                >
                    
                </motion.h1>
            </motion.div> 
        </div>

        </>
    )
}