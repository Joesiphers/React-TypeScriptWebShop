import styled from "styled-components"

export default function Modal (props){
    return (
        <ModalBackground>
            <Wrapper>
                <Title>
                    {props.title}
                </Title>
            <Content>
            <div>{props.content}</div> 
            </Content>
            <button>{} </button>
            </Wrapper>
        </ModalBackground>
    )

}

const ModalBackground=styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgba(200, 200, 200);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    `;

const Content=styled.div`
    display:block ;
`;
const Title=styled.div`
    width: 100%;
    border:1px solid;
`;
const Wrapper=styled.div`
    z-index: 10;
    position: fixed;
    left: 0;
    width: 100%;
    background: white;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    border-radius: 8px;
`;
    