import { MoveHorizontal } from "lucide-react"

export default function Responsive() {
    
    return(
        <>
       <div className="w-[100%] h-[120px] bg-secondary rounded-xl border-2 border-dashed border-primary">
        <h2 className="text-lg mt-2 ml-2">1440p</h2>
        <div className="bg-card ml-auto w-[70%] h-[67%] rounded-xl border-2 border-dashed border-primary">
            <h2 className="text-lg pl-4 p-2 text-primary">1080p</h2>
        </div>
        <MoveHorizontal className="ml-20 -translate-y-15"/>
       </div>

        </>
    )
}