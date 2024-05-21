import { Link } from "react-router-dom"

function Nav() {
    return (
        <div className="flex justify-between bg-cyan-500">
            <div className="text-5xl text-black p-5 font-bold font-sans ">
                <Link to={'/'}>PayTM</Link>
            </div>
        </div>
    )
}
export default Nav