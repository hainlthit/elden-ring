import React from 'react'

export default function MessageBubble({messages}) {

    return (
    <div className="bubble">
        <p>{messages.message} from: {messages?.user?.username} </p>    
    </div>
  )
}
