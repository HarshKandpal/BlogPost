import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App.jsx'
import './index.css'
import Store from './store/store'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router=createBrowserRouter([{
    path:"/",
    element: <App/>
}
]
)
ReactDOM.createRoot(document.getElementById('root')).render(
  
    <Provider store={Store}>
        <RouterProvider router={router}>
    <App />
    </RouterProvider>
    </Provider>

)
