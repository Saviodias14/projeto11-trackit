import styled from "styled-components"
import BottonBar from "../components/BottonBar"
import TopBar from "../components/TopBar"
export default function HistoricPage() {
    return (
        <>
            <TopBar />
            <Container>
                <h1 data-test='today'>Histórico</h1>
                <h2 data-test='today-counter'>Em breve você poderá ver o histórico dos seus hábitos aqui!</h2>
            </Container>
            <BottonBar />
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
h1{
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 23px;
    line-height: 29px;
    color: #126BA5;
    margin-top:28px;
}
h2{
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #BABABA;
    margin-top:17px;
}
`