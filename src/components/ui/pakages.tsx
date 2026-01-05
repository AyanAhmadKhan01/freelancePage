import { Globe, Layers, Box, Check } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";

export default function Service() {
    const services = [
  {
    title: "AI Powered Website",
    tagline: "Fast, fully ready, worry-free",
    ideal: 'Portfolio, Landing Page, Small Business',
    features: [ 
         "Up to 1 pages",
         "5-8 sections per page",
         "Clean design",
         "Fully responsive",
         "Basic SEO",
         "Basic Hover, Transition",
         "1 Revision (text/colors only)",
         "Delivery in 2–7 days",
         ],
          
price: "$149",
    icon: <Globe size={75} className="text-primary" />
  },
  {
    title: "Custom Website",
    tagline: "Fully custom, clean code",
    ideal: 'Startup, Professional Portfolio, Marketing Site',
     features: [
       "Up to 4 pages",
       "6 Section Per Page",
       "Heavy design",
       "Fully responsive",
       "SEO-ready",
       "Limited animations included",
        "2 Revision",
        "Delivery in 15–30 days",
     ],
     price: "$499",
    icon: <Layers size={75}  className="text-primary" />
  },
  {
    title: "Full Scale Web App",
    tagline: "Serious products, scalable MVP",
    ideal: 'SaaS, Marketplaces, Product MVP',
    features: [
      "Up to 15 pages",
       "6 Section Per Page",
      "Complex design",
      "Scalable, responsive",
      "SEO-ready",
      "Animations included",
      "4 Revision",
      "Delivery in 5–18 weeks",
    ],
    price: '$1999',
    icon: <Box size={75}  className="text-primary" />
  }
];
    return(
        <> <div id="pricing" className="text-center py-10 border-y-1">
  <h2 className="text-xl opacity-35">// Pay Once. Own Your Website.</h2>
  <h1 className="text-5xl mt-2">Simple Pricing</h1>
</div>

          <div className="flex flex-wrap lg:flex-nowrap justify-center gap-5 m-auto md:mx-10 ">
      {services.map((service, idx) => (
        <div key={idx} className={`border-x-2 md:px-5 px-0 border-[rgba(255,255,255,0.09)] w-[500px] shadow-sm backdrop-blur-md ${idx === 1 ? 'bg-[rgba(255,255,255,.05)]' : ''}`}>
             <div className="flex gap-12 items-center justify-center my-10"> 
              <h1 className="text-4xl">{service.price}<span className="text-xl opacity-60">/One-Time</span></h1>
              {service.icon}
              </div>
             
          <div className="flex flex-col items-centern mb-2 space-x-3 p-6">
            <h2 className="text-4xl font-semibold">{service.title}</h2>
              <p className=" text-[rgba(255,255,255,0.6)]">{service.tagline}</p>
          </div>
        
<div className="border-y-2 py-6 pl-5">
         <h2 className="uppercase opacity-55 text-sm">Ideal for</h2>
          <h1 className="text-xl mt-1 mr-4">{service.ideal}</h1>
          </div>
          <div className="p-6">
     {service.features.map((feature, i) => (
      <div key={i} className="flex gap-2 my-4">
        <Check/>
        {feature}
      </div>
     ))}      
        </div>
             <Link href={'/book'}>
            <div className={`flex justify-center w-[90%] m-auto rounded-full mb-10 p-3 text-lg  ${idx === 1 ? 'bg-[rgb(163,230,53)]' : idx === 0 ? 'bg-[rgb(255,255,255,.05)]' : idx === 2 ? 'bg-[rgb(255,255,255,.05)]' : 'bg-[rgb(255,255,255,.05)]'}`}>Getting Started</div>
              </Link>
        </div>
      ))}
    </div>
    </>
    )
}