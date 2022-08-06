import React from 'react'

import '../../styles/components/UI/AuthInput.css'

const AuthInput = ({value, onChange, placeholder}) => {
    return <input type="text" value={value} onChange={onChange} placeholder={placeholder} className="authInput" />
}

export default AuthInput