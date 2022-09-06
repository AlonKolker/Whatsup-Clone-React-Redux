import React from "react"

export const MsgPreview = ({msg}) => {
  

  return (
    <main className='msg-preview-conteiner' >
      <span className="msg-box" style={{right:msg.senderID === 0? "100":"0"}} >{msg.text}</span>

    </main>
  )
}
