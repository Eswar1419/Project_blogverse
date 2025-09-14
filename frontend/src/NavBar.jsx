import React from "react"
const NavBar=()=>{
    return(
        <div className="flex justify-around items-center h-16 border-b-2 border-black shadow-lg shadow-blue-400">
            <h1 className="text-2xl font-bold ">BlogVerse</h1>
            <button className="text-gray-700 hover:bg-blue-300 px-5 py-2 rounded-2xl ">
                Home
            </button>
            <div className="flex gap-5">
                <button className="">SignIn</button>
                <button className="bg-blue-600 text-white px-5 py-2 rounded-2xl shadow-lg shadow-blue-950">signUp</button>
                
            </div>
        </div>
    )
}
 export default NavBar