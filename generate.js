// save this as generateDashboardApp.js
// run with: node generateDashboardApp.js

import fs from 'fs';
import path from 'path';
import { exec } from 'child_process';

// Project structure
const projectName = 'my-dashboard-app';
const folders = [
  projectName,
  path.join(projectName, 'src'),
  path.join(projectName, 'src/components'),
  path.join(projectName, 'public'),
];

const files = {
  [path.join(projectName, 'package.json')]: `{
  "name": "my-dashboard-app",
  "version": "1.0.0",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "vite": "^5.0.0"
  }
}`,
  [path.join(projectName, 'vite.config.js')]: `import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()]
})`,
  [path.join(projectName, 'README.md')]: `# My Dashboard App
A React single-page dashboard app.`,
  [path.join(projectName, 'public/index.html')]: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My Dashboard App</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>`,
  [path.join(projectName, 'src/main.jsx')]: `import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)`,
  [path.join(projectName, 'src/App.jsx')]: `import React, { useState } from 'react'
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
}`,
  [path.join(projectName, 'src/styles.css')]: `body { font-family: Arial, sans-serif; margin:0; padding:0; }
nav { display: flex; gap: 10px; padding: 10px; background: #222; color: #fff; }
nav button { padding: 5px 10px; cursor: pointer; }
main { padding: 20px; }`,
};

// Create placeholder components
const componentNames = ['Dashboard', 'NotesManager', 'ContactList', 'Journal', 'JobRequests'];
componentNames.forEach(name => {
  files[path.join(projectName, 'src/components', `${name}.jsx`)] =
`import React from 'react';

export default function ${name}() {
  return <div>${name} component</div>;
}`;
});

// Create folders
folders.forEach(folder => {
  if (!fs.existsSync(folder)) fs.mkdirSync(folder, { recursive: true });
});

// Create files
Object.entries(files).forEach(([filePath, content]) => {
  fs.writeFileSync(filePath, content);
});

// Create ZIP
exec(`zip -r ${projectName}.zip ${projectName}`, (err, stdout, stderr) => {
  if (err) {
    console.error('Error creating ZIP:', err);
  } else {
    console.log(`${projectName}.zip created successfully!`);
  }
});
