import React from 'react'
import {Logout} from '../../store/authSlice'
import authService from '../../../appwrite/auth'
import {useDispatch} from 'react-redux'
function LogoutBtn() {
  const dispatch=useDispatch()
  const LogoutHandler=()=>{
    authService.Logout()
    .then(()=>(
      dispatch(Logout())
    ))
  }
  return (
    <button
    className='inline-block px-6 py-2 duration-200
    hover:bg-blue-100 rounded-full'>Logout</button>
  )
}

export default LogoutBtn