import React from 'react'

import '../../styles/components/UI/PasswordInput.css'

const PasswordInput = ({value, onChange, placeholder}) => {
    return <input type="password" value={value} onChange={onChange} placeholder={placeholder} className="passwordInput" />
}

export default PasswordInput