import { useContext, useEffect, useState } from "react"
import styled from "styled-components"
import dayList from '../../constants/dayList.js'
import trash from '../../assets/trash-outline.svg'
import axios from "axios"
import token from "../../constants/token.js"
import att from "../../constants/atualization.js"
import percentual from "../../constants/percent.js"
export default function Habits() {
    const [myHabits, setMyHabits] = useState([])
    const [request, setRequest] = useContext(token)
    const [atualization, setAtualization] = useContext(att)
    const [percent, setPercent] = useContext(percentual)
    const config = { headers: { Authorization: `Bearer ${request}` } }
    console.log(myHabits)
    useEffect(() => {
        axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today`, config)
            .then((res) => {
                setPercent(res.data.length?(((res.data.filter((l) => l.done)).length)/res.data.length).toFixed(2):0)
            })
        axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', config)
            .then((res) => {
                console.log(res.data)
                setMyHabits(res.data)
                })
            .catch((err) => alert(err.response.data))
    }, [atualization])

    function erase(id){
        axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`, config)
        .then(()=>{
            console.log(atualization+1)
            setAtualization(atualization+1)
        })
    }
    if (myHabits.length<1) {
        return (
            <Container>
                <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
            </Container>
        )
    }
    return (
        <Container>
            {myHabits.map((h) =>
                <Habit data-test='habit-container' key={h.id}>
                    <h1 data-test='habit-name'>{h.name}</h1>
                    <DayList>
                        {dayList.map((d, i) => <ButtonDay key={i} clicked={h.days.includes(i)} data-test='habit-day' type='button'>{d}</ButtonDay>)}
                    </DayList>
                    <img data-test='habit-delete-btn' src={trash} onClick={()=>window.confirm('Deseja apagar esse hábito?')?erase(h.id):''}/>
                </Habit>)}
        </Container>
    )
}
const Container = styled.div`
display:flex;
flex-direction:column;
margin-top:19px;
padding:0 18px;
z-index:0;
p{
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: #666666;
}
h1{
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #666666;
}
img{
    width:15px;
    position:absolute;
    top:11px;
    right:10px;
}
`
const Habit = styled.div`
width:100%;
height:91px;
box-sizing:border-box;
display:flex;
flex-direction:column;
padding:13px 0 15px 15px;
margin-top:10px;
align-items:left;
justify-content: space-between;
background-color: #FFFFFF;
border-radius: 5px;
position:relative;
z-index:0;
` 
const DayList = styled.div`
width:100%;
height:min-content;
display:flex;
flex-direction:row;
justify-content:left;
z-index:0;
button{
    width: 30px;
    height: 30px;
    margin-bottom:0;
    border-radius: 5px;
    margin-right:4px; 
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
}
`
const ButtonDay = styled.button`
background-color: ${props => props.clicked ? '#CFCFCF' : '#FFFFFF'};
border: 1px solid ${props => props.clicked ? '#CFCFCF' : '#D5D5D5'};
color: ${props => props.clicked ? '#fff' : '#DBDBDB'};
z-index:0;
`