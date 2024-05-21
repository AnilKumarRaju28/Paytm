import { Link, useNavigate } from "react-router-dom"

function Navbar() {
    const navigate = useNavigate();
    return (
        <>
            <div className="flex justify-between bg-cyan-500">
                <div className="text-5xl text-black p-5 font-bold font-sans ">
                    <Link to={'/'}>PayTM</Link>
                </div>
                <div className="flex justify-start w-1/5 items-center p-5  text-white">
                    <button onClick={() => {
                        navigate('/signin')
                    }} className="h-10 w-40 rounded-md font-sans text-2xl text-black">Sign In</button>
                    <button onClick={() => {
                        navigate('/signup')
                    }} className="h-10 w-40 rounded-md font-sans text-2xl text-black">Sign Up</button>
                </div>
            </div>
        </>

    )
}

export default Navbar
