import { ShieldCheck, Lock, Key } from "lucide-react"

export default function Security() {
  return (
    <>
<div className="w-full h-full perspective-[1200px] flex items-center justify-center p-2">
  <div className="w-full h-full rounded-2xl lg:rounded-3xl p-2 sm:p-3 lg:p-4
                  bg-[rgba(255,255,255,.05)] border-2 border-primary outline-4 outline-primary/30
                  transform rotate-x-[20deg] rotate-y-[15deg]
                  shadow-[10px_10px_50px_rgba(0,0,0,0.3)]
                  before:absolute before:inset-0 before:rounded-2xl lg:before:rounded-3xl before:shadow-[inset_0_10px_20px_rgba(255,255,255,0.1)] relative
                  max-h-[400px] min-h-[200px]">
  
  <div className="flex mb-2 sm:mb-3 border-b pb-1 sm:pb-2 items-center">
    <h1 
      className="font-semibold whitespace-nowrap"
      style={{ 
        fontSize: 'clamp(0.8rem, 1.2vw + 0.5rem, 1.05rem)',
        lineHeight: 'clamp(1rem, 1.5vw + 0.6rem, 1.3rem)'
      }}
    >
      Security
    </h1>
    <h2 
      className="ml-auto opacity-70 whitespace-nowrap"
      style={{ 
        fontSize: 'clamp(0.65rem, 0.8vw + 0.4rem, 0.8rem)',
        lineHeight: 'clamp(0.8rem, 1vw + 0.5rem, 1rem)'
      }}
    >
      Enterprise
    </h2>
  </div>

  <div className="flex flex-col w-full gap-1.5 sm:gap-2 lg:gap-3">
      <div className="flex items-center bg-[rgba(255,255,255,.05)] rounded-lg lg:rounded-xl p-2 sm:p-3 border border-primary/40 shadow-sm min-h-[2.5rem] sm:min-h-[3rem]">
        <div 
          className="flex items-center justify-center rounded-full bg-primary/20 mr-3 flex-shrink-0"
          style={{
            width: 'clamp(24px, 2.5vw + 18px, 32px)',
            height: 'clamp(24px, 2.5vw + 18px, 32px)'
          }}
        >
          <ShieldCheck 
            className="text-primary" 
            style={{
              width: 'clamp(14px, 1.5vw + 10px, 18px)',
              height: 'clamp(14px, 1.5vw + 10px, 18px)'
            }}
          />
        </div>
        <div className="flex-1 min-w-0 pr-2">
          <h1 
            className="font-medium truncate"
            style={{ 
              fontSize: 'clamp(0.7rem, 1vw + 0.4rem, 0.85rem)',
              lineHeight: 'clamp(0.9rem, 1.2vw + 0.6rem, 1.1rem)'
            }}
          >
            Protection
          </h1>
        </div>
        <h2 
          className="font-semibold flex-shrink-0 whitespace-nowrap"
          style={{ 
            fontSize: 'clamp(0.7rem, 1vw + 0.4rem, 0.85rem)',
            lineHeight: 'clamp(0.9rem, 1.2vw + 0.6rem, 1.1rem)'
          }}
        >
          Advanced
        </h2>
      </div>

      <div className="flex items-center bg-[rgba(255,255,255,.05)] rounded-lg lg:rounded-xl p-2 sm:p-3 border border-primary/40 shadow-sm min-h-[2.5rem] sm:min-h-[3rem]">
        <div 
          className="flex items-center justify-center rounded-full bg-primary/20 mr-3 flex-shrink-0"
          style={{
            width: 'clamp(24px, 2.5vw + 18px, 32px)',
            height: 'clamp(24px, 2.5vw + 18px, 32px)'
          }}
        >
          <Lock 
            className="text-primary" 
            style={{
              width: 'clamp(14px, 1.5vw + 10px, 18px)',
              height: 'clamp(14px, 1.5vw + 10px, 18px)'
            }}
          />
        </div>
        <div className="flex-1 min-w-0 pr-2">
          <h1 
            className="font-medium truncate"
            style={{ 
              fontSize: 'clamp(0.7rem, 1vw + 0.4rem, 0.85rem)',
              lineHeight: 'clamp(0.9rem, 1.2vw + 0.6rem, 1.1rem)'
            }}
          >
            Data Safety
          </h1>
        </div>
        <h2 
          className="font-semibold text-primary flex-shrink-0 whitespace-nowrap"
          style={{ 
            fontSize: 'clamp(0.7rem, 1vw + 0.4rem, 0.85rem)',
            lineHeight: 'clamp(0.9rem, 1.2vw + 0.6rem, 1.1rem)'
          }}
        >
          Enabled
        </h2>
      </div>

      <div className="flex items-center bg-[rgba(255,255,255,.05)] rounded-lg lg:rounded-xl p-2 sm:p-3 border border-primary/40 shadow-sm min-h-[2.5rem] sm:min-h-[3rem]">
        <div 
          className="flex items-center justify-center rounded-full bg-primary/20 mr-3 flex-shrink-0"
          style={{
            width: 'clamp(24px, 2.5vw + 18px, 32px)',
            height: 'clamp(24px, 2.5vw + 18px, 32px)'
          }}
        >
          <Key 
            className="text-primary" 
            style={{
              width: 'clamp(14px, 1.5vw + 10px, 18px)',
              height: 'clamp(14px, 1.5vw + 10px, 18px)'
            }}
          />
        </div>
        <div className="flex-1 min-w-0 pr-2">
          <h1 
            className="font-medium truncate"
            style={{ 
              fontSize: 'clamp(0.7rem, 1vw + 0.4rem, 0.85rem)',
              lineHeight: 'clamp(0.9rem, 1.2vw + 0.6rem, 1.1rem)'
            }}
          >
            Access
          </h1>
        </div>
        <h2 
          className="font-semibold flex-shrink-0 whitespace-nowrap"
          style={{ 
            fontSize: 'clamp(0.7rem, 1vw + 0.4rem, 0.85rem)',
            lineHeight: 'clamp(0.9rem, 1.2vw + 0.6rem, 1.1rem)'
          }}
        >
          Secure
        </h2>
      </div>
    </div>
</div>
</div>
   </>
  )
}
