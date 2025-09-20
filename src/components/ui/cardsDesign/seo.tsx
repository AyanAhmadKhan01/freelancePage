import { Search } from "lucide-react"
import Image from "next/image"

export default function Design() {
    return(
        <>
        <div 
          className="flex items-center bg-primary rounded-lg"
          style={{
            height: 'clamp(80px, 12vh + 20px, 120px)',
            padding: 'clamp(12px, 2vw + 8px, 20px)'
          }}
        >
        <div 
          className="flex items-center bg-accent border-2 border-[rgba(255,255,255,.05)] w-full rounded-xl"
          style={{
            height: 'clamp(40px, 6vh + 10px, 60px)',
            padding: 'clamp(12px, 2vw + 8px, 16px)'
          }}
        >
            <Search 
              className="border-r-2 border-gray-500 pr-2 flex-shrink-0"
              style={{
                width: 'clamp(24px, 3vw + 18px, 32px)',
                height: 'clamp(20px, 2.5vw + 15px, 28px)'
              }}
            /> 
            <h1 
              className="font-medium ml-3 whitespace-nowrap overflow-hidden text-ellipsis"
              style={{ 
                fontSize: 'clamp(0.9rem, 1.5vw + 0.6rem, 1.25rem)',
                lineHeight: 'clamp(1.1rem, 1.8vw + 0.8rem, 1.5rem)'
              }}
            >
              MvpFast.com
            </h1>
             <Image 
               src={"/Keyboard-Asterisk-1--Streamline-Freehand.svg"} 
               className="ml-auto flex-shrink-0" 
               width={30} 
               height={30} 
               alt="Cursor"
               style={{
                 width: 'clamp(24px, 3vw + 18px, 32px)',
                 height: 'clamp(24px, 3vw + 18px, 32px)'
               }}
             />
        </div>
        </div>
        </>
    )
}