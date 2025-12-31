import React from "react";
import { Github,Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
   const socialIcons = [
  {  icon: Twitter, Link: 'https://x.com/DevLegend_' },
  { icon: Github, Link: 'https://github.com/AyanAhmadKhan01' },
  {  icon: Linkedin, Link: 'https://www.linkedin.com/in/ayanahmadkhan/' },
];

    return(
        <>
        <div className="border-2 border-t-transparent mx-4 sm:mx-8 lg:mx-20  pb-6 lg:pb-0">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mt-8 lg:mt-16 mx-3 sm:mx-6 pb-6 lg:pb-10 border-b-2 gap-6 lg:gap-0">
                
                <div className="text-center lg:text-left">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl"><span className="font-extrabold tracking-tighter">Mvp</span> Fast</h1>
                    <p className="text-sm sm:text-base mt-1">Launch your MVP faster than ever, start today.</p>
                </div>
                
           
                <div className="flex justify-center lg:justify-end h-fit w-full lg:w-auto">
                  {socialIcons.map((s, i) => {
                    const IconComponent = s.icon;
                    return (
                <div key={i} className="flex rounded-lg bg-[rgba(255,255,255,.07)] m-2 lg:m-4 p-3 border-b-4 border-r-4 cursor-pointer hover:scale-105 transition-transform">
                   <Link href={s.Link} target="_blank"><IconComponent className="w-5 h-5 sm:w-6 sm:h-6 lg:w-[30px] lg:h-[30px]" /></Link>
                </div>
                    );
                   })}
               </div>
            </div>
            
    
            <div className="flex flex-col sm:flex-row items-center justify-between my-6 lg:my-10 mx-3 sm:mx-5 gap-3 sm:gap-0 text-center sm:text-left">
             <h2 className="text-xs sm:text-sm lg:text-base">© 2025 All Rights Reserved</h2>
           <h2 className="text-xs sm:text-sm lg:text-base">
  Designed & Developed by{" "}
  <Link 
    href="https://devlegend.vercel.app/" 
    target="_blank" 
    className="text-primary hover:underline"
  >
    Ayan
  </Link>
</h2>

             </div>
        </div>
        </>
    )
}