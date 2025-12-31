'use client'
import { motion } from "framer-motion"
import Link from "next/link"

export default function HeroFive() {
    return(
        <>
        <div className="h-[100vh] flex items-center justify-center px-6 md:px-12 bg-neutral-100 dark:bg-neutral-900 relative overflow-hidden">
            
            {/* Harsh grid lines */}
            <div className="absolute inset-0">
                <div className="w-full h-full" style={{
                    backgroundImage: `
                        linear-gradient(rgb(0,0,0) 2px, transparent 2px),
                        linear-gradient(90deg, rgb(0,0,0) 2px, transparent 2px)
                    `,
                    backgroundSize: '100px 100px',
                    opacity: 0.05
                }} />
            </div>

            {/* Brutal geometric blocks */}
            <div className="absolute top-10 left-10 w-40 h-40 bg-black dark:bg-white" />
            <div className="absolute top-20 right-20 w-24 h-60 bg-red-600" />
            <div className="absolute bottom-20 left-1/4 w-60 h-24 bg-yellow-400" />
            <div className="absolute bottom-40 right-1/3 w-32 h-32 border-8 border-black dark:border-white" />
            
            {/* Harsh noise texture overlay */}
            <div className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
            }} />

            <div className="max-w-7xl w-full relative z-10">
                
                {/* Brutal Badge */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                    className="mb-8"
                >
                    <div className="inline-flex items-center gap-4 border-4 border-black dark:border-white p-4 bg-white dark:bg-black">
                        <div className="w-4 h-4 bg-red-600" />
                        <span className="font-mono text-xs font-bold tracking-[0.3em] uppercase text-black dark:text-white">
                            ⚠ EXPERIMENTAL
                        </span>
                        <div className="w-4 h-4 bg-yellow-400" />
                    </div>
                </motion.div>

                {/* Chaotic Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-8 relative"
                >
                    {/* Background text layers */}
                    <div className="absolute -top-4 -left-4 text-9xl font-black text-red-600 opacity-20 select-none pointer-events-none">
                        BRUTAL
                    </div>
                    
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none text-black dark:text-white mb-2 relative z-10">
                        HERO SECTION - 5
                    </h1>
                    
                    <div className="flex items-center gap-4 mt-6">
                        <div className="h-3 w-20 bg-black dark:bg-white" />
                        <motion.h2
                            animate={{ 
                                rotate: [0, -2, 2, -1, 1, 0],
                            }}
                            transition={{ 
                                duration: 0.5, 
                                repeat: Infinity,
                                repeatDelay: 3
                            }}
                            className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight transform -skew-y-2 bg-black dark:bg-white text-white dark:text-black px-6 py-2 inline-block border-4 border-red-600"
                        >
                            BRUTALIST
                        </motion.h2>
                        <div className="h-3 w-3 bg-red-600" />
                    </div>

                    {/* Overlapping layers */}
                    <div className="absolute -bottom-8 right-0 w-40 h-40 border-8 border-yellow-400 opacity-30 -z-10" />
                </motion.div>

                {/* Raw Description */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="mb-12 max-w-3xl"
                >
                    <div className="border-l-8 border-black dark:border-white pl-6 py-4 bg-white dark:bg-black">
                        <p className="text-lg md:text-2xl font-bold leading-tight text-black dark:text-white font-mono">
                            RAW_TYPOGRAPHY // HARSH_CONTRAST // UNCONVENTIONAL_LAYOUTS
                        </p>
                        <p className="text-base md:text-lg mt-4 text-neutral-700 dark:text-neutral-300 font-mono">
                            &gt; Breaking conventional design rules with bold geometric shapes, 
                            stark typography, and unapologetic visual elements. No compromises.
                        </p>
                    </div>
                </motion.div>

                {/* Brutal CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="flex flex-wrap gap-6 mb-16"
                >
                    <Link href="/contact">
                        <motion.button
                            whileHover={{ 
                                scale: 1.02,
                                rotate: -1
                            }}
                            whileTap={{ scale: 0.98 }}
                            className="group relative px-10 py-6 bg-black dark:bg-white text-white dark:text-black border-4 border-black dark:border-white font-black uppercase tracking-wider text-lg overflow-hidden"
                        >
                            <motion.div
                                className="absolute inset-0 bg-red-600"
                                initial={{ x: "-100%" }}
                                whileHover={{ x: 0 }}
                                transition={{ duration: 0.3 }}
                            />
                            <span className="relative z-10 flex items-center gap-3">
                                ▶ START NOW
                            </span>
                        </motion.button>
                    </Link>
                    
                    <Link href="/work">
                        <motion.button
                            whileHover={{ 
                                scale: 1.02,
                                rotate: 1
                            }}
                            whileTap={{ scale: 0.98 }}
                            className="px-10 py-6 bg-yellow-400 text-black border-4 border-black font-black uppercase tracking-wider text-lg hover:bg-white transition-colors"
                        >
                            VIEW WORK ◀
                        </motion.button>
                    </Link>

                    <motion.button
                        whileHover={{ 
                            scale: 1.02,
                            rotate: -1
                        }}
                        whileTap={{ scale: 0.98 }}
                        className="px-10 py-6 bg-white dark:bg-black text-black dark:text-white border-4 border-black dark:border-white font-black uppercase tracking-wider text-lg hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
                    >
                        ⚡ EXPLORE
                    </motion.button>
                </motion.div>

                {/* Brutal Stats Grid */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.1 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-0 border-8 border-black dark:border-white bg-white dark:bg-black"
                >
                    <motion.div 
                        whileHover={{ scale: 1.05, zIndex: 10 }}
                        className="p-6 border-4 border-black dark:border-white bg-white dark:bg-black relative group"
                    >
                        <div className="absolute inset-0 bg-red-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="relative z-10">
                            <div className="text-5xl font-black text-black dark:text-white mb-2 font-mono group-hover:text-white dark:group-hover:text-white">
                                [99]
                            </div>
                            <div className="text-xs font-bold uppercase tracking-wider text-black dark:text-white font-mono group-hover:text-white dark:group-hover:text-white">
                                PROJECTS_DONE
                            </div>
                        </div>
                    </motion.div>
                    
                    <motion.div 
                        whileHover={{ scale: 1.05, zIndex: 10 }}
                        className="p-6 border-4 border-black dark:border-white bg-yellow-400 relative group"
                    >
                        <div className="absolute inset-0 bg-black dark:bg-white opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="relative z-10">
                            <div className="text-5xl font-black text-black mb-2 font-mono group-hover:text-white dark:group-hover:text-black">
                                [A+]
                            </div>
                            <div className="text-xs font-bold uppercase tracking-wider text-black font-mono group-hover:text-white dark:group-hover:text-black">
                                QUALITY_RATE
                            </div>
                        </div>
                    </motion.div>
                    
                    <motion.div 
                        whileHover={{ scale: 1.05, zIndex: 10 }}
                        className="p-6 border-4 border-black dark:border-white bg-black dark:bg-white relative group"
                    >
                        <div className="absolute inset-0 bg-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="relative z-10">
                            <div className="text-5xl font-black text-white dark:text-black mb-2 font-mono group-hover:text-black">
                                [10K]
                            </div>
                            <div className="text-xs font-bold uppercase tracking-wider text-white dark:text-black font-mono group-hover:text-black">
                                USERS_ACTIVE
                            </div>
                        </div>
                    </motion.div>
                    
                    <motion.div 
                        whileHover={{ scale: 1.05, zIndex: 10 }}
                        className="p-6 border-4 border-black dark:border-white bg-white dark:bg-black relative group"
                    >
                        <div className="absolute inset-0 bg-red-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="relative z-10">
                            <div className="text-5xl font-black text-black dark:text-white mb-2 font-mono group-hover:text-white dark:group-hover:text-white">
                                [24/7]
                            </div>
                            <div className="text-xs font-bold uppercase tracking-wider text-black dark:text-white font-mono group-hover:text-white dark:group-hover:text-white">
                                SUPPORT_TIME
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Chaotic corner elements */}
                <motion.div
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-0 left-0 w-20 h-20 bg-red-600 -translate-x-10 -translate-y-10"
                />
                <motion.div
                    animate={{ rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-0 right-0 w-20 h-20 border-8 border-yellow-400 translate-x-10 translate-y-10"
                />
                
                {/* Stamp-like element */}
                <motion.div
                    animate={{ rotate: [0, -2, 2, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="absolute top-1/4 right-10 transform rotate-12"
                >
                    <div className="border-4 border-red-600 px-4 py-2 bg-white dark:bg-black">
                        <p className="font-black text-red-600 text-xs tracking-wider">EXPERIMENTAL</p>
                        <p className="font-black text-red-600 text-xs tracking-wider">DESIGN</p>
                    </div>
                </motion.div>
            </div>
        </div>
        </>
    )
}
