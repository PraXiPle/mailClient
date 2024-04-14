import React from 'react'
import "./newMsgBtn.scss"
import { IoMdMail } from "react-icons/io";
import { NavLink } from 'react-router-dom';
import playOnClickEffect from '../../functions/soundClickEffect';
export const NewMsgBtn = () => {
  return (
    <NavLink to={"new-message"} onClick={playOnClickEffect} className='NewMsgBtn'>
      <IoMdMail className='mailIcon' />
      <span> New Message</span> 
    </NavLink>
  )
}

