import React from 'react'

export default function MessageBubble({messages}) {
console.log(messages)
    return (
    <div className="bubble">
        <p>{messages.message}</p>    
    </div>
  )
}
