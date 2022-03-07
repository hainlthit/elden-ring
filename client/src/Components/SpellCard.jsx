import React from 'react'

export default function SpellCard({spellObj}) {
  return (
    <>
      <div className="spell-card">
        <div className="spell-content">
                <img src={spellObj.image} alt={spellObj.spellname}/>
                    <h4>{spellObj.spellname}</h4> 
                    <p>Spell Type: {spellObj.spelltype}</p> 
                    <p>FP: {spellObj.fp}</p> 
                    <p>Effect: {spellObj.effect}</p> 
                <br/> 
            </div>
         </div>  
    </>
  )
}
