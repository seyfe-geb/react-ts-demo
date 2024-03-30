import React from 'react'

type GreetProps = {
    name: string
    messageCount: number
    isLoggedIn: boolean
}

const GreetComponent = ({name, messageCount, isLoggedIn}: GreetProps) => {
  return (
    <div>
        <h2>
        {
            isLoggedIn?
            `Welcome ${name}! You have ${messageCount} messages.`:
            `Welcome Guest!`
        }
            
        </h2>
    </div>
  )
}

export default GreetComponent