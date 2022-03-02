import { useState } from 'react'
import initialEmails from './data/emails'

import Emails from './components/Emails'
import LeftMenu from './components/LeftMenu'
import Header from './components/Header'

import './styles/app.css'
import { Fragment } from 'react/cjs/react.production.min'

function App() {
  const [emails, setEmails] = useState(initialEmails)
  const [hideRead, setHideRead] = useState(false)
  const [currentTab, setCurrentTab] = useState('inbox')
  const [selectedEmail, setSelectedEmail] = useState(null)

  return (
    <div className="app">
      <Header />
      <LeftMenu emails={emails} hideRead={hideRead} setHideRead={setHideRead} currentTab={currentTab} setCurrentTab={setCurrentTab} />
     
      {selectedEmail !== null &&
        <div>
          <p> EMAIL SELECTED!</p>
          <button onClick={() => setSelectedEmail(null)}>Go back</button>
        </div>
      }

      {selectedEmail === null &&
        <Emails emails={emails} setEmails={setEmails} hideRead={hideRead} currentTab={currentTab} setSelectedEmail={setSelectedEmail} />}
    </div>
  )
}

export default App
