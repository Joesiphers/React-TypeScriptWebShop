import { createSlice,PayloadAction ,current} from "@reduxjs/toolkit";
import { ICart } from "../Cart/cartSlice";
const favorSlice =createSlice({
    name:'favor',
    initialState:[] as ICart[],
    reducers:{
     addFavory:(state,action)=>{ 
         //:PayloadAction<ICart>PayloadAction<string> or number etc.
         //adFaovry is a action. flowing is reducer
         let result=state.find(id=>id=== action.payload.id);
         !result&&state.push(action.payload)
         
     },
     removeFavory:(state,action)=>{
         let result=state.findIndex(i=>i.id===action.payload.id)
        console.log("remove", result)
         if (result||result===0){console.log("to", result);
             state.splice(result,1)}
     }
    }
})
export const {addFavory, removeFavory}=favorSlice.actions;
export default favorSlice.reducer;