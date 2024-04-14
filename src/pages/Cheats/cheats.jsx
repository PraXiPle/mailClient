import React, { useContext, useEffect, useState } from 'react'
import "./cheats.scss"
import { LabelBadge } from '../../components/LabelBadge/labelBadge'
import { EmailTitle } from '../../components/EmailTitle/emailTitle';
import { CheatRow } from '../../components/CheatRow/cheatRow';
import { TextArea } from '../../components/TextArea/textArea';
import { FaStar } from "react-icons/fa";
import { IoTrashBin } from "react-icons/io5";
import { FiPrinter } from "react-icons/fi";
import { HiDotsVertical } from "react-icons/hi";
import { SendBtn } from '../../components/SendBtn/sendBtn';
import { useParams } from 'react-router-dom';
import { useAxiosReq, axiosReq } from '../../functions/webApi';
import { UserContexts } from '../../dataContext/UserContext';
import { Loading } from '../../components/Loading/loading';
import { useLocation } from 'react-router-dom';
export const Cheats = () => {
  const { state } = useLocation()
  const { emailId } = useParams()
  const { data, setLoading, loading, setData } = useAxiosReq({ deafultValue: {}, url: "userchats/getchatsbyid", body: { chatId: emailId }, dependency: [emailId] })
  const { userId } = useContext(UserContexts)
  const [newMsg, setNewMsg] = useState("")
  const sendMsgHendler = async () => {
    setLoading(true)
    const newDataSend = {
      id: data._id,
      msg: {
        from: userId,
        content: newMsg,
      }
    }
    const res = await axiosReq({ method: "PUT", body: newDataSend, url: "chats/sendmessag" })
    console.log(res);
    setData((prev) => {
      return { ...prev, msg: [...prev.msg, res] };
    });
    setNewMsg("");
    setLoading(false)
  }
  return (
    <div className='Cheats'>
      {!loading ? <>
        <div className="headerContainer">
          <div className="lableContainer">
            <LabelBadge bgColor="#f2dea8" />
          </div>
          <div className="buttonsContainer">
            <button className="headersButtons"><FaStar /></button>
            <button className="headersButtons"><IoTrashBin /></button>
            <button className="headersButtons"><FiPrinter /></button>
            <button className="headersButtons"><HiDotsVertical /></button>
          </div>
        </div>
        <EmailTitle subject={data?.subject} dateInfo={data?.msg && data.msg[0].date} />
        <div className="cheatsAndTextAreaContnainer">
          <div className="cheatsRowContainer">
            {data?.msg?.map((msg, i) => <CheatRow key={"ceats" + i} isMe={userId == msg.from._id}{...msg} />)}
          </div>
          <div className="textAreaBtnContainer">
            <TextArea value={newMsg} onChange={e => { setNewMsg(e.target.value); }} />
            <SendBtn onClick={sendMsgHendler} loading={loading} />
          </div>
        </div>
      </> : <Loading />}
    </div>

  )
}
