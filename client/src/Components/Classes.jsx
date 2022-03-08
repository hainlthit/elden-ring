import React from 'react'
import ClassCard from './ClassCard';
import {useEffect, useState} from "react";

function Spells() {
  const [classData, setClassData] = useState([''])

  useEffect(() => {
    fetch('http://localhost:3000/er_classes')
      .then(r => r.json())
      .then(data => console.log(data))
  }, [classData])
  
  const classCards = classData.map((er_class)=> 
  <ClassCard
    key = {er_class.id}
    id = {er_class.id}
    name= {er_class.name}
    level= {er_class.level}
    info= {er_class.info}
    weapons= {er_class.weapons}
    image= {er_class.image}
    // handleUpdateClass={handleUpdateClass}
    // handleDeleteClass={handleDeleteClass}
  /> )
  

  return (
    <div>
        <h2>All Classes Listed Below:</h2>
        {classCards}
    </div>
  )
}

export default Spells;