'use client'
import { motion } from "framer-motion"
import Link from "next/link"

export default function HeroTwo() {
    return(
        <>
        <div className="h-[100vh] flex items-center justify-center px-6 md:px-12 bg-black relative overflow-hidden">
            
            {/* Cyberpunk grid background */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0" style={{
                    backgroundImage: `
                        linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '50px 50px',
                    transform: 'perspective(500px) rotateX(60deg)',
                    transformOrigin: 'center center'
                }} />
            </div>

            {/* Neon glow effects */}
            <div className="absolute inset-0 opacity-40">
                <div className="absolute top-20 left-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-[120px]" />
                <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-pink-500 rounded-full blur-[120px]" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600 rounded-full blur-[150px]" />
            </div>

            {/* Scanline effect */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <motion.div
                    animate={{ y: ["0%", "100%"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="w-full h-1 bg-cyan-400 shadow-[0_0_20px_rgba(0,255,255,0.8)]"
                />
            </div>

            <div className="max-w-6xl w-full relative z-10">
                
                {/* Glitch text badge */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-8"
                >
                    <motion.span
                        animate={{ 
                            textShadow: [
                                "0 0 10px rgba(0,255,255,0.8), 0 0 20px rgba(255,0,255,0.6)",
                                "0 0 20px rgba(255,0,255,0.8), 0 0 30px rgba(0,255,255,0.6)",
                                "0 0 10px rgba(0,255,255,0.8), 0 0 20px rgba(255,0,255,0.6)"
                            ]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="inline-block px-6 py-2 border border-cyan-400 text-cyan-400 text-xs font-bold tracking-[0.3em] uppercase"
                        style={{
                            boxShadow: "0 0 20px rgba(0,255,255,0.5), inset 0 0 20px rgba(0,255,255,0.1)"
                        }}
                    >
                        ▸ CYBERPUNK 2077
                    </motion.span>
                </motion.div>

                {/* Main glitch heading */}
                <motion.h1 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none mb-8 relative"
                >
                    <motion.span
                        animate={{
                            textShadow: [
                                "2px 2px 0px rgba(255,0,255,0.8), -2px -2px 0px rgba(0,255,255,0.8)",
                                "-2px -2px 0px rgba(255,0,255,0.8), 2px 2px 0px rgba(0,255,255,0.8)",
                                "2px -2px 0px rgba(255,0,255,0.8), -2px 2px 0px rgba(0,255,255,0.8)"
                            ]
                        }}
                        transition={{ duration: 0.3, repeat: Infinity, repeatType: "reverse" }}
                        className="text-white block"
                    >
                        Hero Section - 2
                    </motion.span>
                    <motion.span
                        animate={{
                            color: ["#00ffff", "#ff00ff", "#ffff00", "#00ffff"],
                            textShadow: [
                                "0 0 20px rgba(0,255,255,1), 0 0 40px rgba(0,255,255,0.8)",
                                "0 0 20px rgba(255,0,255,1), 0 0 40px rgba(255,0,255,0.8)",
                                "0 0 20px rgba(255,255,0,1), 0 0 40px rgba(255,255,0,0.8)",
                                "0 0 20px rgba(0,255,255,1), 0 0 40px rgba(0,255,255,0.8)"
                            ]
                        }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        className="block font-black italic"
                    >
                        CYBERPUNK
                    </motion.span>
                </motion.h1>

                {/* Neon description */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="text-lg md:text-xl max-w-2xl font-light leading-relaxed text-cyan-100 mb-12"
                    style={{
                        textShadow: "0 0 10px rgba(0,255,255,0.5)"
                    }}
                >
                    High-tech interfaces with neon aesthetics. Dark backgrounds, vivid colors, 
                    and futuristic design elements create an immersive digital experience.
                </motion.p>

                {/* Neon CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex flex-wrap gap-4 mb-16"
                >
                    <Link href="/contact">
                        <motion.button
                            whileHover={{ 
                                scale: 1.05,
                                boxShadow: "0 0 40px rgba(0,255,255,0.8), 0 0 80px rgba(0,255,255,0.4)"
                            }}
                            whileTap={{ scale: 0.95 }}
                            className="group relative px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-black rounded font-bold uppercase tracking-wider overflow-hidden transition-all"
                            style={{
                                boxShadow: "0 0 20px rgba(0,255,255,0.6)"
                            }}
                        >
                            <motion.div
                                className="absolute inset-0 bg-cyan-300"
                                animate={{
                                    x: ["-100%", "100%"]
                                }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                                style={{
                                    opacity: 0.3,
                                    width: "50%",
                                    filter: "blur(10px)"
                                }}
                            />
                            <span className="relative z-10">▸ Jack In</span>
                        </motion.button>
                    </Link>
                    
                    <Link href="/work">
                        <motion.button
                            whileHover={{ 
                                scale: 1.05,
                                boxShadow: "0 0 40px rgba(255,0,255,0.8), 0 0 80px rgba(255,0,255,0.4)"
                            }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-transparent text-pink-400 rounded font-bold uppercase tracking-wider border-2 border-pink-500 hover:bg-pink-500/20 transition-all"
                            style={{
                                boxShadow: "0 0 20px rgba(255,0,255,0.4)"
                            }}
                        >
                            View Projects
                        </motion.button>
                    </Link>
                </motion.div>

                {/* Cyberpunk Stats */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-8"
                >
                    <motion.div 
                        className="space-y-1 border-l-2 border-cyan-400 pl-4"
                        style={{ boxShadow: "-5px 0 20px rgba(0,255,255,0.3)" }}
                        whileHover={{ x: 5 }}
                    >
                        <motion.div 
                            animate={{ 
                                textShadow: [
                                    "0 0 10px rgba(0,255,255,0.8)",
                                    "0 0 20px rgba(0,255,255,1)",
                                    "0 0 10px rgba(0,255,255,0.8)"
                                ]
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="text-3xl font-bold text-cyan-400"
                        >
                            99.9%
                        </motion.div>
                        <div className="text-sm text-cyan-100/70 uppercase tracking-wider font-mono">Uptime</div>
                    </motion.div>
                    
                    <motion.div 
                        className="space-y-1 border-l-2 border-pink-400 pl-4"
                        style={{ boxShadow: "-5px 0 20px rgba(255,0,255,0.3)" }}
                        whileHover={{ x: 5 }}
                    >
                        <motion.div 
                            animate={{ 
                                textShadow: [
                                    "0 0 10px rgba(255,0,255,0.8)",
                                    "0 0 20px rgba(255,0,255,1)",
                                    "0 0 10px rgba(255,0,255,0.8)"
                                ]
                            }}
                            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                            className="text-3xl font-bold text-pink-400"
                        >
                            A+++
                        </motion.div>
                        <div className="text-sm text-pink-100/70 uppercase tracking-wider font-mono">Security</div>
                    </motion.div>
                    
                    <motion.div 
                        className="space-y-1 border-l-2 border-yellow-400 pl-4"
                        style={{ boxShadow: "-5px 0 20px rgba(255,255,0,0.3)" }}
                        whileHover={{ x: 5 }}
                    >
                        <motion.div 
                            animate={{ 
                                textShadow: [
                                    "0 0 10px rgba(255,255,0,0.8)",
                                    "0 0 20px rgba(255,255,0,1)",
                                    "0 0 10px rgba(255,255,0,0.8)"
                                ]
                            }}
                            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                            className="text-3xl font-bold text-yellow-400"
                        >
                            &lt;100ms
                        </motion.div>
                        <div className="text-sm text-yellow-100/70 uppercase tracking-wider font-mono">Response</div>
                    </motion.div>
                    
                    <motion.div 
                        className="space-y-1 border-l-2 border-purple-400 pl-4"
                        style={{ boxShadow: "-5px 0 20px rgba(128,0,255,0.3)" }}
                        whileHover={{ x: 5 }}
                    >
                        <motion.div 
                            animate={{ 
                                textShadow: [
                                    "0 0 10px rgba(128,0,255,0.8)",
                                    "0 0 20px rgba(128,0,255,1)",
                                    "0 0 10px rgba(128,0,255,0.8)"
                                ]
                            }}
                            transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
                            className="text-3xl font-bold text-purple-400"
                        >
                            24/7
                        </motion.div>
                        <div className="text-sm text-purple-100/70 uppercase tracking-wider font-mono">Support</div>
                    </motion.div>
                </motion.div>

                {/* Corner decorations */}
                <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-cyan-400 opacity-50" 
                     style={{ boxShadow: "0 0 20px rgba(0,255,255,0.5)" }} />
                <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-pink-400 opacity-50"
                     style={{ boxShadow: "0 0 20px rgba(255,0,255,0.5)" }} />
            </div>
        </div>
        </>
    )
}
