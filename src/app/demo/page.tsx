// 'use client'
// import { useState, useEffect, useRef } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import Heroone from "@/components/pages/hero-1"
// import HeroTwo from "@/components/pages/hero-2"
// import HeroThree from "@/components/pages/hero-3"
// import HeroFour from "@/components/pages/hero-4"
// import HeroFive from "@/components/pages/hero-5"
// import HeroSix from "@/components/pages/hero-6"
// import HeroSeven from "@/components/pages/hero-7"
// import HeroEight from "@/components/pages/hero-8"
// import HeroNine from "@/components/pages/hero-9"
// import HeroTen from "@/components/pages/hero-10"

// const heroSections = [
//     { id: 0, name: "Minimalist", component: Heroone, color: "indigo", preview: "bg-gradient-to-br from-indigo-600 to-slate-900" },
//     { id: 1, name: "Cyberpunk", component: HeroTwo, color: "cyan", preview: "bg-gradient-to-br from-cyan-500 to-pink-600" },
//     { id: 2, name: "Geometric", component: HeroThree, color: "orange", preview: "bg-gradient-to-br from-orange-500 to-blue-600" },
//     { id: 3, name: "SaaS/Corporate", component: HeroFour, color: "blue", preview: "bg-gradient-to-br from-blue-600 to-indigo-700" },
//     { id: 4, name: "Brutalist", component: HeroFive, color: "red", preview: "bg-gradient-to-br from-red-600 to-yellow-400" },
//     { id: 5, name: "Neumorphism", component: HeroSix, color: "neutral", preview: "bg-gradient-to-br from-neutral-300 to-neutral-500" },
//     { id: 6, name: "Parallax", component: HeroSeven, color: "purple", preview: "bg-gradient-to-br from-purple-600 to-blue-600" },
//     { id: 7, name: "Cultural", component: HeroEight, color: "orange", preview: "bg-gradient-to-br from-orange-500 to-green-600" },
//     { id: 8, name: "Modern", component: HeroNine, color: "violet", preview: "bg-gradient-to-br from-violet-600 to-cyan-600" },
//     { id: 9, name: "Grid-Based", component: HeroTen, color: "blue", preview: "bg-gradient-to-br from-blue-600 to-purple-600" }
// ]

// export default function Demo() {
//     const [currentSection, setCurrentSection] = useState(0)
//     const [isScrolling, setIsScrolling] = useState(false)
//     const containerRef = useRef<HTMLDivElement>(null)
//     const sectionRefs = useRef<(HTMLDivElement | null)[]>([])

//     // Get 3 related sections to show in preview
//     const getRelatedSections = (current: number) => {
//         const total = heroSections.length
        
//         if (current === 0) {
//             return [total - 1, current + 1, current + 2].filter(i => i < total)
//         } else if (current === total - 1) {
//             return [current - 2, current - 1, 0].filter(i => i >= 0)
//         } else {
//             return [current - 1, current + 1, current === 1 ? current + 2 : (current + 2) % total]
//         }
//     }

//     const scrollToSection = (index: number) => {
//         if (isScrolling || index === currentSection) return
        
//         setIsScrolling(true)
//         const section = sectionRefs.current[index]
        
//         if (section) {
//             section.scrollIntoView({ behavior: 'smooth', block: 'start' })
//             setCurrentSection(index)
            
//             setTimeout(() => {
//                 setIsScrolling(false)
//             }, 1000)
//         }
//     }

//     const handleWheel = (e: WheelEvent) => {
//         if (isScrolling) {
//             e.preventDefault()
//             return
//         }

//         if (e.deltaY > 50 && currentSection < heroSections.length - 1) {
//             e.preventDefault()
//             scrollToSection(currentSection + 1)
//         } else if (e.deltaY < -50 && currentSection > 0) {
//             e.preventDefault()
//             scrollToSection(currentSection - 1)
//         }
//     }

//     useEffect(() => {
//         const container = containerRef.current
//         if (!container) return

//         container.addEventListener('wheel', handleWheel, { passive: false })
        
//         return () => {
//             container.removeEventListener('wheel', handleWheel)
//         }
//     }, [currentSection, isScrolling])

//     // Intersection Observer for updating current section
//     useEffect(() => {
//         const observers = sectionRefs.current.map((section, index) => {
//             if (!section) return null

//             const observer = new IntersectionObserver(
//                 (entries) => {
//                     entries.forEach((entry) => {
//                         if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
//                             setCurrentSection(index)
//                         }
//                     })
//                 },
//                 { threshold: 0.5 }
//             )

