import React from 'react'

import '../../styles/components/UI/SubmitButton.css'

const SubmitButton = ({children, onClick}) => {
    return <button onClick={onClick} className="submitButton" type="submit">{children}</button>
}

export default SubmitButton