import React from 'react'

export default function MessageBubble({messages}) {

    return (
      <div>
        <p className="sender">{messages?.user?.username} </p>
        <div class="triangle"></div>
        <div className="bubble">
            <p>{messages.message}</p>    
        </div>
      </div>
  )
}
