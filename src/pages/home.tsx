import styled from "styled-components"
import  {Link} from "react-router-dom";
import  getProducts  from "../products";
import CartandFavory from "../share/addToFavories";
import {useTotal } from "../components/Cart/sum"

const Home= ()=>{
    const list=getProducts();//return a array [] of product list with descs
const total=useTotal()
    return  <>  
            <ColumnDiv>
            {list.map(item=>(
                <ItemDiv key={item.id}>
                      <Link to={`/product/${item.id} `}>
                        <div>{item.title}</div> 
                        <img src={item.thumbImg[0]}  alt=""/>
                        <div>Price: US$ {item.price}.00</div>
                        
                        </Link>
                    <CartandFavory 
                    id={item.id} 
                    quantity={1} 
                    price={item.price} 
                    title={item.title}
                    />
                </ItemDiv>
            ))}
            </ColumnDiv>
    </>
}
export default (Home)
const ItemDiv=styled.div`
    color: black;
    margin: 1rem;
    text-align:center ;
`;
const ColumnDiv=styled.div`
    display:flex ;
    flex-direction:row ;
    flex-flow:wrap ;
`;
const Image=styled.div`
    width: 50%;
    padding: 1rem;
`;





