import { useState } from 'react'
import initialEmails from './data/emails'

import Emails from './components/Emails'
import LeftMenu from './components/LeftMenu'
import Header from './components/Header'

import './styles/app.css'

function App() {
  const [emails, setEmails] = useState(initialEmails)
  const [hideRead, setHideRead] = useState(false)
  const [currentTab, setCurrentTab] = useState('inbox')

  return (
    <div className="app">
      <Header />

      <LeftMenu emails={emails} hideRead={hideRead} setHideRead={setHideRead} currentTab={currentTab} setCurrentTab={setCurrentTab} />

      <Emails emails={emails} setEmails={setEmails} hideRead={hideRead} currentTab={currentTab} />
    </div>
  )
}

export default App
