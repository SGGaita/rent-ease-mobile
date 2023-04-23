import { createSlice } from "@reduxjs/toolkit";

const initialState ={
user: null,
}

export const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers:{
        setUser: (state,action)=>{
            state.user = action.payload
        }
    }
})