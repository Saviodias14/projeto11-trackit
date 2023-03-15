import { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../assets/logo.png'



export default function LoginPage() {
    const [loginData, setLoginData] = useState({email:'', password:''})

    function handleChange(e){
        setLoginData({ ...loginData, [e.target.name]: e.target.value })
    }

    return (
        <Container>
            <img src={logo} />
            <form>
                <input onChange={handleChange}
                    value={loginData.email}
                    name='email'
                    type='email'
                    placeholder='email'
                    required />
                <input onChange={handleChange}
                    value={loginData.password}
                    name='password'
                    type='password'
                    placeholder='senha'
                    required />
                <button type='submit'>Entrar</button>
            </form>
            <Link>Não tem uma conta? Cadastre-se!</Link>
        </Container>
    )
}
const Container = styled.div`
display:flex;
flex-direction:column;
padding: 0 36px;
img{
    width:180px;
    margin:68px auto 32px auto;
}
form{
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content: space-between;
}
input{
    width: 100%;
    height:45px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    margin-bottom: 6px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    color: #333;
    padding: 0 11px;
    box-sizing: border-box;
    &::placeholder{
        color: #DBDBDB;
    }
}
button{
    width:100%;
    height:45px;
    background: #52B6FF;
    border-radius: 5px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 20.976px;
    line-height: 26px;
    text-align: center;
    color: #FFFFFF;
    margin-bottom:25px;
}
a{
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 13.976px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: underline;
    color: #52B6FF;


}
`