import React from 'react'
import MessageBubble from './MessageBubble'

export default function MessageMap({messageData}) {

    const messagesMap = messageData.map((messages) => 
    <MessageBubble
        messages={messages}
        key={messages.id}
    />
    )
  return (
    <div>
        {messagesMap}
    </div>
  )
}
