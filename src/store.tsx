import {configureStore} from "@reduxjs/toolkit";
import favorReducer from "./components/favories/favorSlice";
import cartReducer from "./components/Cart/cartSlice"
import accountReducer from "./components/account/accountSlice";
 const store=configureStore ({
    reducer:{
        favor: favorReducer,
        cart:cartReducer,
        account:accountReducer
    }
})
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export default store;