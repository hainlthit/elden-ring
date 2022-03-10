import React, { useState } from 'react';
import EditSpell from "./EditSpell";
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';



export default function SpellCard({ id, spellname, spelltype, image, effect, fp, handleUpdateSpell, handleDeleteSpell}) {

  const [isEditing, setIsEditing] = useState(false);

  const refreshPage = ()=>{
    window.location.reload();
 }
 
  function handleDelete(){
    fetch(`http://localhost:3000/spells/${id}`, { 
      method: 'DELETE',
    })
    .then((r) => r.json())
    .then((deletedSpell) => handleDeleteSpell(deletedSpell))
    .then(refreshPage)
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
              <div className="card">

              <div className="card-content">
              <Link to={`/spells/${id}`}>
              <img alt={spellname} src={image}/>
                </Link>
            
                        <h4>{spellname}</h4> 
                        <p>Spell Type: {spelltype}</p> 
                        <p>FP: {fp}</p> 
                        <p>Effect: {effect}</p> 
            <div className="delete-edit-buttons">
            <Button variant="outlined" className="edit-btn" onClick={() => setIsEditing((isEditing) => !isEditing)}>
                  <span role="img" aria-label="edit">
                    EDIT
                  </span>
            </Button>
            <Button variant="outlined" onClick={handleDelete} className="delete-event-btn">X</Button>
            <br/>
            <br/>
            </div>
            </div>
                       
            </div>

    )}
    </div>
  )
}