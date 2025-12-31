'use client'
import { motion } from "framer-motion"
import Link from "next/link"

export default function HeroEight() {
    return(
        <>
        <div className="h-[100vh] flex items-center justify-center px-6 md:px-12 lg:px-20 bg-gradient-to-br from-orange-50 via-amber-50 to-red-50 dark:from-orange-950 dark:via-amber-950 dark:to-red-950 relative overflow-hidden">
            
            {/* Traditional Mandala Pattern Background */}
            <div className="absolute inset-0 opacity-10 dark:opacity-20">
                <div className="absolute top-0 left-0 w-full h-full" style={{
                    backgroundImage: `radial-gradient(circle, rgba(255,153,0,0.3) 2px, transparent 2px)`,
                    backgroundSize: '40px 40px'
                }} />
            </div>

            {/* Decorative Rangoli-inspired corners */}
            <div className="absolute top-0 left-0 w-64 h-64 opacity-20">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                    <circle cx="0" cy="0" r="80" fill="#FF9900" />
                    <circle cx="40" cy="40" r="30" fill="#FF6B00" />
                    <circle cx="0" cy="80" r="20" fill="#138808" />
                    <circle cx="80" cy="0" r="20" fill="#000080" />
                </svg>
            </div>

            <div className="absolute bottom-0 right-0 w-64 h-64 opacity-20 rotate-180">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                    <circle cx="0" cy="0" r="80" fill="#FF9900" />
                    <circle cx="40" cy="40" r="30" fill="#FF6B00" />
                    <circle cx="0" cy="80" r="20" fill="#138808" />
                    <circle cx="80" cy="0" r="20" fill="#000080" />
                </svg>
            </div>

            {/* Floating Diyas (Oil Lamps) */}
            <motion.div
                animate={{ 
                    y: [0, -15, 0],
                    rotate: [0, 5, 0]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-20 right-1/4"
            >
                <div className="relative">
                    {/* Diya flame */}
                    <motion.div
                        animate={{ 
                            scale: [1, 1.2, 1],
                            opacity: [0.8, 1, 0.8]
                        }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-4 h-6 bg-gradient-to-t from-orange-500 via-yellow-400 to-yellow-200 rounded-full mx-auto"
                    />
                    {/* Diya base */}
                    <div className="w-12 h-4 bg-gradient-to-br from-amber-600 to-amber-800 rounded-full" />
                </div>
            </motion.div>

            <motion.div
                animate={{ 
                    y: [0, -20, 0],
                    rotate: [0, -5, 0]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-32 left-1/4"
            >
                <div className="relative">
                    <motion.div
                        animate={{ 
                            scale: [1, 1.2, 1],
                            opacity: [0.8, 1, 0.8]
                        }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                        className="w-4 h-6 bg-gradient-to-t from-orange-500 via-yellow-400 to-yellow-200 rounded-full mx-auto"
                    />
                    <div className="w-12 h-4 bg-gradient-to-br from-amber-600 to-amber-800 rounded-full" />
                </div>
            </motion.div>

            <div className="max-w-7xl w-full relative z-10">
                
                {/* Traditional Badge with Indian Flag Colors */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-8"
                >
                    <div className="inline-flex items-center gap-3 px-6 py-3 bg-white dark:bg-slate-900 border-2 border-orange-500 rounded-full shadow-lg">
                        <div className="flex gap-1">
                            <div className="w-1 h-6 bg-orange-500" />
                            <div className="w-1 h-6 bg-white dark:bg-slate-700" />
                            <div className="w-1 h-6 bg-green-600" />
                        </div>
                        <span className="text-sm font-bold tracking-wider uppercase text-orange-600 dark:text-orange-400">
                            🪔 Indian Heritage
                        </span>
                    </div>
                </motion.div>

                {/* Main Heading with Devanagari-inspired styling */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mb-8"
                >
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight leading-none text-orange-600 dark:text-orange-400 mb-4">
                        Hero Section - 8
                    </h1>
                    
                    <div className="flex items-center gap-4 flex-wrap">
                        <motion.div
                            animate={{ rotate: [0, 360] }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="w-12 h-12 border-4 border-orange-500 rounded-full flex items-center justify-center"
                        >
                            <div className="w-2 h-2 bg-green-600 rounded-full" />
                        </motion.div>
                        
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight bg-gradient-to-r from-orange-600 via-white to-green-600 bg-clip-text text-transparent border-4 border-orange-500 dark:border-orange-400 px-6 py-2">
                            CULTURAL
                        </h2>

                        <div className="flex gap-2">
                            <div className="w-3 h-12 bg-orange-500" />
                            <div className="w-3 h-12 bg-white dark:bg-slate-700" />
                            <div className="w-3 h-12 bg-green-600" />
                        </div>
                    </div>

                    {/* Hindi/Sanskrit inspired decorative line */}
                    <div className="mt-6 flex items-center gap-2">
                        <div className="h-1 w-20 bg-orange-500" />
                        <div className="text-orange-600 dark:text-orange-400 text-2xl">॥</div>
                        <div className="h-1 flex-1 bg-gradient-to-r from-orange-500 via-white to-green-600" />
                        <div className="text-orange-600 dark:text-orange-400 text-2xl">॥</div>
                        <div className="h-1 w-20 bg-green-600" />
                    </div>
                </motion.div>

                {/* Description with traditional styling */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="mb-12 max-w-3xl"
                >
                    <div className="p-6 bg-gradient-to-r from-orange-100 to-amber-100 dark:from-orange-950/50 dark:to-amber-950/50 border-l-4 border-orange-500 rounded-r-lg shadow-lg">
                        <p className="text-lg md:text-xl font-semibold leading-relaxed text-slate-800 dark:text-slate-200 mb-2">
                            Celebrating India's Rich Cultural Heritage
                        </p>
                        <p className="text-base text-slate-700 dark:text-slate-300">
                            Traditional designs meet modern web experiences. Vibrant colors, 
                            cultural motifs, and timeless aesthetics that honor our heritage.
                        </p>
                    </div>
                </motion.div>

                {/* CTA Buttons with Indian styling */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex flex-wrap gap-4 mb-16"
                >
                    <Link href="/contact">
                        <motion.button
                            whileHover={{ scale: 1.03, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="group relative px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-lg font-bold uppercase tracking-wider shadow-lg shadow-orange-500/50 overflow-hidden"
                        >
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20"
                                animate={{ x: ['-100%', '100%'] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            />
                            <span className="relative z-10 flex items-center gap-2">
                                🙏 Join Us
                            </span>
                        </motion.button>
                    </Link>
                    
                    <Link href="/gallery">
                        <motion.button
                            whileHover={{ scale: 1.03, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-white dark:bg-slate-900 text-orange-600 dark:text-orange-400 rounded-lg font-bold uppercase tracking-wider border-2 border-orange-500 hover:bg-orange-50 dark:hover:bg-orange-950/30 transition-colors shadow-lg"
                        >
                            🎨 View Gallery
                        </motion.button>
                    </Link>

                    <Link href="/explore">
                        <motion.button
                            whileHover={{ scale: 1.03, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white rounded-lg font-bold uppercase tracking-wider shadow-lg shadow-green-500/50"
                        >
                            ✨ Explore
                        </motion.button>
                    </Link>
                </motion.div>

                {/* Cultural Stats with Traditional Cards */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4"
                >
                    <motion.div 
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="p-6 bg-white dark:bg-slate-900 rounded-xl border-2 border-orange-400 shadow-lg relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 w-20 h-20 bg-orange-500 opacity-10 rounded-full -translate-y-8 translate-x-8" />
                        <div className="relative z-10">
                            <div className="text-4xl mb-2">🕉️</div>
                            <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-1">5000+</div>
                            <div className="text-sm text-slate-600 dark:text-slate-400 uppercase tracking-wider font-semibold">Years Legacy</div>
                        </div>
                    </motion.div>
                    
                    <motion.div 
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="p-6 bg-gradient-to-br from-orange-500 to-red-500 dark:from-orange-600 dark:to-red-600 rounded-xl shadow-lg relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 w-20 h-20 bg-white opacity-10 rounded-full -translate-y-8 translate-x-8" />
                        <div className="relative z-10">
                            <div className="text-4xl mb-2">🪔</div>
                            <div className="text-3xl font-bold text-white mb-1">1000+</div>
                            <div className="text-sm text-white/90 uppercase tracking-wider font-semibold">Traditions</div>
                        </div>
                    </motion.div>
                    
                    <motion.div 
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="p-6 bg-white dark:bg-slate-900 rounded-xl border-2 border-green-500 shadow-lg relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 w-20 h-20 bg-green-500 opacity-10 rounded-full -translate-y-8 translate-x-8" />
                        <div className="relative z-10">
                            <div className="text-4xl mb-2">🎭</div>
                            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-1">28</div>
                            <div className="text-sm text-slate-600 dark:text-slate-400 uppercase tracking-wider font-semibold">States Arts</div>
                        </div>
                    </motion.div>
                    
                    <motion.div 
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="p-6 bg-gradient-to-br from-green-600 to-green-700 dark:from-green-700 dark:to-green-800 rounded-xl shadow-lg relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 w-20 h-20 bg-white opacity-10 rounded-full -translate-y-8 translate-x-8" />
                        <div className="relative z-10">
                            <div className="text-4xl mb-2">🏛️</div>
                            <div className="text-3xl font-bold text-white mb-1">100+</div>
                            <div className="text-sm text-white/90 uppercase tracking-wider font-semibold">Monuments</div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Traditional Pattern Decorations */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/4 right-10 w-32 h-32 opacity-20"
                >
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                        <circle cx="50" cy="50" r="40" fill="none" stroke="#FF9900" strokeWidth="2" />
                        <circle cx="50" cy="50" r="30" fill="none" stroke="#138808" strokeWidth="2" />
                        <circle cx="50" cy="50" r="20" fill="none" stroke="#000080" strokeWidth="2" />
                        <circle cx="50" cy="50" r="10" fill="#FF9900" />
                    </svg>
                </motion.div>

                {/* Lotus petals decoration */}
                <div className="absolute bottom-10 right-1/4 opacity-30">
                    <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 3, repeat: Infinity }}
                    >
                        <svg width="80" height="80" viewBox="0 0 100 100">
                            <ellipse cx="50" cy="70" rx="15" ry="35" fill="#FF9900" opacity="0.6" />
                            <ellipse cx="50" cy="70" rx="15" ry="35" fill="#FF9900" opacity="0.6" transform="rotate(45 50 70)" />
                            <ellipse cx="50" cy="70" rx="15" ry="35" fill="#FF9900" opacity="0.6" transform="rotate(90 50 70)" />
                            <ellipse cx="50" cy="70" rx="15" ry="35" fill="#FF9900" opacity="0.6" transform="rotate(135 50 70)" />
                            <circle cx="50" cy="70" r="10" fill="#FFD700" />
                        </svg>
                    </motion.div>
                </div>
            </div>
        </div>
        </>
    )
}
