import { useState } from "react";
import styled from "styled-components"
import { useAppSelector } from "../../reduxHooks";
import { useTotal } from "./sum";

export default function Checkout(){
    const list=useAppSelector(state=>state.cart)
    const total=useTotal()
    const [number, setnum]=useState(0)
return <> <div>Check OUt</div>
    <Container>
        <Image></Image> <Desc>Title</Desc><Price>Price</Price><Quantity>Quantity</Quantity> <Amount></Amount>
    </Container>
    {
    list.map((i,index)=>{
        
        return     <Container key={i.id}>
        <Image>{index+1}</Image> <Desc>{i.title}</Desc><Price>${i.price}</Price><Quantity>{i.quantity}</Quantity> <Amount>${i.quantity*i.price} </Amount>
    </Container>
    })}
    <Container>
        <Image></Image> <Desc></Desc><Price></Price><Quantity></Quantity> <Amount>Total:${total} </Amount>
    </Container>
<button>Pay</button> <button>Back to Cart</button>
</>}
const Image=styled.div`
    width:200px ;
`;
const CartWrap=styled.div`
margin:0 auto ;
`;
const Container=styled.div`
    display:flex;
    font-size:small ;
    padding:5px ;
    color:#302e2e;
    text-align:center;
    border-bottom: 1px lightgray;
    box-shadow:0 2px 3px #f1f1f1f1;

`;
const Desc=styled.div`
    width:50%
`;
const Price=styled.div`
width:15%
`;
const Quantity=styled.div`
width:15%  
`;
const Amount=styled.div`
width:15%
    `;

