import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import authService from '../appwrite/auth'
import './App.css'
import {Login, Logout} from './store/authSlice'
import {Footer,Header} from './components/index'
import { Outlet } from 'react-router-dom'
function App() {
    const[loading,setLoading]=useState(true)
    
    const dispatch=useDispatch()
    useEffect(()=>{
      authService.Login({email:"abcd@gmail.com",password:"abc12345678"})
      .then((ele)=>console.log(ele))
      authService.getCurrentUsers()
      .then((userId)=>{
      if (userId)
      {
        dispatch(Login({userId}))
      }
      else{
        dispatch(Logout())
      }
    })
    .finally(()=>setLoading(false))   
    },[])
  return !loading?(
    <div className='w-full max-w-7xl mx-auto px-4'>
      <div className='bg-gray-400'>
      <Header/>
       <Outlet/> 
      <Footer/>
      </div>
    </div>
  ):null
}

export default App
