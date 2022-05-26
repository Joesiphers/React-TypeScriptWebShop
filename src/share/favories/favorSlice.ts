import { createSlice,PayloadAction } from "@reduxjs/toolkit";

const favorSlice =createSlice({
    name:'favor',
    initialState:[] as string[],
    reducers:{
     addFavory:(state,action:PayloadAction<string>)=>{ 
         //PayloadAction<string> or number etc.
         //adFaovry is a action. flowing is reducer
         //let result=state.find(id=>id=== action.payload);
         state.push(action.payload)
         //console.log("favo",current(state), action,"favorSlice")
     }
    }
})
export const {addFavory}=favorSlice.actions;
export default favorSlice.reducer;