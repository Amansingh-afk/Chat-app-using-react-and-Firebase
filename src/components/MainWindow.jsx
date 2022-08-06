import React, {useContext} from 'react';
import {useCollectionData} from 'react-firebase-hooks/firestore'
import { collection } from 'firebase/firestore'
/* Components */
import ChatWindow from './ChatWindow';
import ProfileSidebar from './ProfileSidebar';
/* Styles */
import cl from '../styles/components/MainWindow.module.css';
import AuthContext from '../context';

const MainWindow = ({placeholder, users, isAuth, activeUser, start, chat, search, setSearch, setAuth, setModal}) => {
    const {firestore} = useContext(AuthContext)
    const [messages] = useCollectionData(
        collection(firestore, 'messages')
    )  
    
    return (
        <div className={cl.window}>
            <ChatWindow messages={messages} activeUser={activeUser} placeholder={placeholder} interlocutor={chat[1] ? chat[1] : {id: -1, name: ''}} />
            <ProfileSidebar search={search} setSearch={setSearch} isAuth={isAuth} activeUser={activeUser} users={users} start={start} interlocutor={chat[1] ? chat[1] : {id: -1, name: ''}} setAuth={setAuth} setModal={setModal} />
        </div>
    )
}

export default MainWindow;