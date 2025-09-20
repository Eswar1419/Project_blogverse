import {Link} from "react-router-dom"
const NavBar = () => {
    return (
        <div className="  cursor-pointer flex justify-around items-center h-16 border-b-gray-300 border-b-1 w-full">
            <h1 className="text-2xl font-bold">BlogVerse</h1>
            < Link to="/Home" className="text-gray-700 hover:bg-gray-200 rounded-lg px-5 ">Home</Link>
            <div className=" flex justify-center items-center gap-5">
                <Link to="/signin" className=" cursor-pointer font-semibold">SignIn</Link>
                <Link to="/signup" className="hover:bg-blue-700 bg-blue-600 text-white px-5 py-2 rounded-lg cursor-pointer">SignUp</Link>
            </div>
        </div>
    )
}
export default NavBar