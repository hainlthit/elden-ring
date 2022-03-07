import React, { useState } from 'react';
import EditSpell from "./EditSpell";


export default function SpellCard({ id, spellname, spelltype, image, effect, fp, handleUpdateSpell, handleDeleteSpell}) {

  const [isEditing, setIsEditing] = useState(false);

  function handleDelete(){
    fetch(`http://localhost:3000/spells/${id}`, { 
      method: 'DELETE',
    })
    .then((r) => r.json())
    .then((deletedSpell) => handleDeleteSpell(deletedSpell))
  }

  
  return (
      <div className="spell-card">
          {isEditing ? (

        <EditSpell
          setIsEditing={setIsEditing}
          id={id}
          handleUpdateSpell={handleUpdateSpell}
          spellname={spellname}
          spelltype={spelltype}
          image={image}
          effect={effect}
          fp={fp}
        />
    
      ) : (
        <>
        <div className="delete-edit-buttons">
        <button className="edit-btn" onClick={() => setIsEditing((isEditing) => !isEditing)}>
              <span role="img" aria-label="edit">
                EDIT
              </span>
        </button>
        <button onClick={handleDelete} className="delete-event-btn">X</button>
        <br/>
        <br/>
        </div>
        <img alt={spellname} src={image}/>
                    <h4>{spellname}</h4> 
                    <p>Spell Type: {spelltype}</p> 
                    <p>FP: {fp}</p> 
                    <p>Effect: {effect}</p> 
                    </>
    )}
    </div>
  )
}