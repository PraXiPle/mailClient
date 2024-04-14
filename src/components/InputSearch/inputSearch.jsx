import React from 'react'
import "./inputSearch.scss"
import { IoSearch } from "react-icons/io5";
export const InputSearch = (props) => {
  return (
    <label className='InputSearch' >
    <input type="text" placeholder='serach' className='Input' {...props} />
    <IoSearch className='iconSearch' />
    </label>
  )
}
