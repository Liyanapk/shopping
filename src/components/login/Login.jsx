import React, { useState } from "react";
import './Login.css'



export const LoginModal = ({ onClose }) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')


  const handleLogin = (e) => {
    e.preventDefault()

    // Simple validation
    if (!email || !password) {
      setError("Please fill in all fields")
      return
    }

    // Store user info in localStorage (demo authentication)
    const userInfo = {
      email,
      userId: Date.now().toString(), // Generate a fake user ID
      loginTime: new Date().toISOString()
    }

    localStorage.setItem("access_token", JSON.stringify(userInfo))
    localStorage.setItem("user_email", email)

    onClose()
  }

  return (

    <div className="modal">
      <div className="modal-content-login">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="login-item" >
            <input type="text" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />

          </div>
          <div className="login-buttons">
            <button type="submit" className="login-button">Login</button>
            <button className="close-btn" onClick={onClose}>
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

