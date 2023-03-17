import { createGlobalStyle } from "styled-components";

const Form = createGlobalStyle`
form{
    width:100%;
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content: space-between;
}
input{
    width: 100%;
    height:45px;
    background-color: ${props=>props.disabled?'#F2F2F2':'#FFFFFF'};
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    margin-bottom: 6px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    color: #333;
    padding: 0 11px;
    box-sizing: border-box;
    &::placeholder{
        color: #DBDBDB;
    }
}
button{
    width:100%;
    height:45px;
    background-color: #52B6FF;
    opacity:${props=>props.disabled?'0.7':'1'};
    border-radius: 5px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 20.976px;
    line-height: 26px;
    text-align: center;
    color: #FFFFFF;
    margin-bottom:25px;
    display:flex;
    align-items: center;
    justify-content:center;
}
a{
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 13.976px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: underline;
    color: #52B6FF;
}
`
export default Form