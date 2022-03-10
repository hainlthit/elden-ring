import React, { useState } from 'react';

export default function MessageForm({user, messageData, setMessageData }) {
    
  const [newMessageData, setNewMessageData] = useState("")
  const [userID, setUserID] = useState("")
  

    function handleSetMessageData(e) {
        setNewMessageData(e.target.value)
    }

    function handlePost(obj){
        fetch('/comments',{
          method:'POST',
          headers: {'Content-Type': 'application/json'},
          body:JSON.stringify(obj)
        })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          setMessageData([...messageData, data])
          }
        )
        setNewMessageData("")
    }

    function handleSubmit(e){
        e.preventDefault();

        const messageObj = {
          message: newMessageData,
          user_id: user.user.id
        }
        handlePost(messageObj)
    }

    console.log(messageData)
  return (
    <div>
        <br/>
        <form onSubmit={handleSubmit} className="form">
          
            <input 
                name="Text Message"
                type="string"
                placeholder="Send a Message"
                value={newMessageData}
                onChange={handleSetMessageData}
                className="message-form-input"
                >
            </input>
            <button className="message-btn-input" type="submit">Send</button> 
            <br/>
        </form>
        
    </div>
  )
}
