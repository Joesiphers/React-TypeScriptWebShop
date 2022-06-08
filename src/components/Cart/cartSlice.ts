import { createSlice,PayloadAction,current } from "@reduxjs/toolkit";
import { title } from "process";

export interface ICart {
    id:string;
    title:string;
    price:number;
    quantity:number}
    
const cartSlice=createSlice(
    {name:'cart',
    initialState:[] as ICart[],
    reducers:{
        removeItem:(state,action)=>{
            let result=state.findIndex(i=>i.id===action.payload.id)
            console.log (result,"id", action)
            state.splice(result,1)
        },
        changeQuantity:(state,action)=>{
            let result=state.find(i=>i.id===action.payload.id)
            if (result){result.quantity=action.payload.quantity;
                }
        } ,
        reduce:(state,action) =>{
            let result=state.find(i=>i.id===action.payload.id)
            if (result){result.quantity-=1;}
        },
        add:(state,action )=>{
            const newId=action.payload.id;
            let result=state.find(i=>i.id===newId)
            let length=state.length
            if (!result)
            {const q=action.payload.quantity;
            const n ={
                num:length+1,
                id:newId,
                quantity:q,
                price:action.payload.price,
                title:action.payload.title
            }
            state.push(n)}
            else{
                const q=action.payload.quantity
                const qq=result.quantity
                result.quantity=(q+qq)
            }
            },


        getTotal:(state, action:PayloadAction<ICart>)=> {
                let subTotal=0;
                for (let i in state){
                    subTotal+=state[i].quantity*state[i].price 
                    console.log(subTotal)
                }
            }
        }
    }
)
export const {getTotal,removeItem,reduce,add,changeQuantity}=cartSlice.actions;
export default cartSlice.reducer

/**:PayloadAction<ICart> */