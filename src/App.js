import { Contacts } from "./pages/Contact"
import { ChatArea } from "./pages/Chat-area.jsx"
import "./assets/scss/global.scss"
import { HashRouter as Router } from "react-router-dom"

function App() {
  return (
    <Router>
      <div className='App main-app '>
        <Contacts />
        <ChatArea />
      </div>
    </Router>
  )
}

export default App
