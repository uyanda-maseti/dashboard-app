import React, { useState } from 'react'
import Dashboard from './components/Dashboard'
import NotesManager from './components/NotesManager'
import ContactList from './components/ContactList'
import Journal from './components/Journal'
import JobRequests from './components/JobRequests'

export default function App() {
  const [tab, setTab] = useState('dashboard')

  const renderTab = () => {
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
      <nav>
        <button onClick={() => setTab('dashboard')}>Dashboard</button>
        <button onClick={() => setTab('notes')}>Notes</button>
        <button onClick={() => setTab('contacts')}>Contacts</button>
        <button onClick={() => setTab('journal')}>Journal</button>
        <button onClick={() => setTab('jobs')}>Job Requests</button>
      </nav>
      <main>{renderTab()}</main>
    </div>
  )
}