import Form from "../../styles/Form"
import styled from "styled-components"
const dayList = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']
export default function AddNewHabit(){
    return(
        <Container>
                <AddHabit>
                    <h1>Meus Hábitos</h1>
                    <button>+</button>
                </AddHabit>
                <CreateHabit>
                    <Form />
                    <form>
                        <input placeholder="nome do habito" />
                        <DayList>
                            {dayList.map((d) => <button type='button'>{d}</button>)}
                        </DayList>
                        <Send>
                            <button type='button'>Cancelar</button>
                            <button type='submit'>Salvar</button>
                        </Send>
                    </form>
                </CreateHabit>
            </Container>
    )
}
const Container = styled.div`
background-color:#F2F2F2;
height:100vh;
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
display:flex;
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
    left: 104px;
    top: 218px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    margin-right:4px; 
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #DBDBDB;
}
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