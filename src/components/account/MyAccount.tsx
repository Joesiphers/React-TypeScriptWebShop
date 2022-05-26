import styled from "styled-components";
import AccDetails from "./accountdetails";
import "./account.css";
import { Route, Link, Routes,Outlet} from "react-router-dom";
import Orders from "./orders";
import Favories from "./favories";
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
        <LeftColumn><img src="" alt="MyPhoto"/>
        <Link to="accountDetails" > <p>My Details</p></Link>
        <p>My Favor</p>
        <p><Link to="orders" >My Orders </Link> </p>
        </LeftColumn>
        <RightColumn> 
            <div>More information </div>
            <Outlet/> 
        <Routes>        
            <Route path="accountDetails" 
            element={<AccDetails  />} />
            <Route path="orders" 
            element={<Favories />} />
            <Route path="orders" 
            element={<Orders />} />
        </Routes>  
        </RightColumn>
        </Wrapper>
    )
}

const Label=styled.label`
    position:absolute ;
    left:0 ;
    `;

const Wrapper=styled.div`
    display:flex ;
`;
const LeftColumn=styled.div`
    width:20%;
`;
const RightColumn=styled.div`
    width:80%;
`;