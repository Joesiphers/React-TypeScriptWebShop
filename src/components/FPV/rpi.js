import styled from "styled-components";
import { Fragment } from "react";
import {Helmet} from 'react-helmet';
import { Link } from "react-router-dom";
import BuyButton from "../../share/BuyButton";

function RPI (){
    const title="Full HD 1920 x 1080 Screen for your Raspbery Pi" ;
    const imgsrc="/pic/flowers.jpg";
    return <Fragment>
        <Helmet>
        <title>Pi Screen HDMI Raspberry</title>
            <meta property="og:url"           content="https://supersharpscreen.web.app/rbp" />
            <meta property="og:type"          content="SUPER SHARP" />
            <meta property="og:title"         content="Raspberry Pi SCREEN" />
            <meta property="og:description"   content="High Resolution Screen" />
            <meta property="og:image"         content="https://raspberrypiscreen.web.app/pic/10.jpg" />
            <link rel="icon" href="public/logo.png" />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/" />
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&family=Open+Sans&family=Roboto&display=swap" rel="stylesheet"/>

       </Helmet>
       {/* <div className="title">SuperSharp</div> */}
       <Title>{title} </Title>
        <Mainwrapper>
            <Imagewarp>
                <img src={imgsrc} alt="Raspbery Pi screen"/>
                <Small>once your purchase an item, you will receive a new coupon by email.</Small><Small> Share your new coupon! if anyone purchase with your coupon, you will receive $3 cashback via Paypal .</Small>
            </Imagewarp>
            <PriceWrap>
                <Price> <p>50% off Promotion</p> </Price>
                <BuyButton sprice="32" eprice="45" />
                
            </PriceWrap>
        </Mainwrapper> 
        <Description>
        <Title>Specification</Title> 
        <Link to="/PiDoc">Click to see Docs</Link>
            <ol>1920 X 1080 Resolution</ol>
            <ol>IPS LCD Full HD 1080P </ol>
            <ol>5V micro USB Power-in</ol>
            <ol>with HDMI Video Input</ol>
            <ol></ol>
            <ol></ol>
        <p>Any question? contact  supersharpteam@gmail.com</p>
        <p>info@raspberrypiscreen.com</p>
        <p></p>
        <p><img src="pic/heads.jpg"/> <img src="pic/sizes.png"/></p>
        <p><img src="pic/blacks.jpg"/> <img src="pic/backs.jpg"/></p>
        <p><img src="pic/Verti.jpg"/> </p>
        <p></p>
        <p>
        Change to Horizontal display in Raspberry Pi
        please update the config.txt with following code:</p>
        <p>add these code as the end of config.txt</p> 
        ..........................................................................
        <p>max_framebuffer_width=1080</p>
        <p>max_framebuffer_height=1920</p>
        <p>max_usb_current=1</p>
        <p>hdmi_force_hotplug=1</p>
        <p>hdmi_group=2</p>
        <p>hdmi_mode=87</p>
        <p>#display_hdmi_rotate=3</p>
        <p>display_rotate=3</p>
        <p>lcd_rotate=0</p>
        <p>hdmi_timings=1080 0 26 4 50 1920 0 10 2 5 0 0 0 60 0 135580000 3</p>
        <p> ..............................................................................
</p>
        </Description>
    </Fragment>
}
export default RPI;
const Mainwrapper=styled.div`
    display: flex;
    justify-content:space-evenly ;
`;
const Imagewarp=styled.div`
    margin: 1rem;
`;
const Description=styled.div`
    font-family: 'IBM PLEX MONO';
    width: 80%;
    margin: 0 auto;
`;

const PriceWrap=styled.div`
    text-align:center;
`;
const Price=styled.div`
    margin: 0;
    font-size: large;
    font-family: 'Roboto';
    `;
const Title=styled.div`
    margin: 2rem 2rem 0 2rem;
    font-family: 'Black Han Sans';
    font-size: 1.5rem;
    display: inline-block;
    justify-content: space-between;

`;
const Small = styled.p`
font-size: x-small
`;