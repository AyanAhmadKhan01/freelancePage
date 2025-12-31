'use client'
import { motion } from "framer-motion"
import Link from "next/link"

export default function HeroTen() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { 
            opacity: 1, 
            scale: 1,
            transition: {
                duration: 0.5
            }
        }
    }

    return(
        <>
        <div className="h-[100vh] flex items-center justify-center px-6 md:px-8 lg:px-12 bg-slate-100 dark:bg-slate-950 relative overflow-hidden">
            
            {/* Grid background pattern */}
            <div className="absolute inset-0 opacity-20">
                <div className="w-full h-full" style={{
                    backgroundImage: `
                        linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)
                    `,
                    backgroundSize: '40px 40px'
                }} />
            </div>

            <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="max-w-7xl w-full relative z-10"
            >
                {/* Modular Grid Layout */}
                <div className="grid grid-cols-12 gap-4 md:gap-6">
                    
                    {/* Main Title Block - Spans full width */}
                    <motion.div 
                        variants={itemVariants}
                        whileHover={{ scale: 1.02 }}
                        className="col-span-12 p-8 md:p-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl shadow-lg"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-1 bg-white" />
                            <span className="text-white/80 font-semibold uppercase tracking-wider text-sm">
                                Modular Design System
                            </span>
                        </div>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight mb-4">
                            Hero Section - 10
                        </h1>
                        <h2 className="text-3xl md:text-5xl font-bold text-white/90">
                            Grid-Based / Modular
                        </h2>
                    </motion.div>

                    {/* Description Block */}
                    <motion.div 
                        variants={itemVariants}
                        whileHover={{ scale: 1.02, y: -5 }}
                        className="col-span-12 md:col-span-6 p-6 md:p-8 bg-white dark:bg-slate-900 rounded-2xl border-2 border-slate-200 dark:border-slate-800 shadow-lg"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-blue-100 dark:bg-blue-950 rounded-xl flex items-center justify-center">
                                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">About</h3>
                        </div>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            Flexible grid-based layouts with modular content blocks. 
                            Each component adapts and scales independently, creating 
                            dynamic and responsive compositions.
                        </p>
                    </motion.div>

                    {/* Quick Stats */}
                    <motion.div 
                        variants={itemVariants}
                        whileHover={{ scale: 1.02, y: -5 }}
                        className="col-span-6 md:col-span-3 p-6 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl shadow-lg"
                    >
                        <div className="text-4xl font-black text-white mb-2">12+</div>
                        <div className="text-white/90 text-sm font-semibold uppercase tracking-wider">
                            Grid Areas
                        </div>
                    </motion.div>

                    <motion.div 
                        variants={itemVariants}
                        whileHover={{ scale: 1.02, y: -5 }}
                        className="col-span-6 md:col-span-3 p-6 bg-gradient-to-br from-green-600 to-teal-600 rounded-2xl shadow-lg"
                    >
                        <div className="text-4xl font-black text-white mb-2">100%</div>
                        <div className="text-white/90 text-sm font-semibold uppercase tracking-wider">
                            Flexible
                        </div>
                    </motion.div>

                    {/* Feature Card 1 */}
                    <motion.div 
                        variants={itemVariants}
                        whileHover={{ scale: 1.02, y: -5 }}
                        className="col-span-6 md:col-span-4 p-6 bg-white dark:bg-slate-900 rounded-2xl border-2 border-slate-200 dark:border-slate-800 shadow-lg"
                    >
                        <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-4">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">Fast Performance</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                            Optimized grid rendering for instant load times
                        </p>
                    </motion.div>

                    {/* Feature Card 2 */}
                    <motion.div 
                        variants={itemVariants}
                        whileHover={{ scale: 1.02, y: -5 }}
                        className="col-span-6 md:col-span-4 p-6 bg-white dark:bg-slate-900 rounded-2xl border-2 border-slate-200 dark:border-slate-800 shadow-lg"
                    >
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mb-4">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                            </svg>
                        </div>
                        <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">Modular System</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                            Mix and match components for custom layouts
                        </p>
                    </motion.div>

                    {/* Feature Card 3 */}
                    <motion.div 
                        variants={itemVariants}
                        whileHover={{ scale: 1.02, y: -5 }}
                        className="col-span-6 md:col-span-4 p-6 bg-white dark:bg-slate-900 rounded-2xl border-2 border-slate-200 dark:border-slate-800 shadow-lg"
                    >
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">Responsive Design</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                            Adapts perfectly to any screen size
                        </p>
                    </motion.div>

                    {/* CTA Section */}
                    <motion.div 
                        variants={itemVariants}
                        whileHover={{ scale: 1.02, y: -5 }}
                        className="col-span-12 md:col-span-8 p-8 bg-gradient-to-r from-slate-900 to-slate-800 dark:from-slate-800 dark:to-slate-900 rounded-2xl shadow-lg"
                    >
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            Ready to build something amazing?
                        </h3>
                        <div className="flex flex-wrap gap-4">
                            <Link href="/contact">
                                <motion.button
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold shadow-lg transition-colors"
                                >
                                    Get Started
                                </motion.button>
                            </Link>
                            
                            <Link href="/work">
                                <motion.button
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-4 bg-white dark:bg-slate-700 text-slate-900 dark:text-white rounded-xl font-semibold border-2 border-slate-200 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-600 transition-colors"
                                >
                                    View Work
                                </motion.button>
                            </Link>
                        </div>
                    </motion.div>

                    {/* Visual Element - Decorative Block */}
                    <motion.div 
                        variants={itemVariants}
                        className="col-span-12 md:col-span-4 p-8 bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 rounded-2xl shadow-lg relative overflow-hidden"
                    >
                        <div className="absolute inset-0 opacity-20">
                            <div className="w-full h-full" style={{
                                backgroundImage: `
                                    linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%),
                                    linear-gradient(-45deg, rgba(255,255,255,0.1) 25%, transparent 25%),
                                    linear-gradient(45deg, transparent 75%, rgba(255,255,255,0.1) 75%),
                                    linear-gradient(-45deg, transparent 75%, rgba(255,255,255,0.1) 75%)
                                `,
                                backgroundSize: '40px 40px',
                                backgroundPosition: '0 0, 0 20px, 20px -20px, -20px 0px'
                            }} />
                        </div>
                        <div className="relative z-10">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="w-16 h-16 border-4 border-white rounded-2xl mb-4"
                            />
                            <div className="text-4xl font-black text-white mb-2">∞</div>
                            <div className="text-white font-semibold">Endless Possibilities</div>
                        </div>
                    </motion.div>

                    {/* Mini Stat Blocks */}
                    <motion.div 
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                        className="col-span-4 md:col-span-3 p-4 bg-white dark:bg-slate-900 rounded-xl border-2 border-slate-200 dark:border-slate-800 shadow text-center"
                    >
                        <div className="text-2xl font-bold text-blue-600 mb-1">24/7</div>
                        <div className="text-xs text-slate-600 dark:text-slate-400 font-semibold uppercase">Support</div>
                    </motion.div>

                    <motion.div 
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                        className="col-span-4 md:col-span-3 p-4 bg-white dark:bg-slate-900 rounded-xl border-2 border-slate-200 dark:border-slate-800 shadow text-center"
                    >
                        <div className="text-2xl font-bold text-green-600 mb-1">99%</div>
                        <div className="text-xs text-slate-600 dark:text-slate-400 font-semibold uppercase">Uptime</div>
                    </motion.div>

                    <motion.div 
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                        className="col-span-4 md:col-span-3 p-4 bg-white dark:bg-slate-900 rounded-xl border-2 border-slate-200 dark:border-slate-800 shadow text-center"
                    >
                        <div className="text-2xl font-bold text-purple-600 mb-1">A++</div>
                        <div className="text-xs text-slate-600 dark:text-slate-400 font-semibold uppercase">Grade</div>
                    </motion.div>

                    <motion.div 
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                        className="col-span-4 md:col-span-3 p-4 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl shadow text-center"
                    >
                        <div className="text-2xl font-bold text-white mb-1">∞</div>
                        <div className="text-xs text-white/90 font-semibold uppercase">Scale</div>
                    </motion.div>
                </div>
            </motion.div>

            {/* Corner Grid Indicators */}
            <div className="absolute top-4 left-4 flex gap-1">
                <div className="w-2 h-2 bg-blue-600 rounded-full" />
                <div className="w-2 h-2 bg-purple-600 rounded-full" />
                <div className="w-2 h-2 bg-pink-600 rounded-full" />
            </div>
            
            <div className="absolute bottom-4 right-4 flex gap-1">
                <div className="w-2 h-2 bg-green-600 rounded-full" />
                <div className="w-2 h-2 bg-yellow-600 rounded-full" />
                <div className="w-2 h-2 bg-orange-600 rounded-full" />
            </div>
        </div>
        </>
    )
}
