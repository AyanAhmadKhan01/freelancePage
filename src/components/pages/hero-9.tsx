'use client'
import { motion, useMotionValue, useTransform } from "framer-motion"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function HeroNine() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    const rotateX = useTransform(mouseY, [-300, 300], [10, -10])
    const rotateY = useTransform(mouseX, [-300, 300], [-10, 10])

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e
            const { innerWidth, innerHeight } = window
            const x = clientX - innerWidth / 2
            const y = clientY - innerHeight / 2
            
            mouseX.set(x)
            mouseY.set(y)
            setMousePosition({ x, y })
        }

        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [mouseX, mouseY])

    return(
        <>
        <div className="h-[100vh] flex items-center justify-center px-6 md:px-12 lg:px-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
            
            {/* Animated gradient orbs */}
            <motion.div
                animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ 
                    duration: 8, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                }}
                className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full blur-3xl"
            />
            
            <motion.div
                animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.4, 0.2]
                }}
                transition={{ 
                    duration: 10, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: 2
                }}
                className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full blur-3xl"
            />

            {/* Grid pattern overlay */}
            <div className="absolute inset-0 opacity-10">
                <div className="w-full h-full" style={{
                    backgroundImage: `
                        linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
                    `,
                    backgroundSize: '80px 80px'
                }} />
            </div>

            {/* Mouse-following spotlight effect */}
            <motion.div
                className="absolute pointer-events-none"
                style={{
                    left: mousePosition.x + window.innerWidth / 2,
                    top: mousePosition.y + window.innerHeight / 2,
                    x: '-50%',
                    y: '-50%'
                }}
            >
                <div className="w-96 h-96 bg-gradient-to-r from-violet-500/20 to-blue-500/20 rounded-full blur-3xl" />
            </motion.div>

            <div className="max-w-7xl w-full relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    
                    {/* Left Content */}
                    <div>
                        {/* Status Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="mb-8 flex items-center gap-3"
                        >
                            <div className="flex items-center gap-3 px-5 py-2.5 bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-full">
                                <motion.div
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="w-2 h-2 bg-green-500 rounded-full shadow-lg shadow-green-500/50"
                                />
                                <span className="text-sm font-semibold text-slate-300">Available for new projects</span>
                            </div>
                        </motion.div>

                        {/* Main Heading */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight text-white mb-6">
                                Hero Section - 9
                            </h1>
                            
                            <motion.h2
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
                            >
                                <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                                    Modern Design
                                </span>
                            </motion.h2>
                        </motion.div>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="text-lg md:text-xl leading-relaxed text-slate-400 mb-8 max-w-xl"
                        >
                            Contemporary aesthetics meet cutting-edge functionality. 
                            Clean lines, sophisticated interactions, and premium feel 
                            for the digital age.
                        </motion.p>

                        {/* Feature Pills */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="flex flex-wrap gap-3 mb-8"
                        >
                            {['Responsive', 'Fast', 'Accessible', 'Scalable'].map((feature, index) => (
                                <motion.div
                                    key={feature}
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    className="px-4 py-2 bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-lg text-slate-300 text-sm font-medium"
                                >
                                    {feature}
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1 }}
                            className="flex flex-wrap gap-4"
                        >
                            <Link href="/contact">
                                <motion.button
                                    whileHover={{ scale: 1.03, y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="group relative px-8 py-4 bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-700 hover:to-blue-700 text-white rounded-xl font-semibold text-lg shadow-lg shadow-violet-600/30 transition-all overflow-hidden"
                                >
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                                        initial={{ x: '-100%' }}
                                        whileHover={{ x: '100%' }}
                                        transition={{ duration: 0.6 }}
                                    />
                                    <span className="relative z-10 flex items-center gap-2">
                                        Get Started
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </span>
                                </motion.button>
                            </Link>
                            
                            <Link href="/work">
                                <motion.button
                                    whileHover={{ scale: 1.03, y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="px-8 py-4 bg-slate-800/50 backdrop-blur-xl text-white rounded-xl font-semibold text-lg border border-slate-700/50 hover:bg-slate-800/70 transition-all"
                                >
                                    View Work
                                </motion.button>
                            </Link>
                        </motion.div>
                    </div>

                    {/* Right Content - 3D Card Effect */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="hidden lg:block"
                    >
                        <motion.div
                            style={{
                                rotateX,
                                rotateY,
                                transformStyle: "preserve-3d"
                            }}
                            className="relative"
                        >
                            {/* Main Feature Card */}
                            <div className="p-8 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl shadow-2xl">
                                <div className="space-y-6">
                                    {/* Stat Item */}
                                    <motion.div
                                        whileHover={{ scale: 1.02, x: 5 }}
                                        className="flex items-center gap-4 p-4 bg-slate-900/50 rounded-2xl border border-slate-700/30"
                                    >
                                        <div className="w-12 h-12 bg-gradient-to-br from-violet-600 to-blue-600 rounded-xl flex items-center justify-center">
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <div className="text-2xl font-bold text-white">99.9%</div>
                                            <div className="text-sm text-slate-400">Uptime Guaranteed</div>
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        whileHover={{ scale: 1.02, x: 5 }}
                                        className="flex items-center gap-4 p-4 bg-slate-900/50 rounded-2xl border border-slate-700/30"
                                    >
                                        <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center">
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <div className="text-2xl font-bold text-white">&lt;100ms</div>
                                            <div className="text-sm text-slate-400">Response Time</div>
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        whileHover={{ scale: 1.02, x: 5 }}
                                        className="flex items-center gap-4 p-4 bg-slate-900/50 rounded-2xl border border-slate-700/30"
                                    >
                                        <div className="w-12 h-12 bg-gradient-to-br from-cyan-600 to-teal-600 rounded-xl flex items-center justify-center">
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <div className="text-2xl font-bold text-white">A+ Grade</div>
                                            <div className="text-sm text-slate-400">Security Rating</div>
                                        </div>
                                    </motion.div>

                                    {/* Progress Bars */}
                                    <div className="pt-4 space-y-4">
                                        <div>
                                            <div className="flex justify-between mb-2">
                                                <span className="text-sm text-slate-400">Performance</span>
                                                <span className="text-sm text-white font-semibold">98%</span>
                                            </div>
                                            <div className="h-2 bg-slate-900/50 rounded-full overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    animate={{ width: "98%" }}
                                                    transition={{ duration: 1.5, delay: 1 }}
                                                    className="h-full bg-gradient-to-r from-violet-600 to-blue-600 rounded-full"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <div className="flex justify-between mb-2">
                                                <span className="text-sm text-slate-400">User Satisfaction</span>
                                                <span className="text-sm text-white font-semibold">95%</span>
                                            </div>
                                            <div className="h-2 bg-slate-900/50 rounded-full overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    animate={{ width: "95%" }}
                                                    transition={{ duration: 1.5, delay: 1.2 }}
                                                    className="h-full bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating accent elements */}
                            <motion.div
                                animate={{ 
                                    y: [0, -20, 0],
                                    rotate: [0, 10, 0]
                                }}
                                transition={{ duration: 5, repeat: Infinity }}
                                className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-violet-600 to-blue-600 rounded-2xl opacity-50 blur-xl"
                                style={{ transform: 'translateZ(50px)' }}
                            />
                            
                            <motion.div
                                animate={{ 
                                    y: [0, 20, 0],
                                    rotate: [0, -10, 0]
                                }}
                                transition={{ duration: 6, repeat: Infinity, delay: 1 }}
                                className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full opacity-40 blur-xl"
                                style={{ transform: 'translateZ(50px)' }}
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-10 right-10 opacity-20">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-20 h-20 border-2 border-violet-500 rounded-lg"
                />
            </div>
            
            <div className="absolute bottom-10 left-10 opacity-20">
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="w-16 h-16 border-2 border-cyan-500 rounded-full"
                />
            </div>
        </div>
        </>
    )
}
