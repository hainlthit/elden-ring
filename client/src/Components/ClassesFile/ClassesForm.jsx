import React, { useState } from 'react';

function ClassesForm(classData, setClassData) {

   const [name, setName] = useState("")
   const [image, setImage] = useState('')
   const [info, setInfo] = useState("")
   const [weapons, setWeapons] = useState("")
   const [level, setLevel] = useState("")
   
   
    function handleSetName(e) {
        setName(e.target.value)
    }
   
    function handleSetLevel(e) {
        setLevel(e.target.value)
    }

    function handleSetImage(e) {
        setImage(e.target.value)
    }
    
    function handleSetInfo(e) {
        setInfo(e.target.value)
    }

    function handleSetWeapons(e) {
        setWeapons(e.target.value)
    }
    
    function handleSubmit(e){
        e.preventDefault();
        
        const newClassObj = {
           name: name,
           level: level,
            image: image,
           info: info,
           weapons: weapons
        }

        console.log(newClassObj)

         fetch('/er_classes', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify(newClassObj),
            })
         
            .then(res => res.json())
            .then(data => {console.log(data)
            })
        
    }
   return (
    <div className="class-form">
    <br/>
    <h2>Add a new class!</h2>
    <form onSubmit={handleSubmit} className="form">
        <label>Name: </label>
        <input 
        name="Class Name"
        type="string"
        placeholder="Name of the class..."
        value={name}
        onChange={handleSetName}
        className="form-input"
        ></input>
        <br/>
    
        <br/>
        <label>Level: </label>
        <input 
        name="Class Level"
        type="integer"
        placeholder="1"
        value={level}
        onChange={handleSetLevel}
        className="form-input"
        ></input>
        <br/>

        <br/>
        <label>Image Link: </label>
        <input 
        name="class Icon"
        type="string"
        placeholder="Link for class image..."
        value={image}
        onChange={handleSetImage}
        className="form-input"
        ></input>
        <br/>

        <br/>
        <label>Information: </label>
        <input 
        name="info"
        type="string"
        placeholder="class goes boom..."
        value={info}
        onChange={handleSetInfo}
        className="form-input"
        ></input>
        <br/>

        <br/>
        <label>Weapons: </label>
        <input 
        name="weapons"
        type="integer"
        placeholder="weapons..."
        value={weapons}
        onChange={handleSetWeapons}
        className="form-input"
        ></input>
        <br/>

        <br/>
        <button className="form-input" type="submit">Add New class</button> 
    </form>
        
    </div>

   )
}

export default ClassesForm;