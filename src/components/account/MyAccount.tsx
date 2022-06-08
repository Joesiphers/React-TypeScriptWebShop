import styled from "styled-components";
import AccDetails from "./accountdetails";
import "./account.css";
import { Route, Link, Routes,Outlet} from "react-router-dom";
import Orders from "./orders";
import Favories from "../favories/favories";
import MyCart from "../Cart/myCart";
import Checkout from "../Cart/checkOut";
const ini={
    input:{
        firstName:{
            value:"string", 
            isValid:true},
        lastName :{
            value:"zhou", 
            isValid:true},    
        email  :{
            value:"ab@c.com", 
            isValid:true}
        ,
        honeNumber :{
            value:"3000", 
            isValid:true},
        gender:{
            value:"male", 
            isValid:true}
        },
        formValid:true
    }
 const  address={streetNumber:"6 mott court",
 city:"glen",
 state:"vic",
 postcode:3150,
}
export default function MyAccount (){
    return(
        <Wrapper>
        <LeftColumn>
        <Link to="accountDetails" > <p>My Details</p></Link>
        <Link to="favories" ><p>My Favor</p></Link>
        <p><Link to="orders" >My Orders </Link> </p>
        <p><Link to="cart" >My Cart </Link> </p>
        </LeftColumn>
        <RightColumn> 
            <Outlet/> 
        <Routes>        
            <Route path="accountDetails" 
            element={<AccDetails  />} />
            <Route path="favories" element={<Favories />} />
            <Route path="orders" element={<Orders />} />
            <Route path="cart/*" element={<MyCart />}/>
            <Route path="checkout" element={<Checkout/>}/>

        </Routes>  
        </RightColumn>
        </Wrapper>
    )
}


const Wrapper=styled.div`
    display:flex ;
`;
const LeftColumn=styled.div`
    width:15%;
    margin:2rem 2rem ;
`;
const RightColumn=styled.div`
    width:85%;
`;