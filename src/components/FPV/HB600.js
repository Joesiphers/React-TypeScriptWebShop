
import styled from "styled-components";
import { Fragment } from "react";
import {Helmet} from 'react-helmet';
import BuyButton from "../../share/BuyButton";

function HB600 (){
    const title="Enjoy your FPV under Sunlight" ;
    const imgsrc="../pic/HB600s.jpg";
    return <Fragment>
        <Helmet>
        
     <meta charset="utf-8" />
     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
     <meta property="type" content="website" />
     <meta property="url" content="http://www.raspberrypiscreen.com/fpv" />
     <meta name="msapplication-TileColor" content="#ffffff" />
     <meta name="theme-color" content="#ffffff" />
     <meta name="robots" content="noodp" />
     <meta property="title" content="FPV With Sunshine" />
     <meta name="description" content="high brightness sun readble FPV SCREEN FOR SUNLIGHT" />
     <meta property="image" content="https://supersharpscreen.web.app/pic/5.jpg" />
     <meta property="og:locale" content="en_US" />
     <meta property="og:type" content="high brightness FPV SCREEN"/>
     <meta property="og:title" content="sun readble FPV SCREEN" />
     <meta property="og:image" content="https://supersharpscreen.web.app/pic/5.jpg" />
     <meta content="image/*" property="og:image:type" />
     <meta property="og:url" content="https://supersharpscreen.web.app/fpv" />
     <meta property="og:site_name" content="SUPERSHARP" />
     <meta property="og:description" content="FPV With Sunlight" />  
     <link rel="icon" href="public/logo.png" />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/" />
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&family=Open+Sans&family=Roboto&display=swap" rel="stylesheet"/>

    
    </Helmet><Title>{title}</Title>
        <Mainwrapper>
            <Imagewarp>
            
                <img src={imgsrc} alt="super Sharp"/>
            </Imagewarp>
            <PriceWrap><BuyButton sprice="85" eprice="105" /></PriceWrap>
            
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
                    <img src="../pic/HB600-bs.jpg" alt="pics"/>
                </Imagemore>
            </LiBlack>
            <LiWhite>
                <Imagemore>
                    <img src="../pic/HB3D.jpg" alt="pics"/>
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
export default HB600;
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

