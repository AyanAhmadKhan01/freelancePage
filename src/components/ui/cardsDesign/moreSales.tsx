import { Eye, MousePointerClick, DollarSign } from "lucide-react"

export default function MoreSales() {
  return (
    <div className="flex flex-col w-full h-full rounded-2xl lg:rounded-4xl p-1 sm:p-2 lg:p-3">
      <div className="flex mb-2 sm:mb-3 border-b-2 pb-2 sm:pb-3 px-1 sm:px-2 lg:px-0 items-center">
        <h1 className="font-semibold whitespace-nowrap" style={{ 
          fontSize: 'clamp(0.8rem, 0.6rem + 0.4vw, 1.05rem)',
          lineHeight: 'clamp(1rem, 0.8rem + 0.5vw, 1.3rem)'
        }}>Analytics</h1>
        <h2 className="ml-auto opacity-70 whitespace-nowrap" style={{ 
          fontSize: 'clamp(0.65rem, 0.5rem + 0.3vw, 0.8rem)',
          lineHeight: 'clamp(0.8rem, 0.6rem + 0.4vw, 1rem)'
        }}>Last 7 Days</h2>
      </div>


      <div className="space-y-1.5 sm:space-y-2 px-1 sm:px-2 lg:px-0 flex-1">
        <div className="flex items-center bg-[rgba(255,255,255,.05)] rounded-lg lg:rounded-xl p-2 sm:p-3 lg:p-4 shadow-sm hover:shadow-md transition-all duration-300 ease-in-out min-h-[2.5rem] sm:min-h-[3rem]">
          <div className="flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-full bg-primary/20 mr-3 flex-shrink-0">
            <Eye className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-primary" />
          </div>
          <div className="flex-1 min-w-0 pr-2">
            <h1 className="font-medium truncate" style={{ 
              fontSize: 'clamp(0.7rem, 0.5rem + 0.4vw, 0.9rem)',
              lineHeight: 'clamp(0.9rem, 0.7rem + 0.5vw, 1.1rem)'
            }}>Total Views</h1>
          </div>
          <h2 className="font-semibold flex-shrink-0 whitespace-nowrap" style={{ 
            fontSize: 'clamp(0.9rem, 0.7rem + 0.5vw, 1.15rem)',
            lineHeight: 'clamp(1.1rem, 0.9rem + 0.6vw, 1.4rem)'
          }}>9.6K</h2>
        </div>

        <div className="flex items-center bg-[rgba(255,255,255,.05)] rounded-lg lg:rounded-xl p-2 sm:p-3 lg:p-4 shadow-sm hover:shadow-md transition-all duration-300 ease-in-out min-h-[2.5rem] sm:min-h-[3rem]">
          <div className="flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-full bg-primary/20 mr-3 flex-shrink-0">
            <MousePointerClick className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-primary" />
          </div>
          <div className="flex-1 min-w-0 pr-2">
            <h1 className="font-medium truncate" style={{ 
              fontSize: 'clamp(0.7rem, 0.5rem + 0.4vw, 0.9rem)',
              lineHeight: 'clamp(0.9rem, 0.7rem + 0.5vw, 1.1rem)'
            }}>Total Clicks</h1>
          </div>
          <h2 className="font-semibold flex-shrink-0 whitespace-nowrap" style={{ 
            fontSize: 'clamp(0.9rem, 0.7rem + 0.5vw, 1.15rem)',
            lineHeight: 'clamp(1.1rem, 0.9rem + 0.6vw, 1.4rem)'
          }}>2.2K</h2>
        </div>


        <div className="flex items-center bg-[rgba(255,255,255,.05)] rounded-lg lg:rounded-xl p-2 sm:p-3 lg:p-4 shadow-sm hover:shadow-md transition-all duration-300 ease-in-out min-h-[2.5rem] sm:min-h-[3rem]">
          <div className="flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-full bg-primary/20 mr-3 flex-shrink-0">
            <DollarSign className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-primary" />
          </div>
          <div className="flex-1 min-w-0 pr-2">
            <h1 className="font-medium truncate" style={{ 
              fontSize: 'clamp(0.7rem, 0.5rem + 0.4vw, 0.9rem)',
              lineHeight: 'clamp(0.9rem, 0.7rem + 0.5vw, 1.1rem)'
            }}>Total Earnings</h1>
          </div>
          <h2 className="font-semibold text-primary flex-shrink-0 whitespace-nowrap" style={{ 
            fontSize: 'clamp(0.9rem, 0.7rem + 0.5vw, 1.15rem)',
            lineHeight: 'clamp(1.1rem, 0.9rem + 0.6vw, 1.4rem)'
          }}>$ 3800</h2>
        </div>
      </div>

    </div>
  )
}
