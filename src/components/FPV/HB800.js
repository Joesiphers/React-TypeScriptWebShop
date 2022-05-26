
import styled from "styled-components";
import { Fragment } from "react";
import BuyButton from "../../share/BuyButton";

function HB800 (){
    const title="Enjoy your FPV under Sunlight" ;
    const imgsrc="../pic/HB800s.jpg";
    return <Fragment>
    <Title>{title}</Title>
        <Mainwrapper>
            <Imagewarp>
            
                <img src={imgsrc} alt="super Sharp"/>
            </Imagewarp>
            <PriceWrap><BuyButton sprice="135" eprice="155"/></PriceWrap>
            
        </Mainwrapper> 
        <Description>
            <LiBlack>
                <div className="headline">
                    <li>High Brightness 1500 nit;</li>
                    <li>readable under Sunlight</li>
                    <li>Resolution 800 X 600</li>
                    <li>Snow Flake Screen - when no signal</li>
                    <li>Metal Frame for Robust</li>
                    <li>Optional recording DVR recording</li>
                    <li>Diversity 5.8g Receiver</li>
                    <li></li>
                </div>
                <Imagemore>
                <p> bring this screen to FPV</p>
                    <img src="../pic/HB800-Bs.jpg" alt="pics"/>
                </Imagemore>
            </LiBlack>
            <LiWhite>
                <Imagemore>
                    <img src="pic/HB3D.jpg" alt="pics"/>
                </Imagemore>
                <div className="headline">
                    <li>Have your Case </li>
                    <li>with 3D print yourself</li>
                    <li>3D file avaliable</li>
                    <li></li>
                </div>
            </LiWhite>
        </Description>
    </Fragment>
}
export default HB800;
const LiBlack=styled.div`
    display: flex;
    flex-direction: row;
    background-color: #1d1c1c;
    color: white;
    width: max-content;
    margin: 2rem 0;
`;
const LiWhite=styled.div`
    display: flex;
    flex-direction: row;
    color: black;
    width: 100%;
    margin: 2rem 0;
`;
const Imagemore=styled.div`
    width: 60%;
    padding: 1rem;
`;

const Mainwrapper=styled.div`
    display: flex;
    margin:  1rem;
    font-family: 'Roboto';
`;
const Imagewarp=styled.div`
    margin: 0.2rem;
`;
const Description=styled.div`
    font-family: 'IBM PLEX MONO';
    width: 100%;
    margin: 0 auto;
`;

const PriceWrap=styled.div`
    width: 25vw;
    text-align:center;
    margin: auto;
`;

const Title=styled.div`
    margin: 2rem 2rem 1rem 2rem;
    font-family: 'Black Han Sans';
    font-size: 1.5rem;
    display: inline-block;
    justify-content: space-between;

`;

