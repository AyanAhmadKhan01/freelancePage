'use client'

import { useState } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return(
        <>
        <div className="flex justify-center sticky top-0 z-50">
            <div className="flex justify-between items-center w-[90%] mt-4 lg:mt-10 mb-2 lg:mb-5 p-3 lg:p-4 rounded-2xl lg:rounded-4xl border-2 bg-[rgba(255,255,255,.04)] backdrop-blur-md">
                
                <div>
                    <h2 className="text-lg lg:text-xl"><span className="font-extrabold tracking-tighter">Mvp</span> Fast</h2>    
                </div>
                
                <div className="hidden lg:flex items-center gap-10">
                    <Link href={'#home'}>
                    <h3 className="cursor-pointer hover:text-primary transition-colors">Home</h3>
                    </Link>
                    <Link href={'#feature'}>
                    <h3 className="cursor-pointer hover:text-primary transition-colors">Services</h3>
                    </Link>
                    <Link href={'#tech'}>
                    <h3 className="cursor-pointer hover:text-primary transition-colors">Technologies We use?</h3>
                    </Link>
                      <Link href={'#book'}>
                    <h3 className="cursor-pointer hover:text-primary transition-colors mr-5">Book a Meeting</h3>
                    </Link>
                   
                </div>

                <div className="flex lg:hidden items-center gap-3">
                
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2 rounded-lg hover:bg-primary/20 transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>
        </div>

        {isOpen && (
            <div className="lg:hidden fixed top-28 left-1/2 transform -translate-x-1/2 w-[90%] z-40 bg-[rgba(255,255,255,.08)] backdrop-blur-md rounded-2xl border-2 border-primary/20 shadow-2xl">
                <div className="flex flex-col p-6 space-y-4">
                     <Link href={'#home'}>
                    <h3 
                        className="cursor-pointer hover:text-primary transition-colors py-2 border-b border-primary/10"
                        onClick={() => setIsOpen(false)}
                    >
                        Home
                    </h3>
                    </Link>
                       <Link href={'#pricing'}>
                    <h3 
                        className="cursor-pointer hover:text-primary transition-colors py-2 border-b border-primary/10"
                        onClick={() => setIsOpen(false)}
                    >
                        Pricing
                    </h3>
                    </Link>
                     <Link href={'#feature'}>
                    <h3 
                        className="cursor-pointer hover:text-primary transition-colors py-2 border-b border-primary/10"
                        onClick={() => setIsOpen(false)}
                    >
                        Services
                    </h3>
                    </Link>
                     <Link href={'#tech'}>
                    <h3 
                        className="cursor-pointer hover:text-primary transition-colors py-2 border-b border-primary/10"
                        onClick={() => setIsOpen(false)}
                    >
                        Technologies We use?
                    </h3>
                    </Link>
                     <Link href={'#book'}>
                    <h3 
                        className="cursor-pointer hover:text-primary transition-colors py-2"
                        onClick={() => setIsOpen(false)}
                    >
                        Book a Meeting
                    </h3>
                    </Link>
                </div>
            </div>
        )}
        </>
    )
}