import check from '../../assets/check.png'
import styled from 'styled-components'

export default function Tasks({ habitList }) {
    return (
        <Task data-test='today-habit-container'>
            <h1 data-test='today-habit-name'>Ler 1 capítulo de livro</h1>
            <p data-test='today-habit-sequence'>Sequência atual: 3 dias</p>
            <p data-test='today-habit-record'>Seu recorde: 5 dias</p>
            <div data-test='today-habit-check-btn'>
                <img src={check} />
            </div>
        </Task>
    )
}
const Task = styled.div`
background-color:white;
border-radius:5px;
width:100%;
height:94px;
margin-top:28px;
padding-top:0;
padding: 0 15px;
box-sizing:border-box;
display: flex;
flex-direction:column;
align-items:left;
justify-content:space-evenly;
position:relative;
h1{
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    color: #666666;
}
p{
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    color: #666666;
}
div{
    background: #EBEBEB;
    border: 1px solid #E7E7E7;
    border-radius: 5px;
    width:69px;
    height:69px; 
    position:absolute;
    right:18px;
    bottom:12.5px; 
    display:flex;
    align-items:center;
    justify-content:center;
}
`