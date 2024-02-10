import React, { useState } from 'react'
import Heading from '../Components/Heading'
import SubHeading from '../Components/SubHeading'
import InputBox from '../Components/InputBox'
import Button from '../Components/Button'
import { Route, useNavigate } from 'react-router-dom'
import BottomWarning from '../Components/BottomWarning'
import axios from "axios";

function Signup() {

    const [FirstName,setFirstName] = useState("")
    const [LastName,setLastName] = useState("")
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const navigate = useNavigate();

  return (
    <div className = "bg-slate-300 h-screen flex justify-center">
      <div className = "flex flex-cols justify-center">
        <div className = "rounded-lg bg-white w-80 text-center p-2 h-max">
            <Heading title={"Sign up"} />
            <SubHeading description={"Enter your infromation to create an account"} />
            <InputBox label = {"First Name"} placeholder={"Siddharth"} onChange={e=>{
                setFirstName(e.target.value)
            }}></InputBox>
             <InputBox label = {"Last Name"} placeholder={"Pandey"} onChange={e=>{
                setLastName(e.target.value)
            }}></InputBox>
             <InputBox label = {"Email"} placeholder={"sidd@gmail.com"} onChange={e=>{
                setUsername(e.target.value)
            }}></InputBox>
            <InputBox label = {"Password"} placeholder={"1234"} onChange={e=>{
                setPassword(e.target.value)
            }}></InputBox>
            <div className="pt-4">
            <Button onClick={async () => {
            const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
            username: username,
            password: password,
            firstName: FirstName,
            lastName: LastName,
            });
            localStorage.setItem("token", response.data.token)
            navigate("/dashboard")
          }} label={"Sign up"} />
          </div>
          <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"} />
        </div>
      </div>
    </div>
  )
}

export default Signup
