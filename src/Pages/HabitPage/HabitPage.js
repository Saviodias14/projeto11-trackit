import styled from "styled-components"
import BottonBar from "../../components/BottonBar"
import TopBar from "../../components/TopBar"
import AddNewHabit from "./AddNewHabit"
export default function HabitPage() {
    return (
        <>
            <TopBar />
            <Container>
                <AddNewHabit/>
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