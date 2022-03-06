import React from 'react'
import SpellCard from './SpellCard';
import {useEffect, useState} from "react";

function Spells() {

  useEffect(() => {
    fetch('http://localhost:3000/spells')
      .then(r => r.json())
      .then(data => console.log(data))
  }, [])

  
  return (
    <div>
        <p>Spells here</p>
        {/* {spellCards} */}
    </div>
  )
}

export default Spells;