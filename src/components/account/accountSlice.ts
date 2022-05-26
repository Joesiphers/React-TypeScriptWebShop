import { createSlice } from "@reduxjs/toolkit";
export interface IUser{
    firstName:string;
    lastName:string;
    email:string;
    phone:string;
    gender:string;
    streetNumber:string;
    streetSecondLine:string;
    city:string;
    state:string;
    postcode:string;
}
const accountSlice=createSlice({
    name:'account',
    initialState:{}as IUser,
    reducers:{
        changeAcc:(state,action)=>{
            state=action.payload
        }
    }
})
export const{ changeAcc} = accountSlice.actions
export default accountSlice.reducer