import styled from "styled-components";
import { useParams } from "react-router-dom";
import { Fragment } from "react/cjs/react.production.min";
import  getProducts  from "../products.js";
import BuyButton from "../share/BuyButton";
export default function ProductDetail (props){
    const params=useParams();
    const data=getProducts()
    const id=parseInt(params.productId) 
    let result=data.find(item=>item.id===id)
    const {price,description,images}=result;
//console.log(result,"result",params,"params");
    return ( <Fragment>
        <Title>{result.title}</Title>
        <Mainwrapper>
            <Imagewrap>
                <img src={images[0]} alt="super Sharp"/>
            </Imagewrap>
            <PriceWrap>
                <BuyButton price={price} exprice={price+25} />
            </PriceWrap>
        </Mainwrapper> 
        
        <Mainwrapper>
            <Black>
                <Description >
                {description.map((i,index)=><ListPoint key={index} >{i}</ListPoint> )}
                </Description>
                <Imagewrap>
                    <img src={images[1]} alt="pics"/>
                </Imagewrap>
            </Black>
        </Mainwrapper>
        <Mainwrapper> <img src={images[2]} alt="pics"/></Mainwrapper>
    </Fragment>
      )
    }

const Black=styled.div`
    display: flex;
    flex-direction: row;
    background-color: #1d1c1c;
    color: white;
    width: 900px;
    margin: 2rem 0;
    padding:2px;
    
`;

const Imagewrap=styled.div`
    margin: 1rem;
    `;
const Mainwrapper=styled.div`
    display: flex;
    margin:  1rem;
    font-family: 'Roboto';
`;

const PriceWrap=styled.div`
    text-align:center;
    margin: 2rem 1rem 0 2rem;
    
`;
const Description=styled.div`
    font-family: 'IBM PLEX MONO';
    width: 40%;
    margin: 2rem auto;
`;
const ListPoint=styled.div`
    margin-top:1rem ;
    `;

const Title=styled.li`
    margin: 2rem 2rem 1rem 2rem;
    font-family: 'Black Han Sans';
    font-size: 1.5rem;
    display: inline-block;
    justify-content: space-between;

`;

