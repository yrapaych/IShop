import {createSlice} from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name: 'cart',
    initialState:[],
    reducers:{
        add: (state, action)=>{
            state.push(action.payload)
        },
        remove: (state, action)=>{
            state = state.filter(elem => elem!==action.payload)
        },
        clear: (state)=>{
            state = []
        }
    }
})

export const { add, remove, clear } = cartSlice.actions

export default cartSlice.reducer