//             observer.observe(section)
//             return observer
//         })

//         return () => {
//             observers.forEach((observer) => observer?.disconnect())
//         }
//     }, [])

//     const relatedSections = getRelatedSections(currentSection)

//     return(
//         <div ref={containerRef} className="relative">
//             {/* Hero Sections */}
//             {heroSections.map((hero, index) => {
//                 const HeroComponent = hero.component
//                 return (
//                     <div 
//                         key={hero.id}
//                         ref={el => { sectionRefs.current[index] = el }}
//                         className="h-[100vh] snap-start"
//                     >
//                         <HeroComponent />
//                     </div>
//                 )
//             })}

//             {/* Navigation Dots - Left Side */}
//             <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
//                 {heroSections.map((hero, index) => (
//                     <motion.button
//                         key={hero.id}
//                         onClick={() => scrollToSection(index)}
//                         whileHover={{ scale: 1.2 }}
//                         whileTap={{ scale: 0.9 }}
//                         className={`group relative w-3 h-3 rounded-full transition-all duration-300 ${
//                             currentSection === index 
//                                 ? `bg-${hero.color}-600 w-4 h-4` 
//                                 : 'bg-slate-400 hover:bg-slate-600'
//                         }`}
//                     >
//                         <span className="absolute left-6 top-1/2 -translate-y-1/2 whitespace-nowrap bg-slate-900 text-white text-xs px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
//                             {hero.name}
//                         </span>
//                     </motion.button>
//                 ))}
//             </div>

//             {/* Section Counter - Top Right */}
//             <div className="fixed top-6 right-6 z-50 bg-slate-900/80 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-semibold">
//                 {String(currentSection + 1).padStart(2, '0')} / {String(heroSections.length).padStart(2, '0')}
//             </div>

//             {/* Preview Thumbnails - Bottom Center */}
//             <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
//                 <AnimatePresence mode="wait">
//                     <motion.div 
//                         key={currentSection}
//                         initial={{ y: 100, opacity: 0 }}
//                         animate={{ y: 0, opacity: 1 }}
//                         exit={{ y: 100, opacity: 0 }}
//                         transition={{ duration: 0.4, ease: "easeOut" }}
//                         className="flex gap-4 items-end"
//                     >
//                         {relatedSections.map((sectionIndex, idx) => {
//                             const hero = heroSections[sectionIndex]
//                             const isMiddle = idx === 1
                            
//                             return (
//                                 <motion.button
//                                     key={sectionIndex}
//                                     onClick={() => scrollToSection(sectionIndex)}
//                                     whileHover={{ scale: 1.1, y: -10 }}
//                                     whileTap={{ scale: 0.95 }}
//                                     className={`group relative overflow-hidden rounded-xl transition-all ${
//                                         isMiddle ? 'w-32 h-20' : 'w-24 h-16'
//                                     } ${hero.preview} shadow-2xl border-2 border-white/20`}
//                                 >
//                                     {/* Preview overlay */}
//                                     <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all" />
                                    
//                                     {/* Section number */}
//                                     <div className="absolute top-2 left-2 bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-2 py-1 rounded">
//                                         {String(sectionIndex + 1).padStart(2, '0')}
//                                     </div>
                                    
//                                     {/* Section name */}
//                                     <div className="absolute bottom-2 left-2 right-2">
//                                         <p className="text-white text-xs font-semibold truncate">
//                                             {hero.name}
//                                         </p>
//                                     </div>

//                                     {/* Hover indicator */}
//                                     <motion.div
//                                         className="absolute inset-0 border-2 border-white opacity-0 group-hover:opacity-100 transition-opacity"
//                                         layoutId="preview-border"
//                                     />
//                                 </motion.button>
//                             )
//                         })}
//                     </motion.div>
//                 </AnimatePresence>
//             </div>

//             {/* Keyboard Navigation Hint */}
//             <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 2, duration: 1 }}
//                 className="fixed bottom-8 right-8 z-40 bg-slate-900/80 backdrop-blur-md text-white px-4 py-3 rounded-xl text-xs flex items-center gap-3"
//             >
//                 <div className="flex gap-2">
//                     <div className="w-6 h-6 bg-slate-700 rounded flex items-center justify-center">↑</div>
//                     <div className="w-6 h-6 bg-slate-700 rounded flex items-center justify-center">↓</div>
//                 </div>
//                 <span className="text-slate-300">Scroll to navigate</span>
//             </motion.div>
//         </div>
//     )
// }