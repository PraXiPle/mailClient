import React from 'react'
import "./inputSubmit.scss"
export const InputSubmit = ({value = "in"}) => {
  return (
    <input type='submit' value={value} className='InputSubmit'/>
  )
}
  