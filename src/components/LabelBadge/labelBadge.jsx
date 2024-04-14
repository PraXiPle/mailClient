import React from 'react'
import "./labelBadge.scss"
export const LabelBadge = ({ title = "", bgColor = "#FD5E5E" }) => {
  return (
    <>
      <div className='LabelBadge' style={{ backgroundColor: bgColor }}>{title}</div>
    </>
  )
}
