import React from 'react';
/* Styles */
import '../../styles/components/UI/MessageInput.css';

export const MessageInput = ({value, placeholder, onChange}) => {
    return <input value={value} onChange={onChange} type="text" placeholder={placeholder} className="messageInput" />
}