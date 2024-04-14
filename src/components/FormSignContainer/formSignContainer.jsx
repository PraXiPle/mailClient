import React from 'react'
import "./formSignContainer.scss"
export const FormSignContainer = ({ children, title }) => {
    return (
        <div className='FormSignContainer'>
            <h2>{title}</h2>
                {children}
        </div>
    )
}
