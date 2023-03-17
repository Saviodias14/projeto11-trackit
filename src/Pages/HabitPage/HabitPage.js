import { useState } from "react"
import styled from "styled-components"
import BottonBar from "../../components/BottonBar"
import TopBar from "../../components/TopBar"
import AddNewHabit from "./AddNewHabit"
import Habits from "./Habits"
export default function HabitPage() {
    const [atualization, setAtualization] = useState([])
    return (
        <Container>
            <TopBar />
            <AddNewHabit setAtualization={setAtualization} atualization={atualization}/>
            <Habits setAtualization={setAtualization} atualization={atualization} />
            <BottonBar />
        </Container>
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