import styled from "styled-components"

export default function Policy (){
    return <div>
        
      <Headline>Return and refund</Headline>
      <Content>All Items purchased from our website have 6 month Warranty.</Content> 
      <Content>If device faulty on receive, we will have full refund.</Content>  
      <Content>Please send us a message, if you have any concern about the devices.</Content> 
      <Content>supersharpteam@gmail.com</Content>
    </div>
  }
const Headline=styled.div`
  font-size:large ;
  font-family:cambria ;
  color:Green;
  margin:2rem ;
`
const Content=styled.div`
  font-size:small ;
  margin-left:2rem ;
`
   