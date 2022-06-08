import styled from "styled-components"
import {useAppDispatch, useAppSelector } from "../../reduxHooks"
import {useTotal} from "./sum"
import {QuantityW,RemoveItem} from "./wedget"
import { Link } from "react-router-dom"
export default function MyCart(){
    const itemList=useAppSelector(state=>state.cart)
    const dispatch=useAppDispatch()
    const total=useTotal()
    return(<CartWrap >
        My Shopping Cart     
        <Container>     
           <Image></Image> <Desc>Description</Desc><Price>price</Price> <Quantity>Quantity</Quantity> <Amount>Amount</Amount><div>Del</div>
        </Container>    
        {itemList.map(i=>{
                    return <Container key={i.id}>
                        <Image><img src="" alt="product Image"/> </Image>      
                    <Desc>{i.title}</Desc><Price>${i.price}</Price> 
                    <Quantity> 
                        <QuantityW  id={i.id}>
                        </QuantityW>
                    </Quantity>
                    <Amount>${i.quantity*i.price} </Amount>
                    <div onClick={()=>RemoveItem(i.id,dispatch)} >Del</div>
                    </Container>
})}
    <Container> <Desc></Desc><Price></Price> <Quantity></Quantity> 
    <Amount>Total: ${total}</Amount><div>Del</div>
  </Container>
  <Link to='/account/checkout'> <button>Check Out</button></Link>
  
    </CartWrap>)
}

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
const Image=styled.div`
    width:200px ;
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
