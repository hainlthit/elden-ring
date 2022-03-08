import React from 'react'
import { useState} from "react";
import EditSkill from './EditSkill';

export default function SkillCard({skillObj, id, handleUpdateSkill}) {
    const [isEditing, setIsEditing] = useState(false);

    function handleDelete(){
        fetch(`http://localhost:3000/skills/${id}`, { 
          method: 'DELETE',
        })
        .then((r) => r.json())
        // .then((deletedClass) => handleDeleteClass(deletedClass))
      }

  return (
    <div className="skill-card">
        {isEditing ? (

          <EditSkill
            setIsEditing={setIsEditing}
            id={id}
            handleUpdateClass={handleUpdateSkill}
            skillObj={skillObj}
          />

          ) : (
        <>
        <div className="delete-edit-buttons">
        <button className="edit-btn" onClick={() => setIsEditing((isEditing) => !isEditing)} >
              <span role="img" aria-label="edit">
                EDIT
              </span>
        </button>
        <button onClick={handleDelete} className="delete-event-btn">X</button>
        <br/>
        <br/>
        </div>
        <img alt={skillObj.skill_name} src={skillObj.image}/>
                    <h4>{skillObj.skill_name}</h4> 
                    <p>Type: {skillObj.skill_type}</p> 
                    <p>Fp: {skillObj.fp}</p> 
                    <p>Required Equipment: {skillObj.equipment}</p> 
                    <p>Effect: {skillObj.effect}</p> 
                    </>
     )} 
    </div>
  )
}


