import React, { useState, useMemo } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AuthContext from './context/index';
import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'
/* Router */
import AppRouter from './router/AppRouter';
/* Styles */
import './styles/App.css'

function App() {
    const [isAuth, setAuth]= useState(false);
    const [users, setUsers] = useState([
        {id: 1, name: 'Admin', password: 'Firebase'},
        {id: 2, name: 'test_user', password: 'password'},
        {id: 5, name: 'test_user_2', password: 'password'},
    ]);
    const [activeUser, setActiveUser] = useState({})
    const [chat, setChat] = useState([
        activeUser,
    ])
    const [modal, setModal] = useState(isAuth ? false : true);
    const [placeholder, setPlaceholder] = useState('Write a message...')
    const [search, setSearch] = useState('')

    const friendSearcher = useMemo(() => {
        return users.filter(user => user.name.includes(search))
    }, [search, users])

    const createUser = (newUser) => {
        setUsers([...users, newUser])
    }

    const startChatting = (receiver) => {
        if (chat.length > 1) {
            chat.splice(chat.length - 1, 1)
        }
        setChat([...chat, receiver])
    }

    console.log(chat)
    
    const firebaseConfig = {
        apiKey: "AIzaSyBA4aPK2OEyY_15-4j3cp4W0-TBc9OyT7s",
        authDomain: "talkme-8f611.firebaseapp.com",
        projectId: "talkme-8f611",
        storageBucket: "talkme-8f611.appspot.com",
        messagingSenderId: "572879961202",
        appId: "1:572879961202:web:2d28eda3b46dc78510d6eb",
        measurementId: "G-V753M9WQ4S"
    }
    
    const app = initializeApp(firebaseConfig)
    const firestore = getFirestore(app)

    console.log(`${activeUser.name} chats with ${chat.length === 2 ? chat[1].name : 'nobody :('}`)

    return (
        <AuthContext.Provider value={{
            isAuth,
            setAuth,
            app,
            firestore
        }}>
            <BrowserRouter>
                <div className='App'>
                    <AppRouter
                        isAuth={isAuth}
                        setAuth={setAuth}
                        modal={modal}
                        activeUser={activeUser}
                        setActiveUser={setActiveUser}
                        setModal={setModal}
                        users={friendSearcher}
                        placeholder={placeholder}
                        setPlaceholder={setPlaceholder}
                        createUser={createUser}
                        start={startChatting}
                        chat={chat}
                        search={search}
                        setSearch={setSearch}
                    />
                </div>
            </BrowserRouter>
        </AuthContext.Provider>
    )
}

export default App;