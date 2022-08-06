import React from 'react'

import cl from '../styles/components/Friend.module.css'

import avatar from '../styles/images/avatar.png'

const Friend = ({user, start, interlocutor}) => {
    const startChatting = () => {
        start(user)
    }

    return (
        <div onClick={startChatting} className={user.id === interlocutor.id ? cl.userActive : cl.user}>
            <h1 className={cl.username}>{user.name}</h1>
            <img src={avatar} className={cl.avatar} alt="" />
        </div>
    )
}

export default Friend