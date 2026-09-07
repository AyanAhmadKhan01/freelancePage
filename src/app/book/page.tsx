"use client"

import Link from "next/link"
import { motion } from "motion/react"
import { MessageSquare, Brush, Code2, Rocket, MessagesSquare, ArrowRight } from "lucide-react"

const steps = [
  {
    title: "Step 1 · Send a Message",
    detail: "Message me on WhatsApp or email with a quick idea of what you need. A call is optional, not required.",
    icon: <MessageSquare className="size-6" />,
    badge: "Day 0",
  },
  {
    title: "Step 2 · Scope & Plan",
    detail: "We finalize pages, sections, and success criteria. Written scope shared same day.",
    icon: <Brush className="size-6" />,
    badge: "Day 0",
  },
  {
    title: "Step 3 · 40% Advance",
    detail: "Pay 40% to start the build. Remaining 60% is due at delivery.",
    icon: <Code2 className="size-6" />,
    badge: "Day 0–1",
  },
  {
    title: "Step 4 · Build Starts",
    detail: "I start building based on what we agreed on.",
    icon: <Rocket className="size-6" />,
    badge: "Day 1–3",
  },
  {
    title: "Step 5 · Daily Updates",
    detail: "You’ll get regular written updates — Notion, WhatsApp, or email, whatever’s easiest for you.",
    icon: <MessagesSquare className="size-6" />,
    badge: "Daily",
  },
  {
    title: "Step 6 · Delivery",
    detail: "I deploy the site, connect analytics, and walk you through everything in writing.",
    icon: <ArrowRight className="size-6" />,
    badge: "Launch",
  },
];



export default function BookNow() {
    return (
        <>
        {steps.map(() => {

        })}
            <div className="bg-black border-2 border-[rgba(255,255,255,0.09)] min-h-screen">
                <div className="relative mx-auto flex max-w-[1200px] flex-col gap-12 px-5 py-16 lg:px-10 lg:py-20">
                    <div className="pointer-events-none absolute inset-y-6 -left-6 hidden h-[calc(100%-3rem)] w-[2px] rounded-full bg-[rgba(255,255,255,0.14)] lg:block" style={{ backgroundImage: "linear-gradient(180deg, rgba(255,255,255,0.14) 70%, transparent 70%)", backgroundSize: "6px 18px" }} />
                    <div className="pointer-events-none absolute inset-y-6 -right-6 hidden h-[calc(100%-3rem)] w-[2px] rounded-full bg-[rgba(255,255,255,0.14)] lg:block" style={{ backgroundImage: "linear-gradient(180deg, rgba(255,255,255,0.14) 70%, transparent 70%)", backgroundSize: "6px 18px" }} />
                    <div className="pointer-events-none absolute -left-8 top-10 hidden h-2 w-8 rounded-full bg-[rgba(255,255,255,0.08)] lg:block" />
                    <div className="pointer-events-none absolute -right-8 bottom-12 hidden h-2 w-8 rounded-full bg-[rgba(255,255,255,0.08)] lg:block" />
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-4 text-center lg:text-left"
                    >
                        <p className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-primary">
                            Ayan Codes · My Process
                        </p>
                        <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                            Here’s How We’d Work Together
                        </h1>
                        <p className="text-base text-white/70 sm:text-lg lg:max-w-3xl">
                            I handle design, development, and hosting directly. We’ll agree on the scope in writing, I’ll keep you updated as I build, and you’ll know what’s happening at every step.
                        </p>
                        <Link href="https://wa.me/918172972398?text=Hi%20Ayan%2C%20I%27d%20like%20to%20talk%20about%20a%20project" className="inline-flex items-center justify-center">
                            <motion.span
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="rounded-2xl border-primary/60 bg-primary px-4 py-3 text-sm font-semibold text-black shadow-md"
                            >
                                Send a Message
                            </motion.span>
                        </Link>
                    </motion.div>

                    <div className="grid gap-6 lg:grid-cols-2">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.title}
                                initial={{ opacity: 0, y: 24 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 * index }}
                                className="rounded-3xl border-2 border-[rgba(255,255,255,0.09)] bg-[rgba(255,255,255,0.05)] p-5 shadow-sm"
                            >
                                <div className="flex h-full items-start gap-4">
                                    <div className="flex h-full w-[30%] items-center justify-center rounded-2xl border border-primary/30 bg-primary/10 text-primary">
                                        {step.icon}
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2 text-xs uppercase tracking-wide text-primary">
                                            <span className="rounded-full bg-primary/10 px-3 py-1 text-[11px] font-semibold">{step.badge}</span>
                                            <span className="h-px flex-1 bg-primary/40" />
                                        </div>
                                        <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                                        <p className="text-sm text-white/70">{step.detail}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>   
                </div>
            </div>
        </>
    )
}