import React from 'react'
import SpellCard from './SpellCard';
import {useEffect, useState} from "react";
import SpellsForm from "./SpellsForm";

function Spells() {
  const [spellData, setSpellData] = useState([''])

  useEffect(() => {
    fetch('http://localhost:3000/spells')
      .then(r => r.json())
      .then(data => setSpellData(data))
  }, [])
  
  const spellCards = spellData.map((spell)=>
  <SpellCard
    key = {spell.id}
    spellObj={spell}
  /> )
  
  return (
    <div>
        <h2>All Spells Listed Below:</h2>
        {spellCards}
        <SpellsForm/>
        
    </div>
  )
}

export default Spells;