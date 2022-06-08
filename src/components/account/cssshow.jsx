import { useState,useRef } from "react"
import {CSSTransition} from  "react-transition-group"
import styled from "styled-components"

const CssShow=(props)=>{
    const {show, closeShow}=props
    const ref=useRef(null)
    return <div  >
        <CSSTransition 
            in={show} 
            timeout={1000} 
            classNames="art" 
            nodeRef={ref}
            unmountOnExit >
    <Wrap  ref={ref} >
        <button onClick={closeShow} >close</button>
        <div>hah</div>    <div>uu</div>    favories
    </Wrap>
</CSSTransition> </div>
}
export default CssShow;
const Wrap=styled.div`
&.art-enter{
      opacity:0 ;
      transform:translateX(100%) ;
  }
  &.art-enter-active{
      opacity:50% ;
      transform:translateX(50%) ;
      transition: all, 800ms;
  }
  &.art-exit{
      opacity:1 ;
  } ;
  &.art-exit-active{
      opacity:0 ;
      transform: scale(0.5);
      transition: opacity 500ms, transform 400ms;
  }

  `;