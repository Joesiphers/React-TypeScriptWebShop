import styled from "styled-components";
function RpiDocs (){
    return <Description>
        <Items><a href="../pic/G01.step" download>Download 3D step model of reaspberry pi Screen GB01</a>
</Items><Items></Items>
        <p> Change to Horizontal disply in Raspberry Pi</p>
        <p>please add the following codeat the end of config.txt</p>
        <p>----------------------------------------------------</p>
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
        <p> .............................................................................. </p>
        <p></p>
        <p></p><p></p>
    </Description>
    
}
export default RpiDocs;

 const Description=styled.div`
font-family: 'IBM PLEX MONO';
width: 80%;
margin: 0 auto;
`;
const Items=styled.div`
    margin: 1rem;
    font-family: 'Lucida Sans';
    font-size: 1rem;
    display: inline-block;
    justify-content: space-between;
    text-decoration: none;

`;