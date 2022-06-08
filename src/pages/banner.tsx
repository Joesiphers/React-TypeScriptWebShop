import styled from "styled-components";
import {Link} from 'react-router-dom';
import {useContext,useState,useRef,createRef} from "react"
import { AuthContext } from "../context/AuthContext";
import { useAppSelector } from "../reduxHooks";
import FloatCart from "../components/Cart/floatCart";
import {useTotalQuantity} from "../components/Cart/sum"
const viewCart=<form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post" >
                <input type="hidden" name="cmd" value="_s-xclick"/>
                <input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----"/>
                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_viewcart_SM.gif" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
                <img alt=""  src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
            </form>

export default function Banner(){
    const auth=useContext(AuthContext);
    const {userId,token,login,logout,showLogin,closeLogin}=auth;
    const cart=useAppSelector(state=>state.cart);
    const favorNumber=useAppSelector(state=>state.favor);
    const [show,setShow]=useState(false)
    const closeCart=()=>{setShow(false)}
    const showCart=()=>{setShow(true)}
    const totalQuantity=useTotalQuantity()
//    const ref=createRef<HTMLDivElement> ()

    return( 
    <BannerWrap>
       <Link to="/">  <Title>Super Sharp Screen</Title>
       </Link>
       <Nav>
            <Link to="/"> * Home </Link>
            <Link to="/contact" >* - Contact</Link>
            <Link to="/doc"> * Download </Link>
            <Link to="/account"> * My Account </Link>
               {!!token?
               (<LogWrap> 
                   <span onClick={()=>{} }>{`Hi ${userId} `}</span>
                <span onClick={()=>{logout();closeLogin()}}>*Log out</span>
                </LogWrap>
                ): 
               (<LogWrap onClick={()=> showLogin()}>Login
                  </LogWrap>)}
        <Cart onClick={()=>setShow(!show)}     >
            Cart<Rlabel>{totalQuantity} </Rlabel> 
          Favory<Rlabel>{favorNumber.length}</Rlabel> </Cart>     
        
       
       <CartWrap  >
           <FloatCart show={show} closeCart={closeCart} showCart={showCart} />
        </CartWrap>
        </Nav>
    </BannerWrap>)

}/* onMouseEnter={()=>setShow(true)} 
           {show &&<FloatCart show={show} closeCart={closeCart} />}

 <CSSTransition 
        in={show} 
        timeout={800} 
        classNames="cart"
        unmountOnExit
        onEnter={()=>{}}
        onExited={()=>{}}
        nodeRef={ref} >        </CSSTransition>
*/
const LogWrap=styled.span`
    position:absolute ;
    left:3rem ;
`;

const Rlabel=styled.div`
    display:inline-block ;
    border:1px solid red;
    text-align:center ;
    background-color:#99ff5a ;
    color:black ;
    border-radius:18px ;
    width:18px ;
    font-size: 0.7rem ;
    position:relative ;
    top:-10px

`;

const Cart=styled.span`
    position:absolute ;
    right:0;
    color:white ;
`;

const CartWrap=styled.div`
   display: inline;
   position: absolute;
    right: 10px;
    top:4.5rem;
    /* &.cart-enter{
        opacity:0 ;
        transform:translateX(100%) ;
    }
    &.cart-enter-active{
        opacity:50% ;
        transform:translateX(20%) ;
        transition: all, 400ms;
    }
    &.cart-exit{
        opacity:1 ;
    } ;     
    &.cart-exit-active{
        opacity:0.5 ;

        transform: scale(0.9);
  transition: opacity 300ms, transform 300ms;
    } */

`;
const Nav=styled.li`
    list-style: none;
    background-color: black;
    justify-content: space-between;
    font-size: large;
    font-family: Geneva;
    text-align: center;
    color: orange;
    & a {
    color: orange;
    text-decoration:none;
    margin-left:0.5rem }
`;

const BannerWrap=styled.div`
    width: 100%;
    top: 0px;
    left: 0;
    `;
/**    position: fixed;
 */

const Title=styled.div`
    font-family: 'Black Han Sans';
    font-size: 2.5rem;
    color: white;
    background-color: black;
    text-align: center;

`;