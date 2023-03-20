import Form from "../../styles/Form"
import styled from "styled-components"
import dayList from '../../constants/dayList.js'
import { useState, useContext } from "react"
import { ThreeDots } from 'react-loader-spinner'
import axios from "axios"
import token from "../../constants/token"
import att from '../../constants/atualization.js'
export default function AddNewHabit() {
    const [request, setRequest] = useContext(token)
    const [atualization, setAtualization] = useContext(att)
    const [showAddHabit, setShowAddHabit] = useState(false)
    const [disabled, setDisabled] = useState(false)
    const [name, setName] = useState('')
    const [days, setDays] = useState([])

    function clickedDay(i) {
        if (days.includes(i)) {
            const newArray = days.filter((e) => e !== i)
            setDays(newArray)
        } else {
            const newArray = [...days, i]
            setDays(newArray)
        }
    }

    function handleForm(e) {
        e.preventDefault()
        if (days.length>0 && name) {
            setDisabled(true)
            const config = { headers: { Authorization: `Bearer ${request}` } }
            const body = { name, days }
            axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', body, config)
                .then((res) => {
                    console.log(res.data)
                    setShowAddHabit(false)
                    setDays([])
                    setName('')
                    setDisabled(false)
                    setAtualization(atualization+1)
                })
                .catch((err) => {
                    alert(err)
                    console.log(err)
                    setDisabled(false)
                    setAtualization(atualization+1)
                })
        }else{
            alert('Você deve preencher todos os campos!')
        }
    }
    return (
        <Container>
            <AddHabit>
                <h1>Meus Hábitos</h1>
                <button data-test='habit-create-btn' onClick={() => setShowAddHabit(true)}>+</button>
            </AddHabit>
            <CreateHabit data-test='habit-create-container' show={showAddHabit}>
                <Form />
                <form onSubmit={handleForm} >
                    <input data-test='habit-name-input'
                        placeholder="nome do habito"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        disabled={disabled}/>
                    <DayList>
                        {dayList.map((d, i) => <ButtonDay
                            key={i}
                            data-test='habit-day'
                            clicked={days.includes(i)}
                            onClick={() => clickedDay(i)}
                            disabled={disabled}
                            type='button'
                        >{d}</ButtonDay>)}
                    </DayList>
                    <Send>
                        <button data-test='habit-create-cancel-btn' type='button' onClick={() => {
                            setShowAddHabit(false)
                        }} disabled={disabled}>Cancelar</button>
                        <button data-test='habit-create-save-btn' type='submit' disabled={disabled}>{disabled ? <ThreeDots
                            height="80"
                            width="80"
                            radius="9"
                            color="#fff"
                            ariaLabel="three-dots-loading"
                            wrapperStyle={{}}
                            wrapperClassName=""
                            visible={true} /> : 'Salvar'}</button>
                    </Send>
                </form>
            </CreateHabit>
        </Container>
    )
}
const Container = styled.div`
background-color:#F2F2F2;
display:flex;
flex-direction: column;
padding:0 18px;
box-sizing:border-box;
button{
    margin:0;
}
`
const AddHabit = styled.div`
margin-top:22px;
display:flex;
align-items: center;
justify-content:space-between;
h1{
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 23px;
    line-height: 29px;
    color: #126BA5;
}
button{
    width:40px;
    height:35px;
    border-radius:5px;
    background-color:#52B6FF;
    display:flex;
    align-items:center;
    justify-content:center;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 26.976px;
    line-height: 34px;
    text-align: center;
    color: #FFFFFF;
}
`
const CreateHabit = styled.div`
width:100%;
height:180px;
background-color:white;
display:${props => props.show ? 'flex' : 'none'};
margin-top:28px;
padding:18px;
box-sizing:border-box;  
`
const DayList = styled.div`
width:100%;
height:min-content;
display:flex;
justify-content:left;
button{
    width: 30px;
    height: 30px;
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
`
const Send = styled.div`
width:100%;
height:min-content;
display:flex;
justify-content:right;
button:first-child{
    display:flex;
    padding:8px 17px;
    width:min-content;
    background-color:#fff;
    color:#52B6FF;
    margin-right:4px;
}
button:last-child{
    display:flex;
    padding:8px 17px;
    width:min-content;
    background-color:#52B6FF;
    color:#fff;
}
`