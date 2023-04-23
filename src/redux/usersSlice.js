import { createSlice } from "@reduxjs/toolkit";

const initialState ={
user: null,
}

export const usersSlice = createSlice({
    name: 'users',
    initialState: initialState,
    reducers:{}
})