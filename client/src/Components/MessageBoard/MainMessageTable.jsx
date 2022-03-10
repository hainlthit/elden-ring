import React from 'react'
import {useEffect, useState} from "react";
import MessageForm from './MessageForm';
import MessageMap from './MessageMap';

export default function MainMessageTable(user) {

const [messageData, setMessageData] = useState([''])
// const [userID, setUserID] = useState([''])
// const [commentID, setCommentID] = useState([''])

  useEffect(() => {
    fetch('http://localhost:3000/comments')
      .then(r => r.json())
      .then(data => setMessageData(data))
  }, []) 

  // scary git stuff

  // function renderPost(obj){
  //   let post = document.createElement('li')
  //   post.textContent = obj

  //   let messages = document.querySelector("#messages_here")
  //   messages.append(obj)
  // }

  

  return (
    <div className="message-room">
    <div className="messages-container">
       <div className='messages-header'> <h3>Message Board of the Gods</h3> </div>
       <div className='messages-info'> 
            <h4 className='messages-from'>Tell us how you feel</h4>
                <div className='messages-info-from'>
                  <div id="messages_here"></div>
                </div>
            <h4 className='messages-to'>how you really really feel</h4>
                <div className='messages-info-to'>
                <MessageMap messageData={messageData}/>
                </div>
       </div>
       <MessageForm messageData={messageData} setMessageData={setMessageData} user={user} />
       
    </div>
    <div className="messages-container-2">
      
      </div>
    </div>
  )
}
