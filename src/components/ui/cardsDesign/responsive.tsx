import { MoveHorizontal } from "lucide-react"

export default function Responsive() {
    
    return(
        <>
       <div 
         className="w-full h-full bg-secondary rounded-xl border-2 border-dashed border-primary relative"
         style={{
           minHeight: 'clamp(100px, 13vh, 180px)',
           maxHeight: '200px'
         }}
       >
        <h2 
          className="mt-2 ml-2 font-medium"
          style={{ fontSize: 'clamp(0.8rem, 1.5vw + 0.5rem, 1.2rem)' }}
        >
          1440p
        </h2>
        <div 
          className="bg-card ml-auto rounded-xl border-2 border-dashed border-primary absolute"
          style={{
            width: 'clamp(60%, 70%, 75%)',
            height: 'clamp(55%, 67%, 75%)',
            right: 'clamp(4px, 1vw, 8px)',
            bottom: 'clamp(4px, 1vh, 8px)'
          }}
        >
            <h2 
              className="text-primary pl-2 sm:pl-3 lg:pl-4 p-1 sm:p-2 font-medium"
              style={{ fontSize: 'clamp(0.7rem, 1.2vw + 0.4rem, 1rem)' }}
            >
              1080p
            </h2>
        </div>
        <MoveHorizontal 
          className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-primary/70"
          style={{
            width: 'clamp(16px, 3vw + 12px, 24px)',
            height: 'clamp(16px, 3vw + 12px, 24px)'
          }}
        />
       </div>

        </>
    )
}