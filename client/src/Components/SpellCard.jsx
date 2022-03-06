import React from 'react'

export default function SpellCard() {
  // console.log(spellname)
// {spellname, spelltype, effect, image, fp}
  return (
    <>
      <div className="card">
        <div className="blog-content">
            <a href={"https://eldenring.wiki.fextralife.com/Death+Lightning"} className="spell-link">
                <img src={"https://eldenring.wiki.fextralife.com/file/Elden-Ring/death_lightning_incantation-icon_elden_ring_wiki_guide_200px.png"} alt="blog-image"/>
                    <p>DEATH LIGHTNING</p> 
                </a> <br /> 
            </div>
         </div>  
    </>
  )
}
