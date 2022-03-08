import React from 'react'
import SkillCard from './SkillCard'
import {useEffect, useState} from "react";
import SkillForm from './SkillForm';

export default function Skills() {
    const [skillData, setSkillData] = useState([''])

    useEffect(() => {
    fetch('http://localhost:3000/skills')
      .then(r => r.json())
      .then(data => setSkillData(data))
  }, [skillData])

  function handleUpdateSkill(updatedSkill) {
    const editedSkill = skillData.map((skill) => {
      if (skill.id === updatedSkill.id) {
        return updatedSkill;
      } else {
        return skillData;
      }
    });
    setSkillData(editedSkill);
  }

  function handleDeleteSkill(skillToDelete){
    const updatedSkill = skillData.filter((skill) => {
      if (skill.id !== skillToDelete.id) {
        return skill
      } else {
        return null
      }
    });
    handleAddSkill(updatedSkill);
  }
// WORK IN PROGRESS
  function handleAddSkill(addedSkill) {
    setSkillData((skillData) => [...skillData, addedSkill])
  }

  const skillCards = skillData.map((skills)=> 
  <SkillCard
    key = {skills.id}
    id = {skills.id}
    skillObj={skills}
    handleUpdateSkill={handleUpdateSkill}
    handleDeleteSkill={handleDeleteSkill}
  /> )

  return (
    <div>
        <h2>All Skills Listed Below:</h2>
        {skillCards}
        <SkillForm skillData={skillData} setSkillData={setSkillData}/>
    </div>
  )
}
