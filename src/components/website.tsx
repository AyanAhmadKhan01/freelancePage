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
    },
    {
        title: "SaaS Landing Page",
        description: "Conversion-focused landing page designed for early-stage startups.",
        cover:
            "https://res.cloudinary.com/dt5qoqw6u/image/upload/v1767587128/Screenshot_2026-01-05_095509_diewjf.png",
              link: 'https://demo-landing-page-1.vercel.app/',
    },
    {
        title: "Demo Landing Page",
        description: "Flagship app for tracking and managing nicotine pouches.",
        cover:
            "https://res.cloudinary.com/dt5qoqw6u/image/upload/v1767589156/Screenshot_2025-10-16_171318_authfi.png",
              link: 'https://tibblab.vercel.app',

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
            <div className="mx-auto px-2 flex w-full flex-col gap-5 mt-12 xl:mt-0 sm:px-6 lg:px-8">
                  <div className="flex items-center gap-3 self-start lg:self-end">
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
                    className="no-scrollbar grid grid-flow-col md:auto-cols-[minmax(530px,1fr)]  auto-cols-[minmax(340px,1fr)] gap-6 overflow-x-auto snap-x snap-mandatory"
                >
                    {projects.map((project, index) => (
                        <article
                            key={project.title}
                            data-card
                            className="group relative flex w-full min-w-0 snap-start flex-col overflow-hidden transition-transform duration-300 hover:-translate-y-1 border-l-2 pl-4"
                        >
                            <Link href={project.link} target="_blank">
                            <div className="bg-primary p-9 h-full ">
                               
                                <img
                                    src={project.cover}
                                    alt={project.title}
                                    className="relative w-full object-contain h-[230px] transition duration-500 group-hover:scale-105 "
                                    loading="lazy"
                                />
                             
                            </div>
                            </Link>

                            <div className="flex flex-1 flex-col  pt-7 pb-5">
                                <div >
                                    <h3 className="text-2xl font-bold tracking-tight">{project.title}</h3>
                                    <p className="text-base leading-relaxed text-neutral-600">{project.description}</p>
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