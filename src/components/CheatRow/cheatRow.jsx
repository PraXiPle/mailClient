import React from 'react'
import "./cheatRow.scss"
import { TiArrowBack } from "react-icons/ti";
import { useState } from 'react';
export const CheatRow = ({ isMe, from = {}, date, msgId, content }) => {
  const [msgIdSelected, setIdMsgSelected] = useState(false)
  return (
    <div className={`CheatRow ${msgIdSelected ? "selectedMsg" : "noneSelected"}`} onClick={() => setIdMsgSelected(!msgIdSelected)}>
      <div className='rowContainer'>
        <div className="imgAndNameContainer">
          {isMe ? <TiArrowBack className='iconYou' /> : <img src={from.avatar} className='userImg' />}
          <span className='senderName'>{isMe ? "You" : from.fullName}</span>
        </div>
        {!msgIdSelected && <p className='msg'>{content}</p>}
        <span className='date'>{date}</span>
      </div>
      {msgIdSelected && <p className='bodyMsg'>{content}</p>}
    </div>
  )
}
