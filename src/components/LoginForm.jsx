import React , {useContext, useState} from 'react'
import AuthContext from '../context'
import { Navigate } from 'react-router'

import AuthInput from './UI/AuthInput'
import PasswordInput from './UI/PasswordInput'
import SubmitButton from './UI/SubmitButton'

import cl from '../styles/components/LoginForm.module.css'

const LoginForm = ({users, setModal, setActiveUser, form, createReport, setReport}) => {
    const {isAuth, setAuth} = useContext(AuthContext)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const login = (e) => {
        e.preventDefault();
        let c = 0
        for (let i = 0; i < users.length; i++) {
            if (users[i].name === username && users[i].password === password) {
                setActiveUser(users[i])
                setAuth(true)
                setModal(false)
                setReport(false)
                c++
            }
        }

        if (c === 0) {
            createReport('Incorrect username or password')
        }
    }

    return isAuth ? (
        <Navigate to={'/main'} />
    ) 
    :
    (
        <form onSubmit={login} className={form ? cl.active : cl.nonActive}>
            <AuthInput value={username} onChange={(e) => setUsername(e.target.value)} placeholder={'Your username'}/>
            <PasswordInput value={password} onChange={(e) => setPassword(e.target.value)} placeholder={'Your password'} />
            <SubmitButton>Sign In</SubmitButton>
        </form>
    )
}

export default LoginForm