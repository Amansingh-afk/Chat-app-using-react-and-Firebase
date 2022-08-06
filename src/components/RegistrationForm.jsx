import React, {useState} from 'react'

import AuthInput from './UI/AuthInput'
import PasswordInput from './UI/PasswordInput'
import SubmitButton from './UI/SubmitButton'

import cl from '../styles/components/LoginForm.module.css'

const RegistrationForm = ({form, setForm, createUser, createReport, setReport}) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [checkPassword, setCheckPassword] = useState('')

    const register = (e) => {
        e.preventDefault();
        if (password === checkPassword) {
            const newUser = {
                id: Math.floor(Math.random() * (10000 - 1) + 1), name: username, password: password
            }
            setForm(true)
            setReport(false)
            createUser(newUser)
        }
        else {
            createReport(`Passwords doesn't macth`)
        }
    }

    return (
        <form onSubmit={register} className={!form ? cl.active : cl.nonActive}>
            <AuthInput value={username} onChange={(e) => setUsername(e.target.value)} placeholder={'Your username'} />
            <PasswordInput value={password} onChange={(e) => setPassword(e.target.value)} placeholder={'Your password'} />
            <PasswordInput value={checkPassword} onChange={(e) => setCheckPassword(e.target.value)} placeholder={'Repeat your username'} />
            <SubmitButton>Sign Up</SubmitButton>
        </form>
    )
}

export default RegistrationForm