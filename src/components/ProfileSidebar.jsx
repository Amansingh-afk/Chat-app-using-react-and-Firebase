import React from 'react'
import { Navigate } from 'react-router';

import FriendsList from './FriendsLits';
import SearchInput from './UI/SearchInput';

import cl from '../styles/components/ProfileSidebar.module.css'

import avatar from '../styles/images/avatar.png'

const ProfileSidebar = ({isAuth, activeUser, users, start, interlocutor, search, setSearch, setAuth, setModal}) => {
    const logOut = () => {
        setModal(true)
        setAuth(false)
    }

    return isAuth ? (
        <div className={cl.profile}>
            <div className={cl.profile_info}>
                <img src={avatar} className={cl.avatar} alt="" />
                <div className={cl.user_box}>
                    <h1 className={cl.username}>{isAuth ? activeUser.name : 'Anonimous'}</h1>
                    <button onClick={logOut} className={cl.logout}>Log out</button>
                </div>
                <SearchInput value={search} onChange={e => setSearch(e.target.value)}/>
                <div>
                    <FriendsList interlocutor={interlocutor} users={users} start={start} activeUser={activeUser} />
                </div>
            </div>
        </div>
    )
    :
    (
        <Navigate to={'/'} />
    )
}

export default ProfileSidebar