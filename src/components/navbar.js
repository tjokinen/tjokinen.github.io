export default function Navbar() {
    return (
        <>
            <div className="z-50 pt-16 pb-2 content-center text-center p-2 grid grid-cols-4 gap-8 fixed top-0 left-0 right-0 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-gray-200">
                <div><a href="#profile">Profile</a></div>
                <div><a href="#cv">CV</a></div>
                <div><a href="#projects">Projects</a></div>
                <div><a href="#contact">Contact</a></div>
            </div>
        </>
    )
}