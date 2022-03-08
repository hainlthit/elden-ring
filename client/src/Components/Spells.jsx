import React from 'react'
import SpellCard from './SpellCard';
import {useEffect, useState} from "react";
import SpellsForm from "./SpellsForm";

function Spells() {
  const [spellData, setSpellData] = useState([''])
  const [errors, setErrors] = useState(false)

  useEffect(() => {
    fetch('http://localhost:3000/spells')
      .then(r => r.json())
      .then(data => setSpellData(data))
  }, [])
  
  function handleUpdateSpell(updatedSpell) {
    const editedSpells = spellData.map((spell) => {
      if (spell.id === updatedSpell.id) {
        return updatedSpell;
      } else {
        return spellData;
      }
    });
    setSpellData([...spellData, editedSpells]);
  }

  function handleDeleteSpell(spellToDelete){
    const updatedSpells = spellData.filter((spell) => {
      if (spell.id !== spellToDelete.id) {
        return spell
      } else {
        return null
      }
    });
    setSpellData(updatedSpells);
  }

  function handlePost(obj){
    fetch('/spells',{
      method:'POST',
      headers: {'Content-Type': 'application/json'},
      body:JSON.stringify(obj)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.errors){
        setErrors(data.errors)
      } else {
        setSpellData([...spellData,data])
      }
    })
}

  const spellCards = spellData.map((spell)=>
  
  <SpellCard
    key = {spell.id}
    id = {spell.id}
    spellname={spell.spellname}
    spelltype={spell.spelltype}
    image={spell.image}
    effect={spell.effect}
    fp={spell.fp}
    handleUpdateSpell={handleUpdateSpell}
    handleDeleteSpell={handleDeleteSpell}
  /> )
  
  return (
    <div>
        <h2>All Spells Listed Below:</h2>
        {spellCards}
        <SpellsForm handlePost={handlePost} spellData={spellData} setSpellData={setSpellData}/>

    </div>
  )
}

export default Spells;