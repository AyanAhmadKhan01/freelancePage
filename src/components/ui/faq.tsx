import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function Faq() {
  return (
    <>
        <div className="text-center pr-10 mt-5  py-10 border-y-1">
  <h2 className="text-xl opacity-35">{"// Common Questions"}</h2>
  <h1 className="text-5xl mt-2">FAQ</h1>
</div>
 
    <Accordion
      type="single"
      collapsible
      className="md:mx-20 md:px-20 mx-8 px-8 border-l-2 border-r-2  py-20 "
      defaultValue="item-1"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>What services do I offer?</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance ">
          <p>
           I handle the full process design, development, and basic hosting/domain setup. If you need ongoing changes after launch, I offer that too.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>How long does a website take?</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
           Depends on scope. A simple one-pager usually takes 2–7 days. Bigger, custom projects can take a few weeks. I’ll give you a realistic timeline before we start, not just a marketing number.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>How much do you charge?</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
           It depends on what you need. Check the pricing section above for a starting point, I’ll confirm exact pricing once I understand your project.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>Do you work with small businesses and first-time founders?</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
          Yes actually, that’s most of who I work with. I’m building my freelance practice right now, so I put a lot of care into every project I take on.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger>Can you improve or redesign an existing site?</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
           Yes. I can rebuild it, speed it up, fix SEO issues, or just give it a visual refresh whatever it needs.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-6">
        <AccordionTrigger>Will my site work well on phones?</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
          Yes, every site I build is fully responsive and tested across devices before delivery.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-7">
        <AccordionTrigger>Do you offer support after the site is live?</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
           Yes. I offer flexible support so your site stays updated and working properly. Just message me.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-8">
        <AccordionTrigger>Are you new to freelancing?</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            I’m early in my freelance journey, but I’ve been building with these tools for a while. What I lack in years, I make up for with direct communication, fair pricing, and genuinely caring about getting your project right.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
       </>
  )
}
