import styled from "styled-components"
import Modal from "../share/Modal";
import { useState } from "react";
function Contact  (){
  const [modelOpen,setModalOpen] = useState(false);

  return <div> 
   
    {modelOpen && <Modal setModalOpen={setModalOpen} content={"hello"}/>}
    <Headline>About us</Headline> 
    <Content>SuperSharp focus on providing special screen.  </Content>
    <Content>Currently we are working on 5"-7" High resolution screen for Raspberry Pi/PC
      </Content>  
    <Headline> Contact:</Headline> 
      <Content>info@raspberrypiscreen.com</Content> 
      <Content>supersharpteam@gmail.com </Content> 
      
      <Headline>Return and refund policy</Headline>
      <Content>All Items purchase from our website have 6 month Warranty.</Content> 
      <Content>If device faulty on receive, we will have full refund.</Content>  
      <Content>We will try our best to solve your concern, so please send us a message, if you have problem on using the device.</Content> 
      <Content  >
     <a  href="https://www.facebook.com/profile.php?id=100078110523724">
       <img src="/pic/facebook.jpg" alt="Facebook"></img>
       
     <p>www.facebook.com/profile.php?id=100078110523724</p> 
     </a>
     </Content>
    </div>
  }
  /** <button onClick={()=>{setModalOpen(true)}}>Open Modal</button> */
export default Contact;
const Headline=styled.div`
  font-size:x-large ;
  font-family:cambria ;
  margin:2rem ;
`
const Content=styled.div`
  font-size:medium ;
  margin-left:4rem ;
`