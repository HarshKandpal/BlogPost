import { createSlice } from "@reduxjs/toolkit";

const initialState=({
    isLoggedin: false,
    userId:null
})
const Slice=createSlice({
        name:'auth',
        initialState,
        reducers:{
            Login(state,action){
                state.isLoggedin=true
                state.userId= action.payload
            },
            Logout(state){
                state.isLoggedin=false
            }
        }
})
export const {Login,Logout}=Slice.actions

const slice=Slice.reducer
export default slice
