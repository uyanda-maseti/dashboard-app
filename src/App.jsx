import React, { useState } from 'react'
import Login from './Login'
import Dashboard from './components/Dashboard'
import NotesManager from './components/NotesManager'
import ContactList from './components/ContactList'
import Journal from './components/Journal'
import JobRequests from './components/JobRequests'

export default function App() {
  const [tab, setTab] = useState('login') // default to login
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const renderTab = () => {
    if (!isLoggedIn) return <Login onLogin={() => setIsLoggedIn(true)} />

    switch(tab) {
      case 'dashboard': return <Dashboard />
      case 'notes': return <NotesManager />
      case 'contacts': return <ContactList />
      case 'journal': return <Journal />
      case 'jobs': return <JobRequests />
      default: return <Dashboard />
    }
  }

  return (
    <div className="app-container">
      {isLoggedIn && (
        <nav>
          <button onClick={() => setTab('dashboard')}>Dashboard</button>
          <button onClick={() => setTab('notes')}>Notes</button>
          <button onClick={() => setTab('contacts')}>Contacts</button>
          <button onClick={() => setTab('journal')}>Journal</button>
          <button onClick={() => setTab('jobs')}>Job Requests</button>
          <button onClick={() => setIsLoggedIn(false)}>Logout</button>
        </nav>
      )}
      <main>{renderTab()}</main>
    </div>
  )
}
