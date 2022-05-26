import styled from "styled-components"
import reactDom from "react-dom";

type IProps={
    onClick:()=>void;
    children:React.ReactNode

}
const BackDrop:React.FC<IProps> =(props,)=>{
    
    const backdrop=(<Wrapper onClick={props.onClick} >
            <Content>{props.children}
                </Content> 
        </Wrapper>) 
    
    return (
    reactDom.createPortal (backdrop ,document.getElementById("backdrop")! )
    )
}
export default BackDrop
const Wrapper=styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.5);
    position: fixed;
    z-index:0;
    `;
const Content=styled.div`

`;
