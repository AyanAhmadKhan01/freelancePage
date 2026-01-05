import { Check, X } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";


export default function whychooseus() {
  
 const json = {
  "cards": [
    {
      "title": "Traditional Agencies",
      "subtitle": "Slow timelines, heavy overhead.",
      "points": [
        "Long delivery cycles",
        "High fixed costs",
        "Limited technical ownership"
      ]
    },
    {
      "title": "Why Top Startups Choose Us",
      "subtitle": "Fast MVPs. Scalable architectures. Modern stacks.",
      "points": [
        "MVP in weeks, production-ready code",
        "Agency-grade quality with solo speed",
        "Transparent pricing & full handover",
        "Design, development, and deployment",
         "Domain and hosting included for 1 year",
      ],
    },
    {
      "title": "Template Shops",
      "subtitle": "Cheap upfront, costly later.",
      "points": [
        "Limited customization",
        "Hidden technical debt",
        "Poor performance & SEO"
      ]
    }
  ]
}



  return (
    <>  
    <div className="pl-10 py-10 border-y-1 mb-0 xl:mb-60">
      <h2 className="text-xl opacity-35">// Everything You Need to Launch Fast</h2>
      <h1 className="text-5xl mt-2">Why Us</h1>
    </div>
      <div  className="mt-0 px-4 lg:px-0">
          <div className="border-t-2 w-[120px] lg:w-[200px] ml-auto border-primary"></div>
           
        <Image src={"/Keyboard-Asterisk-1--Streamline-Freehand.svg"} width={40} height={40} className="lg:w-[50px] lg:h-[50px] " alt="cursor"/>

        <div className="hidden xl:grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] pb-90">
             {json.cards.map((c, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className={`border-y-1 p-14 h-fit  ${i === 1 ? 'bg-[rgba(255,255,255,.02)] animate-out' : i === 0 ? '-translate-y-65 ': i === 2 ? 'translate-y-65' : ''}`}
          >
            <h3 className="text-2xl">{c.title}</h3>
            <p className="text-sm mt-1 tracking-wider mb-6 border-b-1 pb-6">{c.subtitle}</p>
            {c.points.map((p, n) => (
            <ul key={n}>
              <li className={`flex tracking-wider py-2`}>{p} {i  === 1 ?  <Check className="ml-auto text-primary" width={30} height={25}/> : <X className="ml-auto text-red-600" width={30} height={25}/>  }</li>
            </ul>
              ))}
          </motion.div>
              ))}
        </div>

        <div className="xl:hidden  space-y-6 m-3">
             {json.cards.map((c, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`border-2 p-6 rounded-2xl ${i === 1 ? 'border-primary bg-primary/5 shadow-lg shadow-primary/20' : 'border-accent/50'}`}
          >
            <h3 className="text-xl font-semibold">{c.title}</h3>
            <p className="text-sm mt-2 tracking-wider mb-4 pb-4 border-b border-accent/30">{c.subtitle}</p>
            <div className="space-y-3">
              {c.points.map((p, n) => (
                <div key={n} className="flex items-start gap-3">
                  {i === 1 ? (
                    <Check className="text-primary flex-shrink-0 mt-0.5" size={20}/>
                  ) : (
                    <X className="text-red-500 flex-shrink-0 mt-0.5" size={20}/>
                  )}
                  <span className="text-sm tracking-wider leading-relaxed">{p}</span>
                </div>
              ))}
            </div>
          </motion.div>
              ))}
        </div>
        
           <div className="border-2 w-[120px] lg:w-[200px] mr-auto border-primary mt-8 lg:mt-0"></div>
         <Image  src={"/Keyboard-Asterisk-1--Streamline-Freehand.svg"} className="ml-auto" width={40} height={40} alt="cursor"/>
      </div>
    </>
  );
}