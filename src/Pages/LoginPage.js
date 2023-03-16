import axios from 'axios'
import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ThreeDots } from 'react-loader-spinner'
import logo from '../assets/logo.png'
import Form from '../styles/Form'
import url from '../constants/url.js'
import styled from 'styled-components'
import token from '../constants/token'
import image from '../constants/image'


export default function LoginPage() {
    const [loginData, setLoginData] = useState({ email: '', password: '' })
    const [disabled, setDisabled] = useState(false)
    const [request, setRequest] = useContext(token)
    const [picture, setPicture] = useContext(image)
    const navigate = useNavigate()

    function handleChange(e) {
        setLoginData({ ...loginData, [e.target.name]: e.target.value })
    }

    function login(e) {
        setDisabled(true)
        e.preventDefault()
        axios.post(`${url}login`, { ...loginData })
            .then(res => {
                setDisabled(false)
                setRequest(res.data.token)
                setPicture(res.data.image)
                navigate('/hoje')
            })
            .catch(err => {
                alert(err.response.data.message)
                setDisabled(false)
            })
    }
    return (
            <Container>
            <Form />
                <img src={logo} />
                <form onSubmit={login}>
                    <input onChange={handleChange}
                        value={loginData.email}
                        name='email'
                        type='email'
                        placeholder='email'
                        disabled={disabled}
                        required />
                    <input onChange={handleChange}
                        value={loginData.password}
                        name='password'
                        type='password'
                        placeholder='senha'
                        disabled={disabled}
                        required />
                    <button type='submit'
                        disabled={!(loginData.email && loginData.password) || disabled}
                    >{disabled ? <ThreeDots
                        height="80"
                        width="80"
                        radius="9"
                        color="#fff"
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{}}
                        wrapperClassName=""
                        visible={true} /> : 'Entrar'}</button>
                </form>
                <Link to="/cadastro">Não tem uma conta? Cadastre-se!</Link>
            </Container>
    )
}
const Container = styled.div`
display:flex;
flex-direction:column;
padding: 0 36px;
`