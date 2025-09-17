import { Search } from "lucide-react"
import Image from "next/image"

export default function Design() {
    return(
        <>
        <div className="flex items-center bg-primary h-[100px] p-5 rounded-lg">
        <div className="flex items-center bg-accent border-2 border-[rgba(255,255,255,.05)] w-[100%] h-[50px] p-4 rounded-xl">
            <Search width={30} height={25} className="border-r-2 border-gray-500 pr-2"/> <h1 className="text-lg font-medium ml-3">ayancodes.com</h1>
             <Image src={"/Keyboard-Asterisk-1--Streamline-Freehand.svg"} className="ml-auto" width={30} height={30} alt="gg"/>
        </div>
        </div>
        </>
    )
}