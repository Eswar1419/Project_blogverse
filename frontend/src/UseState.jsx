import React, { useState } from 'react'

const Increment = () => {
    // formData = {
    //     email: "fjhvbn bhjgvhjvb",
    //     password: "",
    // }
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`email: ${formData.email}\npassword: ${formData.password}`)
    }

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name] : event.target.value
        })
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="email" id="" placeholder='email' onChange={handleChange}/> <br></br>
            <input type="password" name="password" id="" placeholder='password' onChange={handleChange}/><br></br>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default Increment