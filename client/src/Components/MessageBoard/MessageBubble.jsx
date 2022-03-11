import React from 'react'

export default function MessageBubble({messages}) {

    return (
      <div>
        <p className="sender">{messages?.user?.username} </p>
        <p className="bubble">{messages.message}</p>
            <br/>
      </div>
  )
}
