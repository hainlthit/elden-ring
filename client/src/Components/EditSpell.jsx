import React, { useState } from 'react'

export default function EditSpell({id, spellname, spelltype, image, effect, fp, setIsEditing, handleUpdateSpell}) {
    const [updatedSpellname, setUpdatedSpellname] = useState(spellname);
    const [updatedSpelltype, setUpdatedSpelltype] = useState(spelltype);
    const [updatedImage, setUpdatedImage] = useState(image);
    const [updatedEffect, setUpdatedEffect] = useState(effect);
    const [updatedFp, setUpdatedFp] = useState(fp);

    function handleSpellnameChange(e){
        setUpdatedSpellname(e.target.value)
    }
    function handleSpelltypeChange(e){
        setUpdatedSpelltype(e.target.value)
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

    let spelltypedata = [ 
        { label: "Incantation", value: "Incantation"},
        { label: "Sorcery", value: "Sorcery"}
    ]

    const spelltypeOptions = spelltypedata.map((spelltypedata) => 
    <option  key={spelltypedata.label} value={spelltypedata.value}>{spelltypedata.label}</option>
    )

    // const refreshPage = ()=>{
    //     window.location.reload();
    //  }
    function handleSubmit(e) {
        e.preventDefault();
    
        fetch(`http://localhost:3000/spells/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            spellname: updatedSpellname,
            spelltype: updatedSpelltype,
            image: updatedImage,
            effect: updatedEffect,
            fp: updatedFp
          }),
        })
          .then((r) => r.json())
          .then((updatedSpell) => handleUpdateSpell(updatedSpell))
          .then(() => setIsEditing(false))
        //   .then(refreshPage)
      }

  return (
      <>
    <br/>
    <h2>Edit Spell!</h2>
    <br/>
    <form onSubmit={handleSubmit} className="form">
    <label className="input-label">Spell Type: </label>
    <br/>
        <select  onChange={handleSpelltypeChange}>
            {spelltypeOptions}
        </select>
        <br/>
        <br/>
        <label>Spell Name:</label>
        <input 
        name="Spell Name"
        type="string"
        placeholder={spellname}
        value={updatedSpellname}
        onChange={handleSpellnameChange}
        className="form-input"
        ></input>
        <br/>
        <br/>
        <label>Image:</label>
        <input 
        name="Spell Icon"
        type="string"
        placeholder={image}
        value={updatedImage}
        onChange={handleImageChange}
        className="form-input"
        ></input>
        <br/>
        <br/>
        <label>Spell Effect:</label>
        <input 
        name="effect"
        type="string"
        placeholder={effect}
        value={updatedEffect}
        onChange={handleEffectChange}
        className="form-input"
        ></input>
        <br/>
        <br/>
        <label>FP :</label>
        <input 
        name="fp"
        type="integer"
        placeholder={fp}
        value={updatedFp}
        onChange={handleFpChange}
        className="form-input"
        ></input>
        <br/>
        <br/>
        <button className="form-input" type="submit">Make Edits</button> 
    </form>
    </>
  )
}