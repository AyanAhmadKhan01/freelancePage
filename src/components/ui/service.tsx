export default function Service() {
    return(
        <>
     <div className="mt-[100px]">
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(400px,_1fr))] gap-x-2 gap-y-2 mx-5 ">
        <div className="border-2 border-[rgba(255,255,255,.1)] rounded-2xl overflow-hidden p-10 col-span-2 h-[400px]">
            <h1 className="tracking-tighter text-9xl text-[rgba(255,255,255,1)] mb-7">Instant <span className="text-accent">One-Click</span> Deployment</h1>
            <div className="relative ">
            <img className="rounded-3xl absolute scale-105 p-3 -z-10 border-4 border-[rgba(255,255,255,.3)]" src="/Landing Page Image.PNG" alt="card1" />
            </div>
          </div>
          <div className="border-2 border-[rgba(255,255,255,.1)] rounded-2xl overflow-hidden p-6">
            <h1 className="tracking-tighter text-5xl text-[rgba(255,255,255,1)] mb-4">Real-Time Analytics Dashboard</h1>
            <div className="relative">
            <img className="rounded-3xl absolute scale-110 top-8 left-0 -z-10 border-4 border-[rgba(255,255,255,.5)]" src="/Card 2.PNG" alt="card2" />
            </div>
          </div>
          <div className="border-2 border-[rgba(255,255,255,.1)] rounded-2xl overflow-hidden p-4 h-[350px]">
            <h1 className="tracking-tighter text-3xl text-[rgba(255,255,255,1)] mb-10">Mail System</h1>
            <div className="relative">  
            <img className="rounded-3xl absolute scale-150 top-10 right-[100px] -z-20 border-4 border-[rgba(255,255,255,.03)]" src="/Card 3.PNG" alt="card3" />
            <img className="rounded-3xl absolute scale-150 top-10 right-[300px] -z-10 border-4 border-[rgba(255,255,255,.09)]" src="/Card 3.PNG" alt="card3" />
            <img className="rounded-3xl absolute scale-150 top-10 right-[450px] -z-10 border-4 border-[rgba(255,255,255,.2)]" src="/Card 3.PNG" alt="card3" />
            </div>
          </div>
          <div className=" p-6 border-2 border-[rgba(255,255,255,.05)] rounded-2xl col-span-2 overflow-hidden">
            <h1 className="text-5xl mb-6">Pre-Built Templates</h1>
           <div className="relative">
            <img className="absolute left-0  w-[500px] border-4 border-[rgba(255,255,255,.2)] rounded-3xl" src="https://res.cloudinary.com/dt5qoqw6u/image/upload/v1742946652/yd8w5fs8ymdob7jegas3.png" alt="template" />
            <img className="absolute -right-[50px] w-[600px] border-4 border-[rgba(255,255,255,.2)] rounded-3xl" src="https://res.cloudinary.com/dt5qoqw6u/image/upload/v1743125583/nnfwuq4npmxr1kmtsycs.png" alt="template" />
           </div>
          </div>
        </div>
      </div>
        </>
    )
}