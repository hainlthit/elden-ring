import React, { useState } from 'react'

export default function EditClass({id, classObj, setIsEditing, handleUpdateClass}) {    
    const [updatedName, setUpdatedName] = useState(classObj.name);
    const [updatedLevel, setUpdatedLevel] = useState(classObj.level);
    const [updatedImage, setUpdatedImage] = useState(classObj.image);
    const [updatedInfo, setUpdatedInfo] = useState(classObj.info);
    const [updatedWeapons, setUpdatedWeapons] = useState(classObj.weapons);

    function handleNameChange(e){
        setUpdatedName(e.target.value)
    }
    function handleLevelChange(e){
        setUpdatedLevel(e.target.value)
    }
    function handleImageChange(e){
        setUpdatedImage(e.target.value)
    }
    function handleInfoChange(e){
        setUpdatedInfo(e.target.value)
    }

    function handleWeaponsChange(e){
        setUpdatedWeapons(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
    
        fetch(`http://localhost:3000/er_classes/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: updatedName,
            level: updatedLevel,
            image: updatedImage,
            info: updatedInfo,
            weapons: updatedWeapons
          }),
        })
          .then((r) => r.json())
          .then((updatedClass) => handleUpdateClass(updatedClass))
          .then(() => setIsEditing(false))
      }

  return (
      <>
    <br/>
    <h2>Edit Class!</h2>
    <br/>
    <form onSubmit={handleSubmit} className="form">

        <label>Class Name:</label>
        <input 
        name="Class Name"
        type="string"
        placeholder={classObj.name}
        value={updatedName}
        onChange={handleNameChange}
        className="form-input"
        ></input>
        <br/>

        <br/>
        <label>Level: </label>
        <input 
        name="Class Level"
        type="integer"
        placeholder="1"
        value={classObj.level}
        onChange={handleLevelChange}
        className="form-input"
        ></input>
        <br/>

        <br/>
        <label>Image:</label>
        <input 
        name="Class Icon"
        type="string"
        placeholder={classObj.image}
        value={updatedImage}
        onChange={handleImageChange}
        className="form-input"
        ></input>
        <br/>

        <br/>
        <label>Class Info:</label>
        <input 
        name="Info"
        type="string"
        placeholder={classObj.info}
        value={updatedInfo}
        onChange={handleInfoChange}
        className="form-input"
        ></input>
        <br/>
        
        <br/>
        <label>Weapons:</label>
        <input 
        name="Weapons"
        type="integer"
        placeholder={classObj.weapons}
        value={updatedWeapons}
        onChange={handleWeaponsChange}
        className="form-input"
        ></input>
        <br/>

        <br/>
        <button className="form-input" type="submit">Make Edits</button> 
    </form>
    </>
  )
}