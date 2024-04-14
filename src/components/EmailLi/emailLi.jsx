import React, { useContext, useState } from 'react'
import "./emailLi.scss"
import { Badge } from '../Badge/badge'
import { FaStar } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import playOnClickEffect from '../../functions/soundClickEffect';
import { axiosReq } from '../../functions/webApi';
import { UserContexts } from '../../dataContext/UserContext';
export const EmailLi = ({ to = "", timeMsg = "", userMsg = "", members = [], isRead, chatId , isFavorite}) => {
  const [read, setRead] = useState(isRead)
  const [favorite, setIsFavorite] = useState(Boolean(isFavorite))
  const { userId } = useContext(UserContexts)
  const openCheatClickHendler = async () => {
    playOnClickEffect()
    try {
      const res = await axiosReq({ method: "PUT", url: "userchats/readchat", body: { userId, chatId } })
      if (res)
        setRead(true)
    }
    catch (err) {
      console.error(err)
    }
  }
  const toggleToFavoritClickHendler = async (e) => {
    e.preventDefault()
    try {
      const res = await axiosReq({ method: "PUT", url: "userchats/favoritchst", body: { userId, chatId , status:"isFavorite" , statusaVlue:!favorite} })
      if (res)
      setIsFavorite(!favorite)
    }
    catch (err) {
      console.error(err)
    }
  }
  return (
    <NavLink state={{ read }} onClick={openCheatClickHendler} to={to} className={({ isActive }) => isActive ? "EmailLi activeLink" : "EmailLi"}>

      <div className="usersImageContainer">
        {members.slice(0, 3).map((mem, i) => <img key={"keyImage" + String(Math.random() * 0.567) + i} src={mem.avatar} alt="userMember" />)}
      </div>
      <div className="info">
        <h4>{members[0].fullName} {members.length > 1 && ", +" + (members.length - 1)}</h4>
        <p className='textMessageInfo'>
          {userMsg}
        </p>
      </div>

      <div className="timeAndBadeg">
        <p className='time'>{timeMsg}</p>
        {read ? <button className={`star ${favorite&&"active"}`} onClick={toggleToFavoritClickHendler}><FaStar /></button> : <Badge />}
      </div>
    </NavLink>
  )
}
