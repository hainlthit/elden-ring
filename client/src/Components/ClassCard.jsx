import React, { useState } from 'react';
import EditSpell from "./EditSpell";

export default function ClassCard({id, name, level, info, weapons, image}) {

  const [isEditing, setIsEditing] = useState(false);

  // function handleDelete(){
  //   fetch(`http://localhost:3000/classes/${id}`, { 
  //     method: 'DELETE',
  //   })
  //   .then((r) => r.json())
  //   .then((deletedClass) => handleDeleteSpell(deletedClass))
  // }
  
  return (
      <div className="spell-card">
          {isEditing ? (

        <EditSpell
          
        />
    
      ) : (
        <>
        <div className="delete-edit-buttons">
        <button className="edit-btn" onClick={() => setIsEditing((isEditing) => !isEditing)}>
              <span role="img" aria-label="edit">
                EDIT
              </span>
        </button>
        {/* <button onClick={handleDelete} className="delete-event-btn">X</button> */}
        <br/>
        <br/>
        </div>
        <img alt={name} src={image}/>
                    <h4>{name}</h4> 
                    <p>Level: {level}</p> 
                    <p>Info: {info}</p> 
                    <p>Weapons: {weapons}</p> 
                    </>
    )}
    </div>
  )
}
