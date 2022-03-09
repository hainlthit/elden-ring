import React, { useState } from 'react';

export default function MessageForm({renderPost, user, setUser, messageOnData, setMessageOnData }) {
    

    function handleSetMessageData(e) {
        setMessageOnData(e.target.value)
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
          setMessageOnData([...messageOnData, data])
          }
        )
    }

    function handleSubmit(e){
        e.preventDefault();
        renderPost(messageOnData)
    }

    console.log(messageOnData)
  return (
    <div>
        <br/>
        <form onSubmit={handleSubmit} className="form">
          
            <input 
                name="Text Message"
                type="string"
                placeholder="Send a Message"
                value={messageOnData}
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
