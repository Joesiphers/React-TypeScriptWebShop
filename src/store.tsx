import {configureStore} from "@reduxjs/toolkit";
import favorReducer from "./share/favories/favorSlice";
import cartReducer from "./share/shoppingCart/cartSlice"
 const store=configureStore ({
    reducer:{
        favor: favorReducer,
        cart:cartReducer
    }
})
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export default store;