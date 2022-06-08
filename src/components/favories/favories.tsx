import styled from "styled-components"
import { useAppSelector,useAppDispatch } from "../../reduxHooks"
import { ICart,add} from "../Cart/cartSlice";
import {removeFavory } from "./favorSlice";


export default function  Favories(){
    const dispatch=useAppDispatch()
    const favorList=useAppSelector(state=>state.favor)
    
    // const onInput=(e:React.ChangeEvent<HTMLInputElement>)=>{
    // }
    const addToCart=(item:ICart)=>{dispatch(add(item))}
    const remove=(item:ICart)=>{
        dispatch(removeFavory(item))
    }

    return (<Wrapper> <div>My Favoriy List</div> 
    <br/>
        {favorList.map((i)=>{return (
            <ul key={i.id}> 
                <Image><img src="" alt="img" /> </Image>
                <div>price $ {i.price} </div>   
                <button onClick={()=>addToCart(i)}> 
                   add to Cart
    </button><button onClick={()=>{remove(i)}} >Remove</button>
            </ul>
            
        )})}
    </Wrapper>
    )
  };
  const Wrapper=styled.div`
    display:flex;
    `;
const Image=styled.div`
    width:150px;
`;