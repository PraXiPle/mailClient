import React, { useEffect } from 'react'
import "./emailNav.scss"
import { navArr } from '../../dataContext/chatsNav'
import { EmailType } from '../../components/EmailType/emailType'
import { NavLink } from 'react-router-dom'
import { IoIosArrowBack } from "react-icons/io";
import { NewMsgBtn } from '../../components/NewMsgBtn/newMsgBtn'
import { HiDotsVertical } from 'react-icons/hi'
import { LabelBadge } from '../../components/LabelBadge/labelBadge'
import playOnClickEffect from '../../functions/soundClickEffect'

export const EmailNav = () => {
  return (
    <div className='EmailNav'>
      <div className='titleAndBackBtn'>
        <NavLink onClick={playOnClickEffect}  to="/">
          <IoIosArrowBack />
        </NavLink>
        <h2>Mail Box</h2>
      </div>
      <div className='navEamilTypeAndAddMsgBtn'>
        <NewMsgBtn/>
        <div className='navEmaileType'>
          {navArr.map(e => <EmailType key={"emailNav-" + e.name} IconType={e.icon} name={e.name} to={e.to} />)}
        </div>
        <div className='lableContainer'>
          <div className="headerLabel">
            <h4>Labels</h4>
            <div className='buttonContainer'>
              <button className='addLabel'>+</button>
              <button className='moreButton'><HiDotsVertical /></button>
            </div>
          </div>
          <div className='lableScrollContainer'>
            <div className='lableSizeHolder'>
              <LabelBadge />
            </div>
            <div className='lableSizeHolder'>
            <LabelBadge bgColor='#f2dea8' />
            </div>
            <div className='lableSizeHolder'>
            <LabelBadge bgColor='#d0d3e3' />
            </div>
            <div className='lableSizeHolder'>
            <LabelBadge bgColor='#b2e9ff' />
            </div>
            <div className='lableSizeHolder'>
            <LabelBadge bgColor='#b2e9ff' />
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
