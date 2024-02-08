import { configureStore } from "@reduxjs/toolkit";
import slice from './authSlice'
const Store=configureStore({
    reducer:slice
})

export default Store