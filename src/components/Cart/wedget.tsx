import React, { Children, ReactNode,useState,useEffect} from "react"
import { useAppDispatch,useAppSelector } from "../../reduxHooks"
import {reduce,add, ICart,changeQuantity,removeItem} from "./cartSlice"
import styled from "styled-components"
type q={id: string, children?:ReactNode };// 

export const RemoveItem=(id:string, dispatch:Function)=>{
  dispatch(removeItem({id:id}))
}


export const QuantityW =(props:q)=>{
  const id=props.id
  const itemList=useAppSelector(state=>state.cart)
  const item=itemList.find(i=>i.id===id)
  const dispatch=useAppDispatch()
  const [value, setValue]=useState(item?.quantity)
  const inputHandler=(e:React.ChangeEvent<HTMLInputElement> )=>{
      e.preventDefault()
      let v=e.target.value
      console.log(item?.quantity)
      if (v.length>0&&typeof(parseInt(v))==='number'){
          console.log(v)
          if (v.length>2){
          //    console.log(v,v.slice(1,1))
              let vs=v.slice(1,3)
          setValue(parseInt(vs));
          
      }
      else if (v.length<=2) { setValue(parseInt(v))
          }
      } else {setValue(0)}
      
    }
    useEffect(()=>{dispatch(changeQuantity({
      id:id,quantity:value }));
    },[value])

    const reduceOne=(i:string)=>{if(item?.quantity!>0){ dispatch(reduce({id:i,quantity:1}))}}
    const addOne =(i:string)=> dispatch(add({id:i,quantity:1}))
   // console.log("id",props.id)
    return <div> <Plus onClick={()=> addOne(props.id)}>+</Plus>
      <Quan><Input type="number" value={item?.quantity} 
                            onChange={inputHandler}
                            />
            </Quan> 
        <Minus  onClick={()=> reduceOne(props.id)}>-</Minus>
        </div>
}
const Input=styled.input`
    padding:0;
     width:17px ;
    ::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
 
}    `;

const Quan=styled.div`
  width:21px;
  display: inline-block;
    text-align: center;
    `;
const Minus=styled.button`
  padding: 0px 1px;
  margin-left:2px;
`;
const Plus=styled.button`
  margin-right: 2px;
  padding: 0px 0px;
`;

/*import { ICart,addCart,removeItem} from "../../components/Cart/cartSlice";
export default function CartandFavory (props:ICart){
    const dispatch=  useAppDispatch();
    //const addToFavory=(i:string)=>{dispatch(addFavory(i))}
    const favoryList=useAppSelector(state=>state.favor)
    const addToFavory=(id:string)=>{
        let result=favoryList.find(item=>item===id)
        console.log(result)
        {!result&&dispatch(addFavory(id))}
    }  
    const addToCart=(i:ICart)=>{dispatch(addCart(i))}*/