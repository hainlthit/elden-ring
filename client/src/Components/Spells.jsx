import React from 'react'
import SpellCard from './SpellCard';
import {useEffect, useState} from "react";
import SpellsForm from "./SpellsForm";
import SpellDetail from './SpellDetail';


function Spells() {
  const [spellData, setSpellData] = useState([''])
 

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
        setSpellData([...spellData,data])
      }
    )
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
  
  const spellDetails = spellData.map((spell)=>
  
  <SpellDetail
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
    // <Container maxWidth="sm">
      <div>
        <h2>All Spells Listed Below:</h2>
        <div className='card-holder'>{spellCards}</div>
        <SpellsForm handlePost={handlePost} spellData={spellData} setSpellData={setSpellData}/>
      
      </div>

  )
}

export default Spells;