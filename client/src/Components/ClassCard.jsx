import React, { useState } from 'react';
import EditClass from './ClassesFile/EditClass';

export default function ClassCard({classObj, id, handleUpdateClass, handleDeleteClass}) {

  const [isEditing, setIsEditing] = useState(false);

  const refreshPage = ()=>{
    window.location.reload();
 }
  function handleDelete(){
    fetch(`http://localhost:3000/er_classes/${id}`, { 
      method: 'DELETE',
    })
    .then((r) => r.json())
    .then((deletedClass) => handleDeleteClass(deletedClass))
    .then(refreshPage)
  }

  return (
      <div className="card">
        {isEditing ? (

          <EditClass
            setIsEditing={setIsEditing}
            id={id}
            handleUpdateClass={handleUpdateClass}
            classObj={classObj}
          />

          ) : (
        <div className='card-content'>
        <img alt={classObj.name} src={classObj.image}/>
                    <h4>{classObj.name}</h4> 
                    <p>Level: {classObj.level}</p> 
                    <p>Info: {classObj.info}</p> 
                    <p>Weapons: {classObj.weapons}</p> 
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
                    </div>
    )}
    </div>
  )
}

