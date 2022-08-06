import React from 'react'

import cl from '../styles/components/ReportComponent.module.css'

const ReportComponent = ({report, vision}) => {
    return (
        <div className={vision ? cl.vision : cl.invision}>
            {report}
        </div>
    )
}

export default ReportComponent