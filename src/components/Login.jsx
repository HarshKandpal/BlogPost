import React from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { Link,useNavigate } from 'react-router-dom'
import authService from '../../appwrite/auth'
import {Login as authLogin} from '../store/authSlice'
import {Input, Button,Logo} from './index'
function Login() {
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const {register, handleSubmit}=useForm()
    const [error, setError]=useState("")
    const login =async(data)=>{
        setError("")
        try{
            const session=await authService.Login(data)
            if(session){
                const userData=await authService.getCurrentUsers()
                if(userData){
                    dispatch(authLogin(userData))
                    navigate("/")
                }
            }
            console.log(session)
        }
        catch(error){
            setError(error.message)
        }
        
    }
  return (
    <div className='flex items-center justify-center w-full'>
        <div className='mx-auto w-full max-w-lg bg-gray-100
        rounded-xl p-10 border bprder-black/10'>
            <div className='mb-2 flext justify-cente'>
                <span className='inline-block w-full max-w-[100px]'>
                    <Logo/>
                </span>
            </div>
            <h2 className='text-center text-2xl font-bold
            leading-tight'>Sign in your accoutn</h2>
             <p className="mt-2 text-center text-base text-black/60">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign Up
                    </Link>
        </p>
        {error && <p className='text-red-500 text-center'>
            {error}</p>}
            <form onSubmit={handleSubmit(login)} className='mt-8'>
                <div>
                <input
                label="Email:"
                placeholder='Enter your E-mail'
                type="email"
                {...register("email",{
                    required: true,
                    validate: {
                        matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                        "Email address must be a valid address",
                    }
                    })}/>
                    <Input
                label="Password: "
                type="password"
                placeholder="Enter your password"
                {...register("password", {
                    required: true,
                })}
                />
                <Button
                type="submit"
                className="w-full"
                >Sign in</Button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login