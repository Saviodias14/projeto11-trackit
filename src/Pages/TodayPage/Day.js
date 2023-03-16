import styled from "styled-components"
import dayjs from "dayjs"
import 'dayjs/locale/pt-br.js'
import { useState } from "react"

export default function Day({habitList}) {
    const [weekDay, setWeekDay] = useState(dayjs().locale('pt-br').format('dddd, DD/MM'))

        setTimeout(()=>{
            setWeekDay(dayjs().locale('pt-br').format('Dddd, DD/MM'))
        },60000)
    console.log(weekDay)
    
    return (
        <Container>
            <h1>{weekDay[0].toUpperCase() + weekDay.substring(1)}</h1>
            <h2>Nenhum hábito concluído ainda</h2>
        </Container>
    )
}
const Container = styled.div`
margin-top:28px;
h1{
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 23px;
    line-height: 29px;
    color: #126BA5;
}
h2{
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #BABABA;
}
`