export default function whychooseus() {
  return (
    <>
      <div className="mt-100">
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] justify-center gap-y-6">
          <div className="border-2 border-accent m-4 p-5 rounded-4xl">
            <h3>Traditional Agencies</h3>
            <p>Slow timelines, heavy overhead.</p>
            <ul>
              <li>Long delivery cycles</li>
              <li>High fixed costs</li>
              <li>Limited technical ownership</li>
            </ul>
          </div>
          <div className="border-2 border-accent m-4 p-5 rounded-4xl">
            <h3>Why Top Startups Choose Us</h3>
            <p>Fast MVPs. Scalable architectures. Modern stacks.</p>
            <ul>
              <li>MVP in weeks — production-ready code</li>
              <li>Next.js · React · Node · Mongo</li>
              <li>Agency-grade quality with solo speed</li>
              <li>Transparent pricing & full handover</li>
            </ul>
            <a href="#book">Book a Meeting</a>
          </div>
          <div className="border-2 border-accent m-4 p-5 rounded-4xl">
            <h3>Offshore / Template Shops</h3>
            <p>Cheap upfront, costly later.</p>
            <ul>
              <li>Limited customization</li>
              <li>Hidden technical debt</li>
              <li>Poor performance & SEO</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
