
import styled from "styled-components";
import { Fragment } from "react";
import  {Link} from "react-router-dom";
import HB600 from "./HB600";
import HB800 from "./HB800";

function FPV (){
    return <Description>
        <LiWhite>
                <Imagemore>
                <Link to="/FPV/HB600">    
                <p> 800*480 1500 nit high Brightness FPV</p>
                 <img src="pic/HB600th.jpg" alt="pics" sizes="400"/>
                </Link>
                </Imagemore>
                <Imagemore>
                    <Link to="FPV/HB800"> 
                
                    <p> 1280*800 1200 nit high Brightness FPV</p>
                    <img src="pic/HB800th.jpg" alt="pics"/>
                   
                </Link> </Imagemore>

            </LiWhite>
                <div className="headline">
                    <li>Snow Flake Screen - when no signal</li>
                    <li>Metal Frame for Robust</li>
                    <li>Optional recording DVR recording</li>
                    <li>Diversity 5.8g Receiver</li>
                    <li></li>
                </div>
                
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
    
    


}
export default FPV

const LiWhite=styled.div`
    display: flex;
    flex-direction: row;
    color: black;
    width: 100%;
    margin: 1rem;
`;
const Imagemore=styled.div`
    width: 50%;
    padding: 1rem;
`;


const Description=styled.div`
    font-family: 'IBM PLEX MONO';
    width: 100%;
    margin: 0 auto;
`;



