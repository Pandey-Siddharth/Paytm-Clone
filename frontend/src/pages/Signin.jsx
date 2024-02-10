import React, { useState } from 'react'
import Heading from '../Components/Heading'
import SubHeading from '../Components/SubHeading'
import InputBox from '../Components/InputBox'
import Button from '../Components/Button'
import BottomWarning from '../Components/BottomWarning'


function Signin() {
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    
    return (
        <div className = "bg-slate-300 h-screen flex justify-center">
          <div className = "flex flex-cols justify-center">
            <div className = "rounded-lg bg-white w-80 text-center p-2 h-max">
                <Heading title={"Sign In"} />
                <SubHeading description={"Enter your credentials to access your account"} />
                 <InputBox label = {"Email"} placeholder={"user@example.com"} onChange={e=>{
                    setUsername(e.target.value)
                }}></InputBox>
                <InputBox label = {"Password"} placeholder={""} onChange={e=>{
                    setPassword(e.target.value)
                }}></InputBox>
                <div className="pt-4">
                    <Button label = {"Sign In"}></Button>
              </div>
              <BottomWarning label={"Don't have an account?"} buttonText={"Sign Up"} to={"/signup"}></BottomWarning>
            </div>
          </div>
        </div>
      )
    }

export default Signin
