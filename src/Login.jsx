import { useState } from 'react'

const fakeUser = {
  username: 'admin',
  password: '1234'
}

export default function Login({ onLogin }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (username === fakeUser.username && password === fakeUser.password) {
      onLogin() // set login state in App
    } else {
      setError('Invalid username or password')
    }
  }

  return (
    <div style={{textAlign: 'center', marginTop: '50px'}}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br /><br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br /><br />
        <button type="submit">Login</button>
      </form>
      {error && <p style={{color: 'red'}}>{error}</p>}
    </div>
  )
}
