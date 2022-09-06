import React from "react"
import { HashRouter as Router, Navigate, Route, Routes } from "react-router-dom"

// import { ChatHeader } from "../components/Chat-hader.jsx"
import { Home } from "../pages/home.jsx"
import { ChatView } from "../pages/Chat-view.jsx"

export const ChatArea = () => {
  // const PrivateRoute = ({ children }) => {
  //   // const user = userService.getUser()
  //   const user = true
  //   return user ? children : <Navigate to='/home' />
  // }

  return (
    <main className='chat-area-conteiner'>
      {/* <ChatHeader /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/chat-view/:id' element={<ChatView />} />
      </Routes>
    </main>
  )
}
