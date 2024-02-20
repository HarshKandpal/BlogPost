import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App.jsx'
import './index.css'
import Store from './store/store'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './components/Login.jsx'
import Signup from './components/Signup.jsx'


const router=createBrowserRouter([{
    path:"/",
    element: <Login/>
}
]
)
ReactDOM.createRoot(document.getElementById('root')).render(
  
    <Provider store={Store}>
        <RouterProvider router={router}>
    <App/>
    </RouterProvider>
    </Provider>

)
