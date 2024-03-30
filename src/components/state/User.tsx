import React, { useState } from 'react'

type AuthUser = {
    name: string
    email: string
}

const User = () => {
  
  const [user, setUser] = useState<AuthUser | null>(null)
  const [user2, setUser2] = useState<AuthUser>({} as AuthUser)
  const handleLogin = () => {
    setUser({
        name: 'Seyfe',
        email: 'Seyfe@1gebriel.net'
    })
  }
  const handleLogout = () => {
    setUser(null)
  }

  const handleLogin2 = () => {
    setUser2({
        name: 'Seyfe',
        email: 'Seyfe@1gebriel.net'
    })
  }

  return (
    <div>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
        <div>User name is {user?.name}</div>
        <div>User email is {user?.email}</div>
        -------------------------------------------
        <button onClick={handleLogin2}>Login</button>
        <div>User name is {user2.name}</div>
        <div>User email is {user2.email}</div>
    </div>
  )
}

export default User