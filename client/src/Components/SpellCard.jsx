import React from 'react'

export default function SpellCard({spellname, image, spelltype, fp, effect}) {
  return (
    <>
      <div className="spell-card">
        <div className="spell-content">
                <img alt={spellname} src={image}/>
                    <h4>{spellname}</h4> 
                    <p>Spell Type: {spelltype}</p> 
                    <p>FP: {fp}</p> 
                    <p>Effect: {effect}</p> 
                <br/> 
            </div>
         </div>  
    </>
  )
}
