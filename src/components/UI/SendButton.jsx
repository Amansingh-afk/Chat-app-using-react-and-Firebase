import React from 'react';
/* Styles */
import '../../styles/components/UI/SendButton.css';

export const SendButton = ({children, onClick}) => {
    return <button onClick={onClick} type="submit" className="sendButton">{children}</button>
}