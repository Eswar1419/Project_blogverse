
import { Link } from "react-router-dom"
import NavBar from "./NavBar"
import { CircleUser } from 'lucide-react';
import { KeyRound } from 'lucide-react';
import { Eye } from 'lucide-react';
import { Mail } from 'lucide-react';
import { User } from 'lucide-react';
import { EyeOff } from 'lucide-react';
import { useState } from "react";
import { EyeClosed } from 'lucide-react';

const SignUp = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })
    const [errors, seterrors] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const [showPassword, setshowPassword] = useState(false)
    const [showConfirmPassword, setshowConfirmPassword] = useState(false)
    const [error, seterror] = useState('')
    const [success, setsuccess] = useState('')


    const handleSubmit = (event) => {
        event.preventDefault()
        let newErrors={}
        if(!formData.fullName){
            newErrors.fullName="please enter the fullName"
        }
        if(!formData.email){
            newErrors.email="please enter the email"
        }
        if(!formData.password){
            newErrors.password="please enter the password"
        }
        if(!formData.confirmPassword){
            newErrors.confirmPassword="please enter the confirmPassword"
        }else if (formData.password !== formData.confirmPassword){
            newErrors.confirmPassword="password and confirmpassword are not matching"
        }
        if (Object.keys(newErrors).length>0){
            seterrors(newErrors)

        }
        else{
            setsuccess("your acc is created")
             setFormData({
                fullName: "",
                email: "",
                password: "",
                confirmPassword: ""
            })
        }
        // if (!formData.fullName || !formData.email || !formData.password || !formData.confirmPassword) {
        //     seterror("please fill all the fields")
        // } else if (formData.password !== formData.confirmPassword) {
        //     seterror("password does not match")
        //     setsuccess("")
        // }
        // else {
        //     setsuccess("your account is successfully created")
        //     seterror("")
        //     setFormData({
        //         fullName: "",
        //         email: "",
        //         password: "",
        //         confirmPassword: ""
        //     })
        // }

    }
    const handlePassword = () => {
        setshowPassword((password) => !password)
    }
    const handleConfirmPassword = () => {
        setshowConfirmPassword((ConfirmPassword) => !ConfirmPassword)
    }
    const handleChange = (event) => {
        seterror("")
        setsuccess("")
        setFormData((formData) => ({
            ...formData,
            [event.target.name]: event.target.value

        }))
        seterrors((errors) => ({
            ...errors,
            [event.target.name]: ""
        }))
    }


    return (
        <div className="flex flex-col items-center  gap-5">
            <NavBar />
            <h1 className="font-bold text-2xl text-blue-400">
                Join BlogVerser
            </h1>
            <p className="text-gray-500 text-xl text-center font-semibold ">
                Create your account and start your Journey
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col border-1 border-black w-[80%] md:w-1/3 py-7 justify-center items-center gap-5 rounded-2xl shadow-lg shadow-gray-300 hover:shadow-black ">
                <div className="w-[90%] flex flex-col gap-2">

                    <p className=" font-semibold text-md text-gray-700">Full_Name</p>
                    <div className="relative">
                        <input
                            value={formData.fullName}
                            onChange={handleChange}
                            name="fullName" type="text" placeholder="Enter your full Name:" className=" border-1 border-gray-700 w-full py-2 px-10 rounded-2xl focus:outline-none  "></input>
                        <User className="absolute top-2 left-2" />
                        {errors.fullName && <p className="text-red-500">{errors.fullName}</p>}
                    </div>
                </div>
                <div className="w-[90%] flex flex-col gap-2">
                    <p className=" font-semibold text-md text-gray-700">Email</p>
                    <div className="relative">
                        <input
                            value={formData.email}
                            onChange={handleChange}
                            name="email" type="email" placeholder="Enter your Email:" className=" border-1 border-gray-700 w-full py-2 px-10 rounded-2xl focus:outline-none  "></input>
                        <Mail className="absolute top-2 left-2 " />
                        {errors.email && <p className="text-red-500">{errors.email}</p>}
                    </div>
                </div>
                <div className="w-[90%] flex flex-col gap-2">
                    <p className=" font-semibold text-md text-gray-700">Password</p>
                    <div className="relative">
                        <input
                            value={formData.password}
                            onChange={handleChange}
                            name="password" type={showPassword ? "text" : "password"} placeholder="Enter your Password:" className=" border-1 border-gray-700 w-full py-2 px-10 rounded-2xl focus:outline-none  "></input>
                        <KeyRound className="absolute top-2 left-2" />
                        <p onClick={handlePassword}>{showPassword ? <EyeClosed className="absolute top-2 right-5 cursor-pointer" /> : <Eye className="absolute top-2 right-5 cursor-pointer" />}</p>
                        {errors.password && <p className="text-red-500">{errors.password}</p>}
                    </div>
                </div>
                <div className="w-[90%] flex flex-col gap-2">
                    <p className=" font-semibold text-md text-gray-700">Conform_Password</p>
                    <div className="relative">
                        <input
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            name="confirmPassword" type={showConfirmPassword ? "text" : "password"} placeholder="Conform_Password:" className=" border-1 border-gray-700 w-full py-2 px-10 rounded-2xl focus:outline-none  "></input>
                        <KeyRound className="absolute top-2 left-2" />
                        <p onClick={handleConfirmPassword}>{showConfirmPassword ? <EyeClosed className="absolute top-2 right-5 cursor-pointer  " /> : <Eye className="absolute top-2 right-5 cursor-pointer" />}</p>
                    {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword}</p>  }
                    </div>
                </div>
                <div className="flex gap-2 border-1 border-gray-700 w-[90%] py-2 px-3 rounded-2xl justify-center items-center">
                    <input type="checkbox" name="" id="" className="h-5 w-5" />
                    <p>I agree to the terms and conditions </p>

                </div>
                {error && <p className="text-red-500">{error}</p>}
                {success && <p className="text-green-500">{success}</p>}

                <button type="submit" className="w-[90%] bg-purple-500 text-white px-3 py-2 rounded-2xl font-semibold cursor-pointer flex justify-center gap-2  "> <CircleUser />Create Account</button>
                <p className=" text-gray-700 font-semibold">Already have an account?<Link to="/SignIn" className="text-purple-500 cursor-pointer  ">Signin</Link></p>
                <button className="w-[90%]  text-gray-700  font-semibold rounded-2xl hover:bg-gray-200 cursor-pointer py-2 px-3 ">Back to home</button>
            </form>


        </div>
    )
}
export default SignUp