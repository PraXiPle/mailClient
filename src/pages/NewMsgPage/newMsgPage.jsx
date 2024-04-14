import React, { useState } from 'react'
import "./newMsgPage.scss"
import { TextArea } from '../../components/TextArea/textArea'
import { SendBtn } from '../../components/SendBtn/sendBtn'
export const NewMsgPage = () => {
    const [message, setMessage] = useState({
        subject: "",
        members: [],
        msg: ""
    });

    const setMsgChangeHandler = (e) => {
        setMessage((prev) => ({ ...prev, msg: e.target.value }));
        console.log(message);
    };
    const setSubjectChangeHandler = (e) => {
        setMessage((prev) => ({ ...prev, subject: e.target.value }));
        console.log(message);
    };
    return (
        <div className='NewMsgPage'>
            <div className="headerContaier">
                <h2>Send New Message</h2>
            </div>
            <div className='containerSendProps'>
                <label className='labels'>
                    <span>Subject:</span>
                    <input type="text" onChange={setSubjectChangeHandler} />
                </label >
                <label className='labels'>
                    <span>Members:</span>
                    <input type="text" /> </label>
                <div className='textEreaAndBtnContainer'>
                    <div className='containerTextAreaTitle'>
                        <span>Message:</span>
                        <TextArea onChange={setMsgChangeHandler} />
                    </div>
                    <SendBtn />
                </div>
            </div>
        </div>
    )
}
