import { createSlice,PayloadAction,current } from "@reduxjs/toolkit";

const cartSlice=createSlice(
    {name:'cart',
    initialState:[""],
    reducers:{
        addCart:(state,action:PayloadAction<string> )=>{
            state.push(action.payload)
            console.log(action, "action",current(state))    
            }
        }
    }
)
export const {addCart}=cartSlice.actions;
export default cartSlice.reducer