import React, { useState } from 'react';

export default function MessageForm(user, setUser) {
    const [messageOnData, setMessageOnData] = useState("");

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
      
        const newMessageObj = {
           message: messageOnData,
           current_user: 1,
        //    user_id: current_user
        }
        handlePost(newMessageObj)
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
                className="form-input"
                >
            </input>
            <button className="form-input" type="submit">Send</button> 
            <br/>
        </form>
        

    </div>
  )
}
