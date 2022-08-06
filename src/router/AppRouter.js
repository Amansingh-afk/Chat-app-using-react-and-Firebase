import React from 'react';
import {Routes, Route} from 'react-router-dom';
/* Components */
import MainWindow from '../components/MainWindow';
import ModalWindow from '../components/ModalWindow';

function AppRouter({
    placeholder,
    setPlaceholder,
    users,
    isAuth,
    modal,
    setModal,
    activeUser,
    setActiveUser,
    createUser,
    start,
    chat,
    search,
    setSearch,
    setAuth
    }) {
    return (
        <Routes>
            <Route 
             path={"/main"} 
             element={<MainWindow
             placeholder={placeholder} 
             setPlaceholder={setPlaceholder}
             users={users}
             isAuth={isAuth}
             modal={modal}
             setModal={setModal}
             activeUser={activeUser}
             setActiveUser={setActiveUser}
             start={start}
             chat={chat}
             search={search}
             setSearch={setSearch}
             setAuth={setAuth} />} 
            />
            <Route 
             path={"/"} 
             element={<ModalWindow 
             vision={modal} 
             users={users} 
             setModal={setModal} 
             setActiveUser={setActiveUser} 
             createUser={createUser} />} 
            />
        </Routes>
    );
}

export default AppRouter;