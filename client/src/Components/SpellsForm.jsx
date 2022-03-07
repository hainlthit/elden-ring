import React, { useState, useEffect } from 'react';

function SpellsForm({}) {

   const [spellname, setSpellname] = useState("");
   const [spelltype, setSpelltype] = useState("")
   const [spelltypedata, setSpelltypedata] = useState([])
   const [image, setImage] = useState("")
   const [effect, setEffect] = useState("")
   const [fp, setFp] = useState("")
   
    function handleSetSpellname(e) {
        setSpellname(e.target.value)
    }

    useEffect(() => {
        fetch(`http://localhost:3000/spells`)
        .then(r => r.json())
        .then(data => setSpelltypedata(data))
    }, [])

    const spelltypeOptions = spelltypedata.map(({ id, spelltype }) => 
    <option  key={id} value={id}>{spelltype}</option>
    )

    function handleSetSpelltype(e) {
        setSpelltype(e.target.value)
    }

    function handleSetImage(e) {
        setImage(e.target.value)
    }
    
    function handleSetEffect(e) {
        setEffect(e.target.value)
    }

    function handleSetFp(e) {
        setFp(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault();
        const newSpellObj = {
            spellname: spellname,
            spelltype: spelltype,
            image: image,
            effect: effect,
            fp: fp
        }
        
        
    }
   return (
    <>
    <br/>
    <h2>Add a new Spell!</h2>
    <br/>
    <form onSubmit={handleSubmit} className="form">
    <label className="input-label">Spell Type: </label>
    <br/>
        <select onChange={handleSetSpelltype}>
            {spelltypeOptions}
        </select>
        <br/>
        <br/>
        <label>Spell Name:</label>
        <input 
        name="Spell Name"
        type="string"
        placeholder="Name of the spell..."
        value={spellname}
        onChange={handleSetSpellname}
        className="form-input"
        ></input>
        <br/>
        <br/>
        <label>Image:</label>
        <input 
        name="Spell Icon"
        type="string"
        placeholder="Link for spell image..."
        value={image}
        onChange={handleSetImage}
        className="form-input"
        ></input>
        <br/>
        <br/>
        <label>Spell Effect:</label>
        <input 
        name="effect"
        type="string"
        placeholder="Spell goes boom!..."
        value={effect}
        onChange={handleSetEffect}
        className="form-input"
        ></input>
        <br/>
        <br/>
        <label>FP :</label>
        <input 
        name="fp"
        type="integer"
        placeholder="FP..."
        value={fp}
        onChange={handleSetFp}
        className="form-input"
        ></input>
        <br/>
        <br/>
        <button className="form-input" type="submit">Add New Spell</button> 
    </form>
        
    </>

   )
}

export default SpellsForm;