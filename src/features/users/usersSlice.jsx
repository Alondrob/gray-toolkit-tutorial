import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: 0, name: 'Felix CheTam' },
    { id: 1, name: 'Zexer Zdarovi' },
    { id: 3, name: 'Postavim Pomerim' },
    {id:4 , name: "Boltaetsa u tebya"}
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
    
    }
})

 export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer