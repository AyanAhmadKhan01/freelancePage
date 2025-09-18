import { Github,Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
   const socialIcons = [
  {  icon: <Twitter width={30} height={30} /> },
  { icon: <Github width={30} height={30} /> },
  {  icon: <Linkedin width={30} height={30} /> },
];

    return(
        <>
        <div className="border-2 border-t-transparent mx-20 h-[35vh]">
            <div className="flex justify-between mt-16 mx-6 pb-10 border-b-2">
            <div>
                <h1 className="text-4xl">WeBuild</h1>
                <p>Make your software today</p>
            </div>
            <div className="flex h-fit">
              {socialIcons.map((s, i) => (
            <div key={i} className="flex rounded-lg bg-primary m-4 p-2 border-b-4 border-r-4 cursor-pointer">
                {s.icon}
            </div>
               ))}
               </div>
            </div>
            <div className="flex my-10 mx-5">
             <h2>© 2025 All Rights Reserved</h2>
             <h2 className="ml-auto">Made by <span className="text-primary cursor-pointer"><Link href={'https://devlegend.vercel.app/'} target="_blank">Ayan</Link></span></h2>
             </div>
        </div>
        </>
    )
}