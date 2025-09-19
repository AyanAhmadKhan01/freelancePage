import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function Faq() {
  return (
    <Accordion
      type="single"
      collapsible
      className=" md:mx-20  md:px-20 mx-8 px-8 border-l-2 border-r-2  py-20"
      defaultValue="item-1"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>What services do we offer?</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
           We provide end-to-end web solutions, including custom website design, development, e-commerce, web apps, and ongoing support.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>How long does it take us to build a website?</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
           Timelines depend on the project scope. A basic website usually takes 2–4 weeks, while more complex projects may take 6–12 weeks.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>How much do our websites cost?</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
           Our pricing varies by scope and features. After understanding your requirements, we provide a clear, tailored quote.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>Do we work with small businesses and startups?</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
          Yes, we specialize in helping startups and small businesses build professional, scalable online presences.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger>Can we redesign or improve an existing website?</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
           Absolutely. We can modernize your site, improve speed, optimize for SEO, and refresh the overall design.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-6">
        <AccordionTrigger>Will your website be mobile-friendly?</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
          Yes. We ensure all our websites are fully responsive and work seamlessly across devices.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-7">
        <AccordionTrigger>Do we provide ongoing maintenance?</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
           Yes, we offer flexible maintenance and support packages to keep your site updated, secure, and performing well.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
