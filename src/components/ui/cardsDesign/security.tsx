import { ShieldCheck, Lock, Key } from "lucide-react"

export default function Security() {
  return (
    <>
<div className="w-full h-[450px] perspective-[1200px]">
  <div className="w-full h-full rounded-3xl p-4
                  bg-[rgba(255,255,255,.05)] border-2 border-primary outline-4 outline-primary/30
                  transform rotate-x-[20deg] rotate-y-[15deg]
                  shadow-[10px_10px_50px_rgba(0,0,0,0.3)]
                  before:absolute before:inset-0 before:rounded-3xl before:shadow-[inset_0_10px_20px_rgba(255,255,255,0.1)] relative">
  <div className="flex mb-3 border-b pb-2">
    <h1 className="text-base font-semibold">Security</h1>
    <h2 className="ml-auto text-xs opacity-70">Enterprise</h2>
  </div>

  <div className="flex flex-col w-full gap-3 ">
      <div className="flex items-center bg-[rgba(255,255,255,.05)] rounded-xl p-3 border border-primary/40 shadow-sm">
        <div className="flex items-center justify-center w-9 h-9 rounded-full bg-primary/20 mr-2">
          <ShieldCheck className="text-primary" size={20} />
        </div>
        <h1 className="text-sm font-medium">Protection</h1>
        <h2 className="ml-auto text-sm font-semibold">Advanced</h2>
      </div>

      <div className="flex items-center bg-[rgba(255,255,255,.05)] rounded-xl p-3 border border-primary/40 shadow-sm">
        <div className="flex items-center justify-center w-9 h-9 rounded-full bg-primary/20 mr-2">
          <Lock className="text-primary" size={20} />
        </div>
        <h1 className="text-sm font-medium">Data Safety</h1>
        <h2 className="ml-auto text-sm font-semibold text-primary">Enabled</h2>
      </div>

      <div className="flex items-center bg-[rgba(255,255,255,.05)] rounded-xl p-3 border border-primary/40 shadow-sm">
        <div className="flex items-center justify-center w-9 h-9 rounded-full bg-primary/20 mr-2">
          <Key className="text-primary" size={20} />
        </div>
        <h1 className="text-sm font-medium">Access</h1>
        <h2 className="ml-auto text-sm font-semibold">Secure</h2>
      </div>
    </div>
</div>
</div>
   </>
  )
}
