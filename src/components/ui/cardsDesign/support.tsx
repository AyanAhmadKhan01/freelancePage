import { LifeBuoy, Bug, Wrench, ShieldCheck, Lock, Key, HelpCircle, Server, Code, AlertTriangle, Activity, CheckCircle } from "lucide-react";

const supportIcons = [
  LifeBuoy, Bug, Wrench, ShieldCheck, Lock, Key, HelpCircle, Server, Code, AlertTriangle, Activity, CheckCircle
];

export default function SupportIconRow() {
  return (
    <div className="flex flex-wrap gap-2 m-2 sm:gap-3 justify-center items-center">
      {supportIcons.map((Icon, index) => (
        <div 
          key={index} 
          className="bg-primary/20 rounded-2xl flex items-center justify-center shadow-md hover:scale-110 transition-transform duration-300"
          style={{
            padding: 'clamp(8px, 1.5vw + 6px, 12px)',
            borderRadius: 'clamp(12px, 2vw + 8px, 16px)'
          }}
        >
          <Icon 
            className="text-primary" 
            style={{
              width: 'clamp(16px, 2.5vw + 12px, 22px)',
              height: 'clamp(16px, 2.5vw + 12px, 22px)'
            }}
          />
        </div>
      ))}
    </div>
  )
}
