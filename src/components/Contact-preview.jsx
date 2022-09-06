import React from "react"
import { HashRouter as Router, Routes, Link,NavLink } from "react-router-dom"
import { MsgPreview } from "./Msg-preview"
import { compareAsc, format } from 'date-fns'


export const ContactPreview = ({ contact }) => {
  const img = contact.img

  const timeFormat = ()=>{
    // console.log(new Date(contact.lastMsgTime).getDay() === new Date(Date.now()).getDay());
    if(new Date(contact.lastMsgTime).getDay() === new Date(Date.now()).getDay() &&
    new Date(contact.lastMsgTime).getMonth() === new Date(Date.now()).getMonth() ) return format(new Date(contact.lastMsgTime), 'HH:mm')
    return format(new Date(contact.lastMsgTime), 'dd.MM.yyyy')
    // return format(new Date(Date.now()), 'HH:mm')1662376188966

    // return contact.lastMsgTime
    
  }
  return (
    <main className='contacts-preview-conteiner'>
      <NavLink className='contacts-preview'  style={({ isActive }) => 
                      (isActive ? {backgroundColor: '#848488'} : {backgroundColor: ''})} exact='true' to={`/chat-view/${contact._id}`}>
        <img className='contact-img' src={contact.img} alt='' />
        <div className='first-row-preview'>
          <div>{contact.name}</div>
          <div className="last-msg-preview">{contact.lastMsg}</div>
        </div>
        {/* <img src="../assets/imgs/miel.jpg" alt="" /> */}
        <div className='seconed-row-preview'>
          {/* <div>{contact.lastMsgTime}</div> */}
          <div className="last-msg-time-date">{timeFormat()}</div>
        </div>
      </NavLink>
    </main>
  )
}
