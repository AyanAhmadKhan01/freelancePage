import ModeToggle from "./modeToggler"

export default function Navbar() {
    return(
        <>
        <div className="flex justify-center sticky top-0 z-50">
            <div className="flex justify-between items-center w-[90%] mt-10 mb-5 p-4 rounded-4xl border-2 bg-[rgba(255,255,255,.04)]">
            <div>
                <h2>Our Navbar</h2>    
            </div>
            <div className="flex items-center gap-10">
                <h3 className="cursor-pointer">Home</h3>
                <h3 className="cursor-pointer">Services</h3>
                <h3 className="cursor-pointer">Technologies We use?</h3>
                <h3 className="cursor-pointer">Book a Meeting</h3>
                  <ModeToggle/>
            </div>
            </div>
        </div>
        </>
    )
}