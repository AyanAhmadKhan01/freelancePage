'use client'
import { motion } from "framer-motion"
import Link from "next/link"

export default function HeroSix() {
    return(
        <>
        <div className="h-[100vh] flex items-center justify-center px-6 md:px-12 lg:px-20 bg-neutral-200 dark:bg-neutral-800 relative overflow-hidden">
            
            {/* Soft background elements */}
            <div className="absolute top-20 left-20 w-96 h-96 bg-neutral-200 dark:bg-neutral-800 rounded-full opacity-50 blur-3xl" />
            <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-neutral-300 dark:bg-neutral-700 rounded-full opacity-30 blur-3xl" />

            <div className="max-w-6xl w-full relative z-10">
                
                {/* Soft Badge */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-8 inline-flex"
                >
                    <div 
                        className="px-6 py-3 bg-neutral-200 dark:bg-neutral-800 rounded-full"
                        style={{
                            boxShadow: `
                                8px 8px 16px rgba(0, 0, 0, 0.15),
                                -8px -8px 16px rgba(255, 255, 255, 0.7)
                            `
                        }}
                    >
                        <span className="text-sm font-bold tracking-wider uppercase text-neutral-700 dark:text-neutral-300">
                            ⚪ Soft UI Design
                        </span>
                    </div>
                </motion.div>

                {/* Main Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mb-8"
                >
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none text-neutral-800 dark:text-neutral-200 mb-4">
                        Hero Section - 6
                    </h1>
                    
                    <div 
                        className="inline-block px-8 py-4 bg-neutral-200 dark:bg-neutral-800 rounded-2xl"
                        style={{
                            boxShadow: `
                                inset 6px 6px 12px rgba(0, 0, 0, 0.15),
                                inset -6px -6px 12px rgba(255, 255, 255, 0.7)
                            `
                        }}
                    >
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-neutral-700 dark:text-neutral-300">
                            NEUMORPHISM
                        </h2>
                    </div>
                </motion.div>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="text-lg md:text-xl max-w-2xl font-light leading-relaxed text-neutral-600 dark:text-neutral-400 mb-12"
                >
                    Soft, extruded plastic aesthetics with subtle shadows and highlights. 
                    Creating depth through gentle elevation and smooth, tactile interfaces.
                </motion.p>

                {/* Neumorphic CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex flex-wrap gap-6 mb-16"
                >
                    <Link href="/contact">
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ 
                                scale: 0.98,
                            }}
                            className="group px-8 py-4 bg-neutral-200 dark:bg-neutral-800 rounded-2xl font-bold uppercase tracking-wider text-neutral-800 dark:text-neutral-200 transition-all"
                            style={{
                                boxShadow: `
                                    8px 8px 16px rgba(0, 0, 0, 0.15),
                                    -8px -8px 16px rgba(255, 255, 255, 0.7)
                                `
                            }}
                        >
                            Get Started
                        </motion.button>
                    </Link>
                    
                    <Link href="/work">
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="px-8 py-4 bg-neutral-200 dark:bg-neutral-800 rounded-2xl font-bold uppercase tracking-wider text-neutral-600 dark:text-neutral-400 transition-all"
                            style={{
                                boxShadow: `
                                    inset 4px 4px 8px rgba(0, 0, 0, 0.15),
                                    inset -4px -4px 8px rgba(255, 255, 255, 0.7)
                                `
                            }}
                        >
                            View Portfolio
                        </motion.button>
                    </Link>
                </motion.div>

                {/* Neumorphic Stats Cards */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6"
                >
                    <motion.div 
                        whileHover={{ scale: 1.05 }}
                        className="p-6 bg-neutral-200 dark:bg-neutral-800 rounded-3xl"
                        style={{
                            boxShadow: `
                                12px 12px 24px rgba(0, 0, 0, 0.15),
                                -12px -12px 24px rgba(255, 255, 255, 0.7)
                            `
                        }}
                    >
                        <div 
                            className="w-12 h-12 bg-neutral-200 dark:bg-neutral-800 rounded-2xl flex items-center justify-center mb-4"
                            style={{
                                boxShadow: `
                                    inset 4px 4px 8px rgba(0, 0, 0, 0.15),
                                    inset -4px -4px 8px rgba(255, 255, 255, 0.7)
                                `
                            }}
                        >
                            <svg className="w-6 h-6 text-neutral-600 dark:text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                            </svg>
                        </div>
                        <div className="text-3xl font-bold text-neutral-800 dark:text-neutral-200 mb-1">500+</div>
                        <div className="text-sm text-neutral-600 dark:text-neutral-400 uppercase tracking-wider font-semibold">Projects</div>
                    </motion.div>
                    
                    <motion.div 
                        whileHover={{ scale: 1.05 }}
                        className="p-6 bg-neutral-200 dark:bg-neutral-800 rounded-3xl"
                        style={{
                            boxShadow: `
                                12px 12px 24px rgba(0, 0, 0, 0.15),
                                -12px -12px 24px rgba(255, 255, 255, 0.7)
                            `
                        }}
                    >
                        <div 
                            className="w-12 h-12 bg-neutral-200 dark:bg-neutral-800 rounded-2xl flex items-center justify-center mb-4"
                            style={{
                                boxShadow: `
                                    inset 4px 4px 8px rgba(0, 0, 0, 0.15),
                                    inset -4px -4px 8px rgba(255, 255, 255, 0.7)
                                `
                            }}
                        >
                            <svg className="w-6 h-6 text-neutral-600 dark:text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                        </div>
                        <div className="text-3xl font-bold text-neutral-800 dark:text-neutral-200 mb-1">10K+</div>
                        <div className="text-sm text-neutral-600 dark:text-neutral-400 uppercase tracking-wider font-semibold">Users</div>
                    </motion.div>
                    
                    <motion.div 
                        whileHover={{ scale: 1.05 }}
                        className="p-6 bg-neutral-200 dark:bg-neutral-800 rounded-3xl"
                        style={{
                            boxShadow: `
                                12px 12px 24px rgba(0, 0, 0, 0.15),
                                -12px -12px 24px rgba(255, 255, 255, 0.7)
                            `
                        }}
                    >
                        <div 
                            className="w-12 h-12 bg-neutral-200 dark:bg-neutral-800 rounded-2xl flex items-center justify-center mb-4"
                            style={{
                                boxShadow: `
                                    inset 4px 4px 8px rgba(0, 0, 0, 0.15),
                                    inset -4px -4px 8px rgba(255, 255, 255, 0.7)
                                `
                            }}
                        >
                            <svg className="w-6 h-6 text-neutral-600 dark:text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                            </svg>
                        </div>
                        <div className="text-3xl font-bold text-neutral-800 dark:text-neutral-200 mb-1">4.9/5</div>
                        <div className="text-sm text-neutral-600 dark:text-neutral-400 uppercase tracking-wider font-semibold">Rating</div>
                    </motion.div>
                    
                    <motion.div 
                        whileHover={{ scale: 1.05 }}
                        className="p-6 bg-neutral-200 dark:bg-neutral-800 rounded-3xl"
                        style={{
                            boxShadow: `
                                12px 12px 24px rgba(0, 0, 0, 0.15),
                                -12px -12px 24px rgba(255, 255, 255, 0.7)
                            `
                        }}
                    >
                        <div 
                            className="w-12 h-12 bg-neutral-200 dark:bg-neutral-800 rounded-2xl flex items-center justify-center mb-4"
                            style={{
                                boxShadow: `
                                    inset 4px 4px 8px rgba(0, 0, 0, 0.15),
                                    inset -4px -4px 8px rgba(255, 255, 255, 0.7)
                                `
                            }}
                        >
                            <svg className="w-6 h-6 text-neutral-600 dark:text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div className="text-3xl font-bold text-neutral-800 dark:text-neutral-200 mb-1">24/7</div>
                        <div className="text-sm text-neutral-600 dark:text-neutral-400 uppercase tracking-wider font-semibold">Support</div>
                    </motion.div>
                </motion.div>

                {/* Floating soft shapes */}
                <motion.div
                    animate={{ 
                        y: [0, -20, 0],
                        rotate: [0, 5, 0]
                    }}
                    transition={{ 
                        duration: 6, 
                        repeat: Infinity, 
                        ease: "easeInOut" 
                    }}
                    className="absolute top-1/4 right-10 w-32 h-32 bg-neutral-200 dark:bg-neutral-800 rounded-full"
                    style={{
                        boxShadow: `
                            16px 16px 32px rgba(0, 0, 0, 0.15),
                            -16px -16px 32px rgba(255, 255, 255, 0.7)
                        `
                    }}
                />

                <motion.div
                    animate={{ 
                        y: [0, 30, 0],
                        rotate: [0, -5, 0]
                    }}
                    transition={{ 
                        duration: 8, 
                        repeat: Infinity, 
                        ease: "easeInOut",
                        delay: 1
                    }}
                    className="absolute bottom-1/4 left-10 w-40 h-40 bg-neutral-200 dark:bg-neutral-800 rounded-3xl"
                    style={{
                        boxShadow: `
                            16px 16px 32px rgba(0, 0, 0, 0.15),
                            -16px -16px 32px rgba(255, 255, 255, 0.7)
                        `
                    }}
                />

                {/* Embossed decorative circles */}
                <div className="absolute top-10 left-1/3 flex gap-4">
                    <div 
                        className="w-4 h-4 bg-neutral-200 dark:bg-neutral-800 rounded-full"
                        style={{
                            boxShadow: `
                                inset 2px 2px 4px rgba(0, 0, 0, 0.15),
                                inset -2px -2px 4px rgba(255, 255, 255, 0.7)
                            `
                        }}
                    />
                    <div 
                        className="w-4 h-4 bg-neutral-200 dark:bg-neutral-800 rounded-full"
                        style={{
                            boxShadow: `
                                2px 2px 4px rgba(0, 0, 0, 0.15),
                                -2px -2px 4px rgba(255, 255, 255, 0.7)
                            `
                        }}
                    />
                    <div 
                        className="w-4 h-4 bg-neutral-200 dark:bg-neutral-800 rounded-full"
                        style={{
                            boxShadow: `
                                inset 2px 2px 4px rgba(0, 0, 0, 0.15),
                                inset -2px -2px 4px rgba(255, 255, 255, 0.7)
                            `
                        }}
                    />
                </div>

                {/* Interactive toggle-like elements */}
                <div className="absolute bottom-10 right-1/4 flex items-center gap-3">
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="w-16 h-8 bg-neutral-200 dark:bg-neutral-800 rounded-full relative cursor-pointer"
                        style={{
                            boxShadow: `
                                inset 4px 4px 8px rgba(0, 0, 0, 0.15),
                                inset -4px -4px 8px rgba(255, 255, 255, 0.7)
                            `
                        }}
                    >
                        <motion.div
                            animate={{ x: [2, 34, 2] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-1 left-1 w-6 h-6 bg-neutral-200 dark:bg-neutral-800 rounded-full"
                            style={{
                                boxShadow: `
                                    4px 4px 8px rgba(0, 0, 0, 0.15),
                                    -4px -4px 8px rgba(255, 255, 255, 0.7)
                                `
                            }}
                        />
                    </motion.div>
                </div>
            </div>
        </div>
        </>
    )
}
