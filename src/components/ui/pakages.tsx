import { Globe, Layers, Box, Check } from "lucide-react";
import Link from "next/link";

export default function Service() {
    const services = [
  {
    title: "Starter Site",
    tagline: "A clean, fast site to get you online",
    ideal: 'Portfolio, Landing Page, Small Business',
    features: [ 
         "Up to 1 page",
         "5–8 sections",
         "Clean, simple design",
         "Fully responsive",
         "Basic SEO setup",
         "Light hover/transition animations",
         "1 round of revisions (text/colors)",
         "Delivered in 2–7 days",
         ],
          
price: "$149",
ruppes: "₹12,500",
    icon: <Globe size={75} className="text-primary" />
  },
  {
    title: "Custom Site",
    tagline: "Fully custom, written cleanly, built to last",
    ideal: 'Startup, Professional Portfolio, Marketing Site',
     features: [
       "Up to 4 pages",
      "6 sections per page",
      "Custom design, not a template",
       "Fully responsive",
       "SEO-ready",
      "A few thoughtful animations",
       "2 rounds of revisions",
       "Delivered in 15–30 days",
     ],
    price: "$499",
    ruppes: "₹41,500",
    icon: <Layers size={75}  className="text-primary" />
  },
  {
    title: "Web App",
    tagline: "For real products that need to scale",
    ideal: 'SaaS, Marketplaces, Product MVP',
    features: [
      "Up to 15 pages",
      "6 sections per page",
          "More complex, custom design",
          "Scalable and fully responsive",
      "SEO-ready",
      "Animations included",
      "4 rounds of revisions",
      "Delivered in 5–18 weeks",
    ],
    price: '$1,999',
     ruppes: "₹1,66,000",
    icon: <Box size={75}  className="text-primary" />
  }
];
    return(
        <> <div id="pricing" className="text-center py-10 border-y-1">
  <h2 className="text-xl opacity-35">{"// Pay Once. Own Your Website."}</h2>
  <h1 className="text-5xl mt-2">Simple, Honest Pricing</h1>
</div>

          <div className="flex flex-wrap lg:flex-nowrap justify-center gap-5 m-auto md:mx-10 ">
      {services.map((service, idx) => (
        <div key={idx} className={`border-x-2 md:px-5 px-0 border-[rgba(255,255,255,0.09)] w-[500px] shadow-sm backdrop-blur-md ${idx === 1 ? 'bg-[rgba(255,255,255,.05)]' : ''}`}>
       
            <div className="flex gap-6 sm:gap-10 items-center justify-center my-10">
  <div className="text-center sm:text-right">
    <h1 className="text-3xl font-semibold leading-tight">
      {service.price}
      <span className="text-lg opacity-60"> / one-time</span>
    </h1>
    <p className="text-base text-primary/80 mt-1">
     {service.ruppes}
    </p>
  </div>
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
             <Link href={`https://wa.me/918172972398?text=${encodeURIComponent(`Hi Ayan, I’m interested in the ${service.title} plan`)}`}>
            <div className={`flex justify-center w-[90%] m-auto rounded-full mb-10 p-3 text-lg  ${idx === 1 ? 'bg-[rgb(163,230,53)]' : idx === 0 ? 'bg-[rgb(255,255,255,.05)]' : idx === 2 ? 'bg-[rgb(255,255,255,.05)]' : 'bg-[rgb(255,255,255,.05)]'}`}>Let&apos;s Talk</div>
              </Link>
        </div>
      ))}
    </div>
    </>
    )
}