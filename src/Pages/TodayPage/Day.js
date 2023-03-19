import styled from "styled-components"
import dayjs from "dayjs"
import 'dayjs/locale/pt-br.js'
import { useContext, useState } from "react"
import percentual from "../../constants/percent"

export default function Day({habitList}) {
    const [percent, usePercent] = useContext(percentual)
    const [weekDay, setWeekDay] = useState(dayjs().locale('pt-br').format('dddd, DD/MM'))

        setTimeout(()=>{
            setWeekDay(dayjs().locale('pt-br').format('dddd, DD/MM'))
        },1000)
    
    return (
        <Container percent={percent}>
            <h1 data-test='today'>{weekDay[0].toUpperCase() + weekDay.substring(1)}</h1>
            <h2 data-test='today-counter'>{percent>0?`${percent*100}% dos hábitos concluídos`:'Nenhum hábito concluído ainda'}</h2>
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
    color: ${props=>props.percent>0?'#8FC549':'#BABABA'};
}
`