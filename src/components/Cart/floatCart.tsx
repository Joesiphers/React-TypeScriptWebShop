import styled from "styled-components"
import {useAppSelector } from "../../reduxHooks"
import {useTotal} from "./sum"
import {QuantityW} from "./wedget"
import {CSSTransition} from  "react-transition-group"
import {useRef,useMemo}from "react"
import { Link } from "react-router-dom"

interface IProps{
    closeCart:Function;
    showCart?:Function;
    show:boolean }
const  FloatCart =  (props:IProps)=>{
    const {show, showCart, closeCart}=props
    const itemList=useAppSelector(state=>state.cart)
    const total=useTotal()
    const ref=useRef(null)
//onMouseLeave={()=>props.closeCart()} 
    return(<div>
        <CSSTransition 
            in={show} 
            timeout={800} 
            classNames="cart"
            unmountOnExit
            nodeRef={ref} > 
       <CartWrap  ref={ref} >
          My Shopping Cart      
          <Close onClick={()=>closeCart()} >X</Close>
        <Container >     
            <Desc>Description</Desc><Price>price</Price> <Quantity>Quantity</Quantity> <Amount>Amount</Amount>
        </Container>    
        {itemList.map(i=>{
            return <Container key={i.id}>      
                    <Desc>{i.title}</Desc><Price>${i.price}</Price> 
                    <Quantity>
                        <QuantityW id={i.id}/>
                    </Quantity> 
                    <Amount>{i.quantity*i.price} </Amount>
                    </Container>
             })}
    <Container> <Desc></Desc><Price></Price> <Quantity></Quantity> 
    <Amount>Total: ${total}</Amount></Container>
       <Link to="/checkout" > <button > Check Out</button> </Link>
 </CartWrap>
 </CSSTransition>
    </div>)
}
export default FloatCart;
const Close=styled.span`
    position:absolute ;
    right:0;
    border: solid 1px black;
    padding: 0 5px;
    border-radius: 3px;
    `;
const CartWrap=styled.div`
    border-radius:5px ;
    opacity:90% ;
    background-color: #f2f2f2 ;
    padding:1rem 0 ;
    &.cart-enter{
        opacity:0.2 ;
        transform:translateX(120%) scale(0.5);
    }
    &.cart-enter-active{
        opacity:0.5 ;
        transform:translateX(20%) ;
        transition: all, 400ms;
    }
    &.cart-exit{
        opacity:1 ;
    } ;     
    &.cart-exit-active{
        opacity:0.5 ;
        transform: translateX(40%);
        transition: opacity 400ms, transform 600ms 
    }
`;
const Container=styled.div`
    width:300px ;
    display:flex;
    font-size:small ;
    padding:5px ;
    color:#302e2e;
    border-bottom:1px dashed lightgray ;
`;

const Desc=styled.div`
    width:55%
`;
const Price=styled.div`
width:10%
`;
const Quantity=styled.div`
width:20%  
`;
const Amount=styled.div`
width:15%
    `;