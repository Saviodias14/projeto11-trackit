import check from '../../assets/check.png'
import styled from 'styled-components'
import { useContext, useState } from 'react'
import token from '../../constants/token'
import axios from 'axios'
import percentual from '../../constants/percent'

export default function Tasks({ o, setCheckedList, checkedList}) {
    const [request, setRequest] = useContext(token)
    const config = { headers: { Authorization: `Bearer ${request}` } }
    
    function checkTask() {
        if (o.done) {
            axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${o.id}/uncheck`, '', config)
                .then((res) => {
                    checkedList ? setCheckedList(false) : setCheckedList(true)
                })
        } else {
            axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${o.id}/check`, '', config)
                .then((res) => {
                    checkedList ? setCheckedList(false) : setCheckedList(true)
                })
        }
    }
    return (
        <Task data-test='today-habit-container'
            done={o.done}
            sequence={o.currentSequence}
            record={o.highestSequence}>
            <h1 data-test='today-habit-name'>{o.name}</h1>
            <p data-test='today-habit-sequence'>Sequência atual: <span>{o.currentSequence} dias</span></p>
            <p data-test='today-habit-record'>Seu recorde: <span>{o.highestSequence} dias</span></p>
            <div onClick={checkTask} data-test='today-habit-check-btn'>
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
    background: ${props => props.done ? '#8FC549' : '#EBEBEB'};
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
span:first-child{
    color:${props => props.done ? '#8FC549' : '#666666'};
}
span:last-child{
    color:${props => (props.sequence > 0 && props.sequence >= props.record && props.done)? '#8FC549' : '#666666'};  
}
`