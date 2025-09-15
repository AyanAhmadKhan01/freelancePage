import ModeToggle from "./modeToggler"

export default function Navbar() {
    return(
        <>
        <div className="flex justify-center">
            <div className="flex justify-between items-center w-[90%] mt-10 mb-5 p-4 rounded-4xl bg-accent">
            <div>
                <h2>LaStack's</h2>    
            </div>
            <div className="flex items-center gap-10">
                <h3>Home</h3>
                <h3>Services</h3>
                <h3>Technologies We use?</h3>
                <h3>Book a Meeting</h3>
                  <ModeToggle/>
            </div>
            </div>
        </div>
        </>
    )
}