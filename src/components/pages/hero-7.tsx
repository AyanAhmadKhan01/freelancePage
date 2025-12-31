'use client'
import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { useRef } from "react"

export default function HeroSeven() {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    })

    // Different parallax speeds for layers
    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
    const middleY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
    const floatingY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"])
    
    return(
        <>
        <div ref={ref} className="h-[100vh] flex items-center justify-center px-6 md:px-12 bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
            
            {/* Far Background Layer - Slowest */}
            <motion.div 
                style={{ y: backgroundY }}
                className="absolute inset-0 z-0"
            >
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full opacity-20 blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500 rounded-full opacity-20 blur-3xl" />
            </motion.div>

            {/* Animated stars/particles - Background */}
            <motion.div 
                style={{ y: backgroundY }}
                className="absolute inset-0"
            >
                {[...Array(50)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{ 
                            x: Math.random() * window.innerWidth,
                            y: Math.random() * window.innerHeight,
                            scale: Math.random() * 0.5 + 0.5,
                            opacity: Math.random() * 0.5 + 0.3
                        }}
                        animate={{
                            y: [0, -30, 0],
                            opacity: [0.3, 0.8, 0.3]
                        }}
                        transition={{
                            duration: Math.random() * 3 + 2,
                            repeat: Infinity,
                            delay: Math.random() * 2
                        }}
                        className="absolute w-1 h-1 bg-white rounded-full"
                    />
                ))}
            </motion.div>

            {/* Middle Layer - Medium Speed */}
            <motion.div 
                style={{ y: middleY }}
                className="absolute inset-0 z-10"
            >
                {/* Floating geometric shapes */}
                <motion.div
                    animate={{ 
                        rotate: 360,
                        scale: [1, 1.2, 1]
                    }}
                    transition={{ 
                        duration: 20, 
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute top-20 right-1/4 w-32 h-32 border-4 border-purple-400 opacity-30"
                    style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
                />
                
                <motion.div
                    animate={{ 
                        rotate: -360,
                        y: [0, 40, 0]
                    }}
                    transition={{ 
                        duration: 15, 
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute bottom-32 left-1/4 w-40 h-40 border-4 border-blue-400 rounded-full opacity-20"
                />

                <motion.div
                    animate={{ 
                        rotate: 180,
                        x: [0, -30, 0]
                    }}
                    transition={{ 
                        duration: 18, 
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-1/2 left-10 w-24 h-24 border-4 border-pink-400 opacity-25"
                    style={{ clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)" }}
                />
            </motion.div>

            {/* Content Layer - Fastest (least movement) */}
            <motion.div 
                style={{ y: textY }}
                className="max-w-6xl w-full relative z-20"
            >
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-8"
                >
                    <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                            className="w-2 h-2 bg-purple-400 rounded-full"
                        />
                        <span className="text-sm font-bold tracking-wider uppercase text-white/90">
                            Depth & Motion
                        </span>
                    </div>
                </motion.div>

                {/* Main Heading with parallax effect */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mb-8"
                >
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none text-white mb-4">
                        Hero Section - 7
                    </h1>
                    
                    <motion.h2
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent"
                    >
                        PARALLAX
                    </motion.h2>
                </motion.div>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-lg md:text-xl max-w-2xl font-light leading-relaxed text-white/80 mb-12"
                >
                    Multi-layered scrolling effects create immersive depth and dimension. 
                    Each element moves at its own speed, bringing your content to life.
                </motion.p>

                {/* CTA Buttons */}
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
                            className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-lg font-bold uppercase tracking-wider overflow-hidden transition-all shadow-lg shadow-purple-500/50"
                        >
                            <motion.div
                                className="absolute inset-0 bg-white"
                                initial={{ x: "-100%", opacity: 0.3 }}
                                whileHover={{ x: "100%", opacity: 0.1 }}
                                transition={{ duration: 0.6 }}
                            />
                            <span className="relative z-10">Explore Now</span>
                        </motion.button>
                    </Link>
                    
                    <Link href="/work">
                        <motion.button
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-lg font-bold uppercase tracking-wider border border-white/20 hover:bg-white/20 transition-all"
                        >
                            View Projects
                        </motion.button>
                    </Link>
                </motion.div>

                {/* Stats with glass morphism */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4"
                >
                    <motion.div 
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl"
                    >
                        <div className="text-4xl font-bold text-white mb-2">3D</div>
                        <div className="text-sm text-white/70 uppercase tracking-wider font-semibold">Depth Layers</div>
                    </motion.div>
                    
                    <motion.div 
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl"
                    >
                        <div className="text-4xl font-bold text-white mb-2">60fps</div>
                        <div className="text-sm text-white/70 uppercase tracking-wider font-semibold">Smooth Motion</div>
                    </motion.div>
                    
                    <motion.div 
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl"
                    >
                        <div className="text-4xl font-bold text-white mb-2">∞</div>
                        <div className="text-sm text-white/70 uppercase tracking-wider font-semibold">Possibilities</div>
                    </motion.div>
                    
                    <motion.div 
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl"
                    >
                        <div className="text-4xl font-bold text-white mb-2">100%</div>
                        <div className="text-sm text-white/70 uppercase tracking-wider font-semibold">Immersive</div>
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Foreground Layer - Moves opposite direction */}
            <motion.div 
                style={{ y: floatingY }}
                className="absolute inset-0 z-30 pointer-events-none"
            >
                <motion.div
                    animate={{ 
                        y: [0, -30, 0],
                        rotate: [0, 10, 0]
                    }}
                    transition={{ 
                        duration: 8, 
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-1/4 right-10 w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl opacity-40 blur-sm"
                />

                <motion.div
                    animate={{ 
                        y: [0, 40, 0],
                        rotate: [0, -15, 0]
                    }}
                    transition={{ 
                        duration: 10, 
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                    }}
                    className="absolute bottom-1/4 left-20 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-30 blur-md"
                />

                <motion.div
                    animate={{ 
                        y: [0, -25, 0],
                        x: [0, 20, 0]
                    }}
                    transition={{ 
                        duration: 7, 
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2
                    }}
                    className="absolute top-1/2 right-1/4 w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-400 opacity-50 blur-sm"
                    style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
                />
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-40"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="flex flex-col items-center gap-2"
                >
                    <span className="text-white/60 text-xs uppercase tracking-wider font-semibold">Scroll to explore</span>
                    <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </motion.div>
            </motion.div>
        </div>
        </>
    )
}
