import React from 'react'
import {useEffect, useState} from "react";

export default function MainMessageTable() {

const [messageData, setMessageData] = useState([''])


  useEffect(() => {
    fetch('http://localhost:3000/users')
      .then(r => r.json())
      .then(data => setMessageData(data))
  }, [])

  return (
    <div className="messages-container">
       <div className='messages-header'> <h3>Message Board</h3> </div>
       <div className='messages-info'> 
            <h4 className='messages-from'>From: 'insert user' </h4>
                <div className='messages-info-from'>
                {messageData[0].comments[1]}
                </div>
            <h4 className='messages-to'>To: 'user's name'</h4>
                <div className='messages-info-to'>
                {/* {messageData[1].comments.message} */}
                </div>
       </div>
       
    </div>
  )
}
