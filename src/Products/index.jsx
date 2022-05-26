import styled from "styled-components"
import { Outlet,useParams } from "react-router-dom"
export default function Product (props){
    console.log("product")
    const params=useParams();
    console.log(params)
    return (
        <div>
        <div>ProductId is {params.productId}</div>
        <Outlet/>
        </div>
    )
}