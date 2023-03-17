import { useState, useContext, useEffect } from "react"
import styled from "styled-components"
import token from '../../constants/token.js'
import TopBar from '../../components/TopBar.js'
import BottonBar from "../../components/BottonBar.js"
import Day from "./Day.js"
import Tasks from "./Tasks.js"
import axios from "axios"
import url from "../../constants/url.js"

export default function TodayPage() {
    const [request, setRequest] = useContext(token)
    const [habitList, setHabitList] = useState([])
    useEffect(()=>{
        const config = { headers: { Authorization: `Bearer ${request}` } }
        axios.get(`${url}today`, config)
        .then((res)=>{
            setHabitList(res.data)
            console.log(res.data)
        })
        .catch((err)=>{
            console.log(err.response.data)
        })
        
    },[])
    return (
        <>
            <TopBar />
            <Container>
                <Day habitList={habitList}/>
                <Tasks habitList={habitList} />
            </Container>
            <BottonBar />
        </>
    )
}
const Container = styled.div`
background-color:#F2F2F2;
height:100vh;
display:flex;
flex-direction: column;
padding:70px 18px;
box-sizing:border-box;
`

