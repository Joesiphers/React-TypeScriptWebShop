import { useAppDispatch } from "../../reduxHooks";
import { addFavory } from "./favorSlice";
export default function AddToFavory (productId:string){
    const dispatch=  useAppDispatch();
    dispatch(addFavory(productId))
   
}
/**{type:"add", payload:"haha"} */