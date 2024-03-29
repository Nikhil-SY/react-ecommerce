import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        add:(state,action)=>{
                state.push(action.payload)
                
        },
        remove:(state,action)=>{
           return state.filter(item=>item.id !== action.payload.id)//we can pass id in cart.js only to the remove function
        },
        order:(state,action)=>{
            return state=[]
        }
    }

})
export const {add,remove,order} = cartSlice.actions
export default cartSlice.reducer;