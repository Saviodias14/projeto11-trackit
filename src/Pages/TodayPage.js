import { useState, useContext, useEffect } from "react"
import styled from "styled-components"
import token from '../constants/token.js'
import TopBar from '../components/TopBar.js'

export default function TodayPage() {
    const [request, setRequest] = useContext(token)
    return (
        <Container>
            <TopBar/>
        </Container>
    )
}
const Container = styled.div`
display:flex;
flex-direction: column;
padding:70px 0;
box-sizing:border-box;
`