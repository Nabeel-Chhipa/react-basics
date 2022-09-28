import React from 'react'

const UserGreeting = () => {
    const isLoggedIn = true;
  return (
    <div>Welcome {isLoggedIn ? 'Admin' : 'User'}</div>
  )
}

export default UserGreeting