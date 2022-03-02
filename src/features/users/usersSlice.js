import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    { id: '0', name: 'Bobby Jones'},
    { id: '1', name: 'Jane Olson'},
    { id: '2', name: 'Selia Ward'}
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})

export default usersSlice.reducer