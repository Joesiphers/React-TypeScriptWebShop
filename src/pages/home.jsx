import styled from "styled-components"
import  {Link} from "react-router-dom";
import  getProducts  from "../products";
import { useAppDispatch,useAppSelector } from "../reduxHooks";
import { addFavory } from "../share/favories/favorSlice";
import { addCart } from "../share/shoppingCart/cartSlice";
const Home= ()=>{
    const list=getProducts();//return a array [] of product list with descs
    const dispatch=  useAppDispatch()
    const favoryList=useAppSelector((state)=>state.favor)
    const addToFravory=(id)=>{
        let result=favoryList.find(item=>item===id)
        console.log(result)
        {!result&&dispatch(addFavory(id))}
    }        ;
    const addToCart=(id)=>{
            dispatch(addCart(id))}
            
    
    return  <>  
            <ColumnDiv>
            {list.map(item=>(
                <ItemDiv key={item.id}>
                      <Link to={`/product/${item.id} `}>
                        <div>{item.title}</div> 
                        <img src={item.thumbImg}  alt=""/>
                        <div>Price: US$ {item.price}.00</div>
                        
                        </Link>
                        <button onClick={()=> addToFravory(item.id) }>
                            add favories
                            </button>
                            <button onClick={()=>addToCart(item.id)}>
                            add to Cart
                            </button>
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





