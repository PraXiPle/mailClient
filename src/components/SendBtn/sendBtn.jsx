import React from 'react'
import "./sendBtn.scss"
import { IoIosSend } from "react-icons/io";
export const SendBtn = ({loading, ...props}) => {
    return (
        <button className={`SendBtn ${loading ? "loadingBtn" : null} `} {...props}>Send <IoIosSend /> </button>
    )
}
