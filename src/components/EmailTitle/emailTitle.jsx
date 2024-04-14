import React from 'react'
import "./emailTitle.scss"
export const EmailTitle = ({subject = "Meeting with new investors",dateInfo="Today, 28th March 2024, 09:25"}) => {
  return (
    <div className='EmailTitle'>
      <p>{dateInfo}</p>
      <h3>{subject}</h3>
    </div>
  )
}
