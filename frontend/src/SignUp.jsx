const SignUp=()=>{
return(
    <div className="flex flex-col items-center  mt-10 gap-5">
        <h1 className="text-blue-700 font-bold text-2xl ">
            Join BlogVerse
        </h1>
        <p className="text-gray-500 text-x1 text-center font-semibold">
            creat your account and start your journey</p>
        <form className="flex flex-col border-1 border-black w-1/3 p-7 justify-center items-center gap-5 shadow-lg hover:shadow-gray-600 rounded-2xl">
            <div className="w-[90%] flex flex-col gap-2">
                <p>Full Name</p>
                <input type="text" placeholder="Enter your full Name" className="border-1 border-gray-700 w-full px-3 py-2 rounded-2xl focus:outline-none focus:border"></input>
            </div>
             <div className="w-[90%] flex flex-col gap-2">
                <p>Email</p>
                <input type="email" placeholder="Enter your Email" className="border-1 border-gray-700 w-full px-3 py-2 rounded-2xl focus:outline-none focus:border"></input>
            </div>
             <div className="w-[90%] flex flex-col gap-2">
                <p>Password</p>
                <input type="text" placeholder="Enter your Password" className="border-1 border-gray-700 w-full px-3 py-2 rounded-2xl focus:outline-none focus:border"></input>
            </div>
             <div className="w-[90%] flex flex-col gap-2">
                <p>conform Password</p>
                <input type="text" placeholder="re-enter your password " className="border-1 border-gray-700 w-full px-3 py-2 rounded-2xl focus:outline-none focus:border"></input>
            </div>
            <div className="flex gap-2 border-1 border-gray-700 w-[90%] py-3 px-3 rounded-2xl justify-center items-center mt-2">
                <input type="checkbox" name="" id="" className="h-5 w-5 "/>
                <p>agree to the terms and conditons are applied</p>
            </div>
            <button className="w-[90%] bg-purple-500 text-white rounded-2xl px-3 py-2">Create account</button>
            <p className="text-gray-700 font-semibold">already have an account?<span className="text-purple-500">SignIn</span></p>
            <button className="w-[90%] text-gray-700 font-semibold rounded-2xl hover:bg-gray-200 cursor-pointer py-2 px-3 ">back to home</button>
           
        </form>
    </div>
)
}
export default SignUp