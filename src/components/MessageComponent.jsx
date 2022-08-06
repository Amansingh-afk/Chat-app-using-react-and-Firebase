import React from 'react';
/* Styles */
import cl from '../styles/components/MessageComponent.module.css';

const MessageComponent = (props) => {
    return (
        <div className={props.message.styleID === props.activeUser.id ? cl.messageComponent : cl.secondMessageComponent}>
            <h1>{props.message.body}</h1>
        </div>
    );
}

export default MessageComponent;