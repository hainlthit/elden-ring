import React from 'react'
import {useEffect, useState} from "react";
import MessageForm from './MessageForm';

export default function MainMessageTable(user, setUser) {

const [messageData, setMessageData] = useState([''])
// const [userID, setUserID] = useState([''])
// const [commentID, setCommentID] = useState([''])

  useEffect(() => {
    fetch('http://localhost:3000/users')
      .then(r => r.json())
      .then(data => setMessageData(data))
  }, []) 

  // const words = messageData[0].comments[0].message

  return (
    <div className="messages-container">
       <div className='messages-header'> <h3>Message Board</h3> </div>
       <div className='messages-info'> 
            <h4 className='messages-from'>From: 'insert user' </h4>
                <div className='messages-info-from'>
                {/* {words} */}
                </div>
            <h4 className='messages-to'>To: 'user's name'</h4>
                <div className='messages-info-to'>
                {/* {words} */}
                </div>
       </div>
       <MessageForm user={user} setUser={setUser}/>
       
    </div>
  )
}
