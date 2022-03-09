import React, { useState } from 'react';

export default function SkillForm({handlePost}) {

  const [skillName, setSkillName] = useState("");
  const [skillType, setSkillType] = useState("")
  const [image, setImage] = useState('')
  const [effect, setEffect] = useState("")
  const [fp, setFp] = useState("")
  const [equipment, setEquipment] = useState("")
  
   function handleSetSkillName(e) {
    setSkillName(e.target.value)
   }

   function handleSetSkillType(e) {
       setSkillType(e.target.value)
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

   function handleSetEquipment(e) {
       setEquipment(e.target.value)
   }
   
   function handleSubmit(e){
       e.preventDefault();
       
       const newSkillObj = {
          skill_name: skillName,
          skill_type: skillType,
           image: image,
          effect: effect,
          fp: fp,
          equipment: equipment
       }
    handlePost(newSkillObj)
       
   }
  return (
   <>
   <br/>
   <h2>Add a new Skill!</h2>
   <br/>
   <form onSubmit={handleSubmit} className="form">
   
       <label>Skill Name:</label>
       <input 
       name="Skill Name"
       type="string"
       placeholder="Name of the skill..."
       value={skillName}
       onChange={handleSetSkillName}
       className="form-input"
       ></input>
       <br/>
   
       <br/>
       <label>Skill Type:</label>
       <input 
       name="Skill Type"
       type="string"
       placeholder="Type of the skill..."
       value={skillType}
       onChange={handleSetSkillType}
       className="form-input"
       ></input>
       <br/>

       <br/>
       <label>Image:</label>
       <input 
       name="Skill Icon"
       type="string"
       placeholder="Link for skill image..."
       value={image}
       onChange={handleSetImage}
       className="form-input"
       ></input>
       <br/>

       <br/>
       <label>Skill Effect:</label>
       <input 
       name="effect"
       type="string"
       placeholder="Skill goes boom!"
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
       <label>Equipment :</label>
       <input 
       name="fp"
       type="integer"
       placeholder="Equipment..."
       value={equipment}
       onChange={handleSetEquipment}
       className="form-input"
       ></input>
       <br/>

       <br/>
       <button className="form-input" type="submit">Add New Skill</button> 
   </form>
       
   </>

  )
}


