import React, { useState } from 'react'
import "./NavigatorPage.css"
import { NavLink } from 'react-router-dom'
export const NavigatorPage = () => {
    const [openNav , setOpenNav] = useState(false)
    const navArr = [
        {
            to:"/emails",
            name:"home"
        },
        {
            to:"/login",
            name:"login"
        },
        {
            to:"/register",
            name:"register"
        }
    ]
  return (
    <>
    <div className={`Navigator ${openNav ? "open" : ""}`} onClick={()=>setOpenNav(!openNav)}> {navArr.map(e=><NavLink key={"navsds" + e.to} to={e.to}>{e.name}</NavLink>)} </div>
    </>
  )
}
  