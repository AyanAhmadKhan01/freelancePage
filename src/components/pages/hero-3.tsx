'use client'
import { motion } from "framer-motion"
import Link from "next/link"

export default function HeroThree() {
    return(
        <>
        <div className="h-[100vh] flex items-center justify-center px-6 md:px-12 bg-slate-50 dark:bg-slate-950 relative overflow-hidden">
            
            {/* Floating geometric shapes */}
            <motion.div
                animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.1, 1]
                }}
                transition={{ 
                    duration: 20, 
                    repeat: Infinity, 
                    ease: "linear" 
                }}
                className="absolute top-20 left-10 w-32 h-32 bg-orange-500 opacity-20"
                style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
            />
            
            <motion.div
                animate={{ 
                    rotate: [0, -360],
                    y: [0, 30, 0]
                }}
                transition={{ 
                    duration: 15, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                }}
                className="absolute top-40 right-20 w-24 h-24 bg-blue-500 opacity-20 rounded-full"
            />
            
            <motion.div
                animate={{ 
                    rotate: [0, 180, 360],
                    x: [0, -20, 0]
                }}
                transition={{ 
                    duration: 18, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                }}
                className="absolute bottom-32 left-1/4 w-40 h-40 bg-purple-500 opacity-15"
                style={{ clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)" }}
            />
            
            <motion.div
                animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.2, 1],
                    x: [0, 40, 0]
                }}
                transition={{ 
                    duration: 22, 
                    repeat: Infinity, 
                    ease: "linear" 
                }}
                className="absolute bottom-20 right-1/4 w-28 h-28 bg-green-500 opacity-20"
                style={{ clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)" }}
            />
            
            <motion.div
                animate={{ 
                    rotate: [360, 0],
                    y: [0, -50, 0]
                }}
                transition={{ 
                    duration: 25, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                }}
                className="absolute top-1/2 right-10 w-36 h-36 bg-pink-500 opacity-15"
            />
            
            <motion.div
                animate={{ 
                    rotate: [0, -180, 0],
                    scale: [1, 0.9, 1]
                }}
                transition={{ 
                    duration: 16, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                }}
                className="absolute top-1/3 left-1/3 w-20 h-20 bg-yellow-500 opacity-20"
                style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
            />

            {/* Grid overlay */}
            <div className="absolute inset-0 opacity-5 dark:opacity-10">
                <div className="w-full h-full" style={{
                    backgroundImage: `
                        linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '60px 60px'
                }} />
            </div>

            <div className="max-w-6xl w-full relative z-10">
                
                {/* Abstract badge */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-8 flex items-center gap-3"
                >
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                        className="w-3 h-3 bg-orange-500"
                        style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
                    />
                    <span className="inline-block px-4 py-2 bg-slate-900 dark:bg-slate-100 text-slate-100 dark:text-slate-900 text-xs font-bold tracking-[0.2em] uppercase">
                        Abstract Design
                    </span>
                    <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                        className="w-3 h-3 bg-blue-500 rounded-full"
                    />
                </motion.div>

                {/* Main heading with geometric accents */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mb-8 relative"
                >
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none text-slate-900 dark:text-slate-100">
                        Hero Section - 3
                    </h1>
                    
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="flex items-center gap-4 mt-4"
                    >
                        <motion.div
                            animate={{ 
                                scaleX: [1, 1.2, 1],
                            }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            className="h-2 w-24 bg-orange-500"
                        />
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 dark:text-slate-100">
                            GEOMETRIC
                        </h2>
                        <motion.div
                            animate={{ 
                                rotate: 360,
                            }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                            className="w-8 h-8 bg-blue-500"
                            style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
                        />
                    </motion.div>
                </motion.div>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-lg md:text-xl max-w-2xl font-light leading-relaxed text-slate-600 dark:text-slate-400 mb-12"
                >
                    Modern design language with bold shapes and clean lines. 
                    Geometric patterns create visual rhythm and establish a strong 
                    contemporary aesthetic for digital experiences.
                </motion.p>

                {/* CTA Buttons with geometric elements */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                    className="flex flex-wrap gap-4 mb-16"
                >
                    <Link href="/contact">
                        <motion.button
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="group relative px-8 py-4 bg-slate-900 dark:bg-slate-100 text-slate-100 dark:text-slate-900 rounded font-bold uppercase tracking-wider overflow-hidden transition-colors flex items-center gap-3"
                        >
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                className="w-4 h-4 bg-orange-500"
                                style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
                            />
                            Start Project
                        </motion.button>
                    </Link>
                    
                    <Link href="/work">
                        <motion.button
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="group px-8 py-4 bg-transparent text-slate-900 dark:text-slate-100 rounded font-bold uppercase tracking-wider border-2 border-slate-900 dark:border-slate-100 hover:bg-slate-900 hover:text-slate-100 dark:hover:bg-slate-100 dark:hover:text-slate-900 transition-all flex items-center gap-3"
                        >
                            View Gallery
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                className="w-4 h-4 bg-blue-500 rounded-full"
                            />
                        </motion.button>
                    </Link>
                </motion.div>

                {/* Geometric Stats Grid */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6"
                >
                    <motion.div 
                        whileHover={{ scale: 1.05 }}
                        className="relative p-6 bg-white dark:bg-slate-900 border-2 border-slate-900 dark:border-slate-100 overflow-hidden group"
                    >
                        <motion.div
                            className="absolute top-0 right-0 w-16 h-16 bg-orange-500 opacity-20"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                            style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
                        />
                        <div className="relative z-10">
                            <div className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-1">500+</div>
                            <div className="text-sm text-slate-600 dark:text-slate-400 uppercase tracking-wider font-semibold">Projects</div>
                        </div>
                    </motion.div>
                    
                    <motion.div 
                        whileHover={{ scale: 1.05 }}
                        className="relative p-6 bg-white dark:bg-slate-900 border-2 border-slate-900 dark:border-slate-100 overflow-hidden group"
                    >
                        <motion.div
                            className="absolute top-0 right-0 w-16 h-16 bg-blue-500 opacity-20 rounded-full"
                            animate={{ scale: [1, 1.3, 1] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        />
                        <div className="relative z-10">
                            <div className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-1">98%</div>
                            <div className="text-sm text-slate-600 dark:text-slate-400 uppercase tracking-wider font-semibold">Satisfied</div>
                        </div>
                    </motion.div>
                    
                    <motion.div 
                        whileHover={{ scale: 1.05 }}
                        className="relative p-6 bg-white dark:bg-slate-900 border-2 border-slate-900 dark:border-slate-100 overflow-hidden group"
                    >
                        <motion.div
                            className="absolute top-0 right-0 w-16 h-16 bg-purple-500 opacity-20"
                            animate={{ rotate: [0, 180, 360] }}
                            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                            style={{ clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)" }}
                        />
                        <div className="relative z-10">
                            <div className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-1">12</div>
                            <div className="text-sm text-slate-600 dark:text-slate-400 uppercase tracking-wider font-semibold">Years Exp</div>
                        </div>
                    </motion.div>
                    
                    <motion.div 
                        whileHover={{ scale: 1.05 }}
                        className="relative p-6 bg-white dark:bg-slate-900 border-2 border-slate-900 dark:border-slate-100 overflow-hidden group"
                    >
                        <motion.div
                            className="absolute top-0 right-0 w-16 h-16 bg-green-500 opacity-20"
                            animate={{ rotate: -360 }}
                            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                            style={{ clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)" }}
                        />
                        <div className="relative z-10">
                            <div className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-1">24/7</div>
                            <div className="text-sm text-slate-600 dark:text-slate-400 uppercase tracking-wider font-semibold">Support</div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Corner geometric accents */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-8 -left-8 w-16 h-16 border-4 border-orange-500 opacity-30"
                    style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
                />
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute -bottom-8 -right-8 w-16 h-16 border-4 border-blue-500 opacity-30 rounded-full"
                />
            </div>
        </div>
        </>
    )
}
