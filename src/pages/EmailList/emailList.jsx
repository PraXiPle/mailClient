import React from 'react'
import "./emailList.scss"
import { InputSearch } from '../../components/InputSearch/inputSearch'
import { EmailLi } from '../../components/EmailLi/emailLi'
import { Loading } from '../../components/Loading/loading';
import { useParams } from 'react-router-dom';
import { flags, useAxiosReq, axiosReq } from '../../functions/webApi';
import { formatTime } from "../../functions/timeFormat"
import { useContext } from 'react';
import { UserContexts } from '../../dataContext/UserContext';
export const EmailList = () => {
  const { userId } = useContext(UserContexts)
  const { emailType } = useParams()
  const axiosPostQuery = { method: "POST", deafultValue: [], url: "userchats/getchats", body: { flags: [flags[emailType]] }, dependency: [emailType] }
  const { loading, data, setData, setLoading } = useAxiosReq(axiosPostQuery)
  let searchTimeOut;
  const searchByInput = (e) => {
    clearTimeout(searchTimeOut)
    searchTimeOut = setTimeout(async () => {
      try {
        const filterData = await axiosReq({ ...axiosPostQuery, body: { flags: [flags[emailType]], input: e.target.value } })
        setData(filterData);
      } catch (error) {
        console.error(error)
      }
    }, 1000)
  }
  return (
    <div className='EmailList'>
      <div className="container">

        <div className="inputSerachContainer">
          <InputSearch onChange={searchByInput} />
        </div>
        <div className="emailListContainer">
          {(!loading && data?.length == 0) && < h2 > No Chats , You Lonely Fuck</h2>}
          {data.map((e, i) => {
            const lastmsg = e.chat.msg.find(msg => msg.date === e.chat.lastDate)
            console.log(e);
            return <EmailLi
              chatId={e._id}
              to={e.chat._id}
              key={"emailList-" + i}
              isRead={e.isRead}
              isFavorite={e.isFavorite}
              members={e.chat.members.filter(u => u._id !== userId)}
              userName={e.chat.members[e.chat.members.length - 1].fullName}
              userMsg={lastmsg?.content}
              timeMsg={formatTime(lastmsg?.date)}
              userImage={e.chat.members[e.chat.members.langht - 1]} />
          })}
          {loading && <Loading />}
        </div>
      </div>
    </div >
  )
}
