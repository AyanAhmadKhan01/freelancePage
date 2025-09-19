import { Check, X } from "lucide-react";
import Image from "next/image";


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
        "Transparent pricing & full handover"
      ],
      "cta": {
        "text": "Book a Meeting",
        "href": "#book"
      }
    },
    {
      "title": "Offshore / Template Shops",
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
      <div className="mt-16 lg:mt-90 min-h-[80vh] px-4 lg:px-0">
          <div className="border-t-2 w-[120px] lg:w-[200px] ml-auto border-primary"></div>
        <Image src={"/Keyboard-Asterisk-1--Streamline-Freehand.svg"} width={40} height={40} className="lg:w-[50px] lg:h-[50px]" alt="gg"/>
        
        <div className="hidden lg:grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))]">
             {json.cards.map((c, i) => (
          <div key={i} className={`border-2 border-accent p-15 rounded-4xl ${i === 1 ? 'border-primary inset-shadow-[0_0_6px_#84cc16] animate-out' : i === 0 ? '-translate-y-65 ml-2': i === 2 ? 'translate-y-65 mr-2' : ''}`}>
            <h3 className="text-2xl">{c.title}</h3>
            <p className="text-sm mt-1 tracking-wider mb-6 border-b-1 pb-6">{c.subtitle}</p>
            {c.points.map((p, n) => (
            <ul key={n}>
              <li className={`flex tracking-wider py-2`}>{p} {i  === 1 ?  <Check className="ml-auto text-primary" width={30} height={25}/> : <X className="ml-auto text-red-600" width={30} height={25}/>  }</li>
            </ul>
              ))}
          </div>
              ))}
        </div>

        <div className="lg:hidden space-y-6">
             {json.cards.map((c, i) => (
          <div key={i} className={`border-2 p-6 rounded-2xl ${i === 1 ? 'border-primary bg-primary/5 shadow-lg shadow-primary/20' : 'border-accent/50'}`}>
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
            {c.cta && (
              <button className="mt-6 w-full bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors">
                {c.cta.text}
              </button>
            )}
          </div>
              ))}
        </div>
        
           <div className="border-2 w-[120px] lg:w-[200px] mr-auto border-primary mt-8 lg:mt-0"></div>
         <Image src={"/Keyboard-Asterisk-1--Streamline-Freehand.svg"} className="ml-auto" width={40} height={40} alt="gg"/>
      </div>
    </>
  );
}
