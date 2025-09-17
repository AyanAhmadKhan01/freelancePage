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
      <div className="mt-90 min-h-[80vh]">
          <div className="border-t-2 w-[200px] ml-auto border-primary"></div>
        <Image src={"/Keyboard-Asterisk-1--Streamline-Freehand.svg"} width={50} height={50} alt="gg"/>
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] ">
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
           <div className="border-2 w-[200px]  mr-auto border-primary"></div>
         <Image src={"/Keyboard-Asterisk-1--Streamline-Freehand.svg"} className="ml-auto" width={50} height={50} alt="gg"/>
      </div>
    </>
  );
}
