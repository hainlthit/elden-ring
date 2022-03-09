import React, { useState } from 'react'

export default function EditSkill({id, skillObj, setIsEditing, handleUpdateClass}) {    
    const [updatedName, setUpdatedName] = useState(skillObj.skill_name);
    const [updatedType, setUpdatedType] = useState(skillObj.skill_type);
    const [updatedImage, setUpdatedImage] = useState(skillObj.image);
    const [updatedEffect, setUpdatedEffect] = useState(skillObj.effect);
    const [updatedFp, setUpdatedFp] = useState(skillObj.fp);
    const [updatedEquipment, setUpdatedEquipment] = useState(skillObj.equipment);

    function handleNameChange(e){
        setUpdatedName(e.target.value)
    }
    function handleTypeChange(e){
        setUpdatedType(e.target.value)
    }
    function handleImageChange(e){
        setUpdatedImage(e.target.value)
    }
    function handleEffectChange(e){
        setUpdatedEffect(e.target.value)
    }
    function handleFpChange(e){
        setUpdatedFp(e.target.value)
    }
    function handleEquipmentChange(e){
        setUpdatedEquipment(e.target.value)
    }

    const refreshPage = ()=>{
      window.location.reload();
   }

    function handleSubmit(e) {
        e.preventDefault();
    
        fetch(`http://localhost:3000/skills/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            skill_name: updatedName,
            skill_type: updatedType,
            image: updatedImage,
            effect: updatedEffect,
            fp: updatedFp,
            equipment: updatedEquipment
          }),
        })
          .then((r) => r.json())
          .then((updatedClass) => handleUpdateClass(updatedClass))
          .then(() => setIsEditing(false))
          .then(refreshPage)
      }

  return (
      <>
    <br/>
    <h2>Edit Skill!</h2>
    <br/>
    <form onSubmit={handleSubmit} className="form">

        <label>Skill Name:</label>
        <input 
        name="Class Name"
        type="string"
        placeholder={skillObj.skill_name}
        value={updatedName}
        onChange={handleNameChange}
        className="form-input"
        ></input>
        <br/>

        <label>Skill Type:</label>
        <input 
        name="Class Name"
        type="string"
        placeholder={skillObj.skill_type}
        value={updatedType}
        onChange={handleTypeChange}
        className="form-input"
        ></input>
        <br/>

        <br/>
        <label>Effect: </label>
        <input 
        name="Class Level"
        type="integer"
        placeholder="1"
        value={skillObj.effect}
        onChange={handleEffectChange}
        className="form-input"
        ></input>
        <br/>

        <br/>
        <label>Image:</label>
        <input 
        name="Class Icon"
        type="string"
        placeholder={skillObj.image}
        value={updatedImage}
        onChange={handleImageChange}
        className="form-input"
        ></input>
        <br/>

        <br/>
        <label>FP:</label>
        <input 
        name="Info"
        type="string"
        placeholder={skillObj.fp}
        value={updatedFp}
        onChange={handleFpChange}
        className="form-input"
        ></input>
        <br/>
        
        <br/>
        <label>Equipment:</label>
        <input 
        name="Weapons"
        type="integer"
        placeholder={skillObj.equipment}
        value={updatedEquipment}
        onChange={handleEquipmentChange}
        className="form-input"
        ></input>
        <br/>

        <br/>
        <button className="form-input" type="submit">Make Edits</button> 
    </form>
    </>
  )
}
