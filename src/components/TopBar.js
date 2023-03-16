import styled from "styled-components"
import image from "../constants/image"
import { useContext } from "react"
export default function TopBar() {
    const [picture, setPicture] = useContext(image)
    return (
        <Top data-test='header'>
            <h1>TrackIt</h1>
            <img src={picture} />
        </Top>
    )
}
const Top = styled.div`
background-color:#126BA5;
display:flex;
align-items:center;
justify-content:space-between;
padding:0 18px;
box-sizing:border-box;
width:100%;
height:70px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
position:fixed;
left:0;
top:0;
h1{
    font-family: 'Playball';
    font-style: normal;
    font-weight: 400;
    font-size: 38.982px;
    line-height: 49px;
    color: #FFFFFF;
}
img{
    width:51px;
    height: 51px;
    border-radius:98px;
}
`