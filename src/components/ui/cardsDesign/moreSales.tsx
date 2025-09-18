import { Eye, MousePointerClick, DollarSign } from "lucide-react"

export default function MoreSales() {
  return (
    <div className="flex flex-col w-full h-[410px] rounded-4xl ">
      <div className="flex mb-4 border-b-2 pb-4">
        <h1 className="text-lg font-semibold">Analytics</h1>
        <h2 className="ml-auto text-sm opacity-70">Last 7 Days</h2>
      </div>

      <div className="flex items-center bg-[rgba(255,255,255,.05)] rounded-xl p-5 shadow-sm hover:shadow-md transition">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 mr-3">
          <Eye height={28} width={28} className="text-primary" />
        </div>
        <h1 className="text-lg font-medium">Total Views</h1>
        <h2 className="ml-auto text-xl font-semibold">9.6K</h2>
      </div>

      <div className="flex items-center mt-3 bg-[rgba(255,255,255,.05)] rounded-xl p-5 shadow-sm hover:shadow-md transition">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 mr-3">
          <MousePointerClick height={28} width={28} className="text-primary" />
        </div>
        <h1 className="text-lg font-medium">Total Clicks</h1>
        <h2 className="ml-auto text-xl font-semibold">2.2K</h2>
      </div>

      <div className="flex items-center mt-3 bg-[rgba(255,255,255,.05)] rounded-xl p-5 shadow-sm hover:shadow-md transition">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 mr-3">
          <DollarSign height={28} width={28} className="text-primary" />
        </div>
        <h1 className="text-lg font-medium">Total Earnings</h1>
        <h2 className="ml-auto text-xl font-semibold text-primary">$ 3800</h2>
      </div>

    </div>
  )
}
