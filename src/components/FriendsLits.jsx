import React from 'react'

import Friend from './Friend'

import cl from '../styles/components/FriendsList.module.css'

const FriendsList = ({users, activeUser, start, interlocutor}) => {
    return (
        <div className={cl.users}>
            {users.map((user, index) => 
                user.id !== activeUser.id ? <Friend interlocutor={interlocutor} start={start} key={index} user={user} /> : <li key={index} style={{display: 'none'}}></li>
            )}
        </div>
    )
}

export default FriendsList