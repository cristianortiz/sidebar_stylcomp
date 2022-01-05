import React from 'react'
import { LoginBoxContainer, LoginButton, LoginForm, LoginInput, LoginMain, LoginTitle } from './login.styles'

const Login = () => {
    return (
        <LoginMain>
            <LoginBoxContainer>
            <LoginTitle>Ingreso Dashboard Postgrado</LoginTitle>
            <LoginForm>
                <LoginInput type="email" placeholder="Email" name="email"></LoginInput>
                <LoginInput type="password"  placeholder="Password" name="password"></LoginInput>
                <LoginButton  type="submit">Login</LoginButton>
            </LoginForm>
            </LoginBoxContainer>
        </LoginMain>
     )
}

export default Login
