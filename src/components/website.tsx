// @ts-nocheck
"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight, MoveRight } from "lucide-react";
import Link from "next/link";

const projects = [
    {
        title: "Tibb Labs",
        description: "Influencer Marketing Agency",
        cover:
            "https://res.cloudinary.com/dt5qoqw6u/image/upload/v1767320785/Screenshot_2026-01-02_072749_lmbt9h.png",
            link: 'https://tibblab.vercel.app',
            time: '20days'
    },
     {
        title: "Video Editor Portfolio",
        description: "Responsive portfolio highlighting video editing projects.",
        cover:
            "https://res.cloudinary.com/dt5qoqw6u/image/upload/v1773523289/Screenshot_2026-03-15_025113_hplcjw.png",
              link: 'https://norzo16.vercel.app',
               time: '3days'

    },
    {
        title: "SaaS Landing Page",
        description: "Conversion-focused landing page",
        cover:
            "https://res.cloudinary.com/dt5qoqw6u/image/upload/v1767587128/Screenshot_2026-01-05_095509_diewjf.png",
              link: 'https://demo-landing-page-1.vercel.app/',
               time: '1day'
    },
];



export default function Website() {
    const trackRef = useRef(null);

    const shift = (direction) => {
        const track = trackRef.current;
        if (!track) return;
        const firstCard = track.querySelector("[data-card]");
        const gap = 24; 
        const cardWidth = firstCard?.clientWidth ?? 360;
        const delta = cardWidth + gap;
        track.scrollBy({ left: direction === "next" ? delta : -delta, behavior: "smooth" });
    };

    return (
        <>
            <div className="mx-auto px-2 flex w-full flex-col gap-5 mt-12 xl:mt-0 sm:px-6 lg:px-8  pt-7 rounded-t-3xl">
                  <div className="flex items-center  mb-5 gap-3 self-start lg:self-end">
                        <button
                            type="button"
                            onClick={() => shift("prev")}
                            className="group inline-flex h-12 w-12 items-center justify-center rounded-full border border-black/5 bg-white text-neutral-900 shadow-[0_12px_30px_rgba(0,0,0,0.08)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(0,0,0,0.12)]"
                            aria-label="Previous projects"
                        >
                            <ChevronLeft className="h-6 w-6 transition group-hover:-translate-x-0.5" />
                        </button>
                        <button
                            type="button"
                            onClick={() => shift("next")}
                            className="group inline-flex h-12 w-12 items-center justify-center rounded-full border border-black/5 bg-neutral-900 text-white shadow-[0_12px_30px_rgba(0,0,0,0.16)] transition hover:-translate-y-0.5 hover:bg-neutral-800"
                            aria-label="Next projects"
                        >
                            <ChevronRight className="h-6 w-6 transition group-hover:translate-x-0.5" />
                        </button>
                    </div>

                <div
                    ref={trackRef}
                    className="backdrop-blur-2xl no-scrollbar grid grid-flow-col md:auto-cols-[minmax(530px,1fr)] auto-cols-[minmax(400px,1fr)] gap-6 overflow-x-auto snap-x snap-mandatory"
                >
                    {projects.map((project, index) => (
                        <article
                            key={project.title}
                            data-card
                            className={`group relative flex w-full min-w-0 snap-start flex-col overflow-hidden transition-transform duration-300 pl-4 ${[1,2,0].includes(index) ? 'border-l-1 border-r-1 border-t-1 bg-[rgba(255,255,255,.02)]' : ''}`}
                        >
                            <Link href={project.link} target="_blank">
                            <div className="p-2 rounded-4xl h-full">
                               
                                <img
                                    src={project.cover}
                                    alt={project.title}
                                    className="relative h-[300px] w-full object-contain transition duration-500 rounded-2xl  "
                                    loading="lazy"
                                />
                             
                            </div>
                            </Link>

                            <div className="flex flex-1 flex-col pb-4 pt-7 ">
                                <div >
                                    <h3 className="text-2xl font-bold tracking-tight">{project.title}</h3>
                                    <p className="text-base leading-relaxed text-neutral-600">{project.description}</p>
                                </div>
                             <div className="flex justify-between mt-10">
                                <div>
                                <h1>Time</h1>
                                 <h3 className="text-2xl text-primary font-bold tracking-tight ">{project.time}</h3>
                                 </div>
                                 <h2 className="flex items-center px-8 cursor-pointer bg-[rgba(255,255,255,.05)] border-[rgba(255,255,255,.05)] border-2 mr-5 rounded-4xl hover:scale-105 transition-all"><Link target="_blank" href={project.link}>View More</Link></h2>
                             </div>
                                
                                <div className="mt-auto flex items-center justify-between pt-2">                                            
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
            <style jsx>{`
                .no-scrollbar {
                    scrollbar-width: none;
                }
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
     </>
    );
}