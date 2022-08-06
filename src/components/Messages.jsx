import React from 'react';
import useMessage from '../hooks/useMessage';
/* Components */
import MessageComponent from './MessageComponent';
/* Styles */
import '../styles/components/Messages.css';

const Messages = ({messages, activeUser, interlocutor}) => {
    const sortedMessages = useMessage(messages, activeUser, interlocutor)

    return (
        <div className="messages">
            {sortedMessages 
                ?
                sortedMessages.reverse().map(((message, index) => 
                    message.body ? <MessageComponent activeUser={activeUser} key={index} message={message} /> : <li key={index} style={{display: 'none'}}></li>
                ))
                :
                <div></div>
            }
        </div>
    );
}

export default Messages;