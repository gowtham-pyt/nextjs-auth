import { signIn } from "next-auth/react";
import Router from "next/router";
import React, { useState, FormEventHandler } from "react";
import { toast } from 'react-toastify';
interface Props {}


const Login = (props:Props): JSX.Element => {
    const [ loginData, setLoginData ] = useState({
        email:"",
        password:""
    })
    
    const handleSubmit:FormEventHandler =  async (e) => {
        e.preventDefault()
        console.log('login data',loginData)
        const response = await signIn("credentials", {
            email:loginData.email,
            password:loginData.password,
            redirect: false
        })

        if (response?.status == 200) {
                Router.replace("/nested")
        } 
        if (response?.error == "Invalid credential") {
            toast(response.error)
        }
        console.log("response",response)
    }

    return (
        <div className="container">
            <div className="login-content">
                <form>
                    <input 
                      className="input" 
                      placeholder="email" 
                      value={loginData.email}
                      type={'text'}
                      onChange={(e)=>{
                        setLoginData({
                            ...loginData,email:e.target.value
                        })
                      }}
                      name="email"/>

                    <input 
                        className="input" 
                        placeholder="password" 
                        value={loginData.password}
                        type={"password"}
                        onChange={(e)=>{
                            setLoginData({
                                ...loginData,password:e.target.value
                            })
                          }}
                        name="password" />

                    <button onClick={handleSubmit} className="login-btn">Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login;