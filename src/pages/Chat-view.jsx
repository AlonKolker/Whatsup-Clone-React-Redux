import React from "react"
import { useCallback, useEffect } from "react"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { sendMsg, loadContact } from "../store/actions/contactActions"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

import { MsgPreview } from "../components/Msg-preview.jsx"

export const ChatView = () => {
  const contact = useSelector((state) => state.contactModule.contact)
  const params = useParams()
  const dispatch = useDispatch()

  const onLoadContact = useCallback(async () => {
    const contactId = params.id
    dispatch(loadContact(contactId))
  }, [params.id, dispatch])

  useEffect(() => {
    if (contact?._id !== params.id) onLoadContact()
  }, [params.id, contact, onLoadContact])

  const onSendMsg = (ev) => {
    ev.preventDefault()
    const { chatMsg } = ev.target.elements
    dispatch(sendMsg(chatMsg.value, params.id))
    onLoadContact()
    ev.target.elements.chatMsg.value = ""
  }

  return contact ? (
    <>
    <main className='chat-view-conteiner main-layout'>
      {contact?.conversation?.map((msg) => (
        <MsgPreview key={msg.id} msg={msg} />
        ))}
    </main>
      <form onSubmit={onSendMsg} className='send-msg-conteiner'>
        {/* <div className='test'> */}
          <label htmlFor='chatMsg'></label>
          <input className='input-chat-msg' type='text' name='chatMsg' id='chatMsg' placeholder='Start typing' />
          {/* <button className='send-msg'>Send</button> */}
          <FontAwesomeIcon className='send-icon' icon={faPaperPlane}/>
        {/* </div> */}
      </form>
        </>
  ) : (
    <div>Loading conversation...</div>
  )
}
