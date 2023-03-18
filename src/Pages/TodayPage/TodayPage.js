import { useState, useContext, useEffect } from "react"
import styled from "styled-components"
import token from '../../constants/token.js'
import TopBar from '../../components/TopBar.js'
import BottonBar from "../../components/BottonBar.js"
import Day from "./Day.js"
import Tasks from "./Tasks.js"
import axios from "axios"
import percentual from "../../constants/percent.js"

export default function TodayPage() {
    const [request, setRequest] = useContext(token)
    const [habitList, setHabitList] = useState([])
    const [checkedList, setCheckedList] = useState(true)
    const [percent, setPercent] =useContext(percentual)
    console.log(percent)
    useEffect(()=>{
        const config = { headers: { Authorization: `Bearer ${request}` } }
        axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today`, config)
        .then((res)=>{
            setHabitList(res.data)
            setPercent((res.data.filter((l)=>l.done)).length/res.data.length)
            console.log(res.data)
        })
        .catch((err)=>{
            console.log(err.response.data)
        })
        
    },[checkedList])
    return (
        <>
            <TopBar />
            <Container>
                <Day habitList={habitList}/>
                {habitList.map((o)=>
                <Tasks key={o.id}
                setCheckedList={setCheckedList}
                checkedList={checkedList} 
                name={o.name} 
                sequence={o.currentSequence} 
                record={o.highestSequence} 
                done={o.done}
                id={o.id}/>)}
            </Container>
            <BottonBar/>
        </>
    )
}
const Container = styled.div`
background-color:#F2F2F2;
min-height:100vh;
display:flex;
flex-direction: column;
padding:70px 18px 130px 18px;
box-sizing:border-box;
`

