'use client'
import { motion } from "framer-motion"
import Link from "next/link"

export default function HeroOne() {
    return(
        <>
        <div className="h-[100vh] flex items-center justify-center px-6 md:px-12 bg-slate-50 dark:bg-slate-900 relative overflow-hidden">
            
            {/* Subtle background decoration */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-20 left-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
            </div>

            <div className="max-w-6xl w-full relative z-10">
                
                {/* Top label */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-8"
                >
                    <span className="inline-block px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 text-xs font-medium tracking-wider uppercase">
                        Minimalist Design
                    </span>
                </motion.div>

                {/* Main heading */}
                <motion.h1 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-6xl md:text-8xl lg:text-9xl font-extralight tracking-tight leading-none mb-8 text-slate-900 dark:text-white"
                >
                    Hero Section - 1
                    <br />
                    <span className="text-indigo-600 dark:text-indigo-400 font-normal">Minimalist</span>
                </motion.h1>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="text-lg md:text-xl max-w-2xl font-light leading-relaxed text-slate-600 dark:text-slate-300 mb-12"
                >
                    Clean interfaces, intentional whitespace, and purposeful functionality. 
                    We create elegant digital experiences by removing the unnecessary.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex flex-wrap gap-4 mb-16"
                >
                    <Link href="/contact">
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(79, 70, 229, 0.3)" }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-medium shadow-lg transition-all"
                        >
                            Start Project
                        </motion.button>
                    </Link>
                    
                    <Link href="/work">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-full font-medium shadow-lg border border-slate-200 dark:border-slate-700 hover:border-indigo-500 dark:hover:border-indigo-500 transition-all"
                        >
                            View Work
                        </motion.button>
                    </Link>
                </motion.div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-8"
                >
                    <div className="space-y-1">
                        <div className="text-3xl font-light text-indigo-600 dark:text-indigo-400">98%</div>
                        <div className="text-sm text-slate-500 dark:text-slate-400 uppercase tracking-wider">Performance</div>
                    </div>
                    <div className="space-y-1">
                        <div className="text-3xl font-light text-indigo-600 dark:text-indigo-400">A+</div>
                        <div className="text-sm text-slate-500 dark:text-slate-400 uppercase tracking-wider">Accessibility</div>
                    </div>
                    <div className="space-y-1">
                        <div className="text-3xl font-light text-indigo-600 dark:text-indigo-400">&lt;1s</div>
                        <div className="text-sm text-slate-500 dark:text-slate-400 uppercase tracking-wider">Load Time</div>
                    </div>
                    <div className="space-y-1">
                        <div className="text-3xl font-light text-indigo-600 dark:text-indigo-400">100%</div>
                        <div className="text-sm text-slate-500 dark:text-slate-400 uppercase tracking-wider">Satisfaction</div>
                    </div>
                </motion.div>
            </div>
        </div>
        </>
    )
}