import { createSlice } from "@reduxjs/toolkit";
import { useAppSelector } from "../../reduxHooks";

export const  useTotal=()=> {
    const cart=useAppSelector(state=>state.cart)
    let subTotal=0;
    for (let i in cart){
        subTotal+=cart[i].quantity*cart[i].price 
    }
         //   console.log(subTotal)
    return subTotal
}
export const  useTotalQuantity=()=> {
    const cart=useAppSelector(state=>state.cart)
    let totalQantity=0;
    for (let i in cart){
        totalQantity+=cart[i].quantity 
    }
         //   console.log(subTotal)
    return totalQantity
}

const sumSlice=createSlice({
    name:'sum',
    initialState:{total:0,quantity:0},
    reducers:{
        sumUp:(state,action)=>{
            state.total=action.payload
        }
    }
})
export const sumReducer=sumSlice.reducer