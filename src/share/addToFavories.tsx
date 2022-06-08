import { useAppDispatch,useAppSelector } from "../reduxHooks";
import { addFavory,removeFavory } from "../components/favories/favorSlice";
import { ICart,add,removeItem} from "../components/Cart/cartSlice";
import styled, {css} from "styled-components";
import { useEffect,useState } from "react";

export default function CartandFavory (props:ICart){
    const dispatch=  useAppDispatch();
    const [inFavor,setInFavor]=useState<ICart>()
    //const addToFavory=(i:string)=>{dispatch(addFavory(i))}
    let favoryList:ICart[]
    favoryList=useAppSelector(state=>state.favor)
    console.log(favoryList,"favlis",props)
    let result=favoryList.find(item=>item.id===props.id)
    console.log(result,"favor")
    const addToFavory=(i:ICart)=>{
        let sult=favoryList.find(item=>item.id===i.id)
        console.log(sult)
        {!sult?dispatch(addFavory(i)):dispatch(removeFavory(i))}
    }  
    const addToCart=(i:ICart)=>{dispatch(add(i))}

   return <> 
   <Favory onClick={()=> addToFavory(props) } $mode={!result}>
    {(result||result===0)?"My Favory":" add to favory"}
    </Favory>
    <button onClick={()=>addToCart(props)}>
    add to Cart
    </button>
    </>
}
interface Props{
    onClick:Function;
    $mode:boolean;
}
const Favory=styled.button<Props>`
    background-color:${props=>props.$mode?"white;":"pink;"
        }
`;
/**{type:"add", payload:"haha"} onClick={()=> sumUp({id:props.id.toString(),
            quantity:props.quantity,price:props.price}) }*/