import React from 'react'
import {Logo,LogoutBtn} from '../index'
import {useSelector} from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
function Header() {
  const authStatus=useSelector((state)=>state.isLoggedin)
  const navigate=useNavigate()

  const navItems=[
    {
      name:'Home',
      url:"/",
      active:true
    },
    {
      name:"Login",
      url:"/Login",
      active:!authStatus,
    },
    {
      name:"Signup",
      url:"/Signup",
      active:!authStatus,
    },
    {
      name:"All Posts",
      url:"/All-Posts",
      active:authStatus,
    },
    {
      name:"Add-Posts",
      url:"/Add-Posts",
      active:authStatus,
    }
  ]
  return (
    <header className='py-3 shadow bg-gray-500'>
      <div className='w-full max-w-7xl mx-auto px-4'>
        <nav className='flex'>
          <div className='mr-4'>
            <Link to='/'>
            <Logo width='70px'/>
            </Link>
          </div>
          <ul className='flex ml-auto'>
            {navItems.map((ele)=>(
              ele.active?(<li key={ele.name}>
                <button
                onClick={()=>navigate(ele.url)}
                className='inline-block px-6 py-2
                duration-200 hover:bg-blue-100 rounded-full'>
                  {ele.name}</button>
              </li>):null
            ))}
            {authStatus && (<li>
              <LogoutBtn/>
            </li>)}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header