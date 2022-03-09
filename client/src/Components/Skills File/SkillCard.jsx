import React from 'react'
import { useState} from "react";
import EditSkill from './EditSkill';
import Button from '@mui/material/Button';

export default function SkillCard({skillObj, id, handleUpdateSkill, handleDeleteSkill}) {
    const [isEditing, setIsEditing] = useState(false);

    function handleDelete(){
        fetch(`http://localhost:3000/skills/${id}`, { 
          method: 'DELETE',
        })
        .then((r) => r.json())
        .then((deletedSkill) => handleDeleteSkill(deletedSkill))
      }

  return (
    
    <div className="card">
        {isEditing ? (
          <EditSkill
            setIsEditing={setIsEditing}
            id={id}
            handleUpdateClass={handleUpdateSkill}
            skillObj={skillObj}
          />

          ) : (
        <div className="card-content">
          <div className="delete-edit-buttons">
            <img alt={skillObj.skill_name} src={skillObj.image}/>
                <h4>{skillObj.skill_name}</h4> 
                <p>Type: {skillObj.skill_type}</p> 
                <p>Fp: {skillObj.fp}</p> 
                <p>Required Equipment: {skillObj.equipment}</p> 
                <p>Effect: {skillObj.effect}</p> 
                <Button variant="outlined"className="edit-btn" onClick={() => setIsEditing((isEditing) => !isEditing)} >
                  <span role="img" aria-label="edit">
                    EDIT
                  </span>
                </Button>
                <Button variant="outlined" onClick={handleDelete} className="delete-event-btn">X</Button>
           
          </div>

        <br/>
        <br/>
        </div>
     )} 
     </div>
     
  )
}


