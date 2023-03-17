import Form from '../styles/Form.js'
import logo from '../assets/logo.png'
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from 'styled-components';
import axios from 'axios';
import url from '../constants/url.js';
import { ThreeDots } from 'react-loader-spinner';

export default function RegisterPage() {
    const [registerData, setRegisterData] = useState({ email: "", name: "", image: "", password: "" })
    const [disabled, setDisabled] = useState(false)
    const navigate = useNavigate()

    function handleChange(e) {
        setRegisterData({ ...registerData, [e.target.name]: e.target.value })
    }

    function register(e) {
        setDisabled(true)
        e.preventDefault()
        axios.post(`${url}sign-up`, { ...registerData })
            .then(res => {
                console.log(res.data)
                setDisabled(false)
                navigate('/')
            })
            .catch(err => {
                alert(err.response.data.message)
                setDisabled(false)
            })
    }
    return (
        <Container>
            <img src={logo} />
            <Form disabled={disabled}/>
            <form onSubmit={register}>
                <input data-test='email-input' onChange={handleChange}
                    value={registerData.email}
                    name='email'
                    type='email'
                    placeholder='email'
                    disabled={disabled}
                    required />
                <input data-test='password-input' onChange={handleChange}
                    value={registerData.password}
                    name='password'
                    type='password'
                    placeholder='senha'
                    disabled={disabled}
                    required />
                <input data-test='user-name-input' onChange={handleChange}
                    value={registerData.name}
                    name='name'
                    type='text'
                    placeholder='nome'
                    disabled={disabled}
                    required />
                <input data-test='user-image-input' onChange={handleChange}
                    value={registerData.image}
                    name='image'
                    type='url'
                    placeholder='foto'
                    disabled={disabled}
                    required />
                <button data-test='signup-btn' type='submit'
                    disabled={!(registerData.email && registerData.password && registerData.image && registerData.name) || disabled}>{disabled ?
                        <ThreeDots
                            height="80"
                            width="80"
                            radius="9"
                            color="#fff"
                            ariaLabel="three-dots-loading"
                            wrapperStyle={{}}
                            wrapperClassName=""
                            visible={true}
                        /> : 'Cadastrar'}</button>
            </form>
            <Link data-test='login-link' to="/">Já tem uma conta? Faça login!!</Link>
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
`