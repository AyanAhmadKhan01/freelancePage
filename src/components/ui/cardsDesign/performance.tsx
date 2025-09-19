export default function Performance() {
    return(
        <>
<div className="relative m-auto h-full w-full max-w-[300px] max-h-[300px] min-h-[200px] rotate-x-50 rotate-z-25 flex items-center justify-center">
  <div 
    className="absolute border-accent rounded-full animate-spin"
    style={{
      width: 'clamp(120px, 15vw + 80px, 240px)',
      height: 'clamp(120px, 15vw + 80px, 240px)',
      borderWidth: 'clamp(6px, 0.8vw + 4px, 12px)',
      borderTopColor: 'var(--primary)',
      borderLeftColor: 'transparent',
      borderRightColor: 'transparent',
      borderBottomColor: 'transparent'
    }}
  ></div>

  <div className="flex items-center justify-center h-full w-full z-10">
    <h1 
      className="font-bold text-center select-none"
      style={{ 
        fontSize: 'clamp(1.2rem, 3vw + 0.8rem, 2.5rem)',
        lineHeight: 'clamp(1.4rem, 3.5vw + 1rem, 3rem)',
        letterSpacing: 'clamp(0.1rem, 0.3vw + 0.05rem, 0.25rem)'
      }}
    >
      FAST
    </h1>
  </div>
</div>

        </>
    )
}