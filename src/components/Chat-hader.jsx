import React from "react"
import { useDispatch, useSelector } from "react-redux"


export const ChatHeader = () => {
  const contact = useSelector((state) => state.contactModule.contact)
  return contact ? (
    <main className='chat-header-conteiner main-layout'>
      <img className='img-chat-header' src={contact.img} alt='' />
      <div>{contact.name}</div>
    </main>
  ) : (
    <div></div>
  )
}
