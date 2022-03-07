import React from 'react'
import ClassCard from '../Components/ClassCard';
import {useEffect, useState} from "react";

function Spells() {
  const [classData, setClassData] = useState([''])

  // useEffect(() => {
  //   fetch('http://localhost:3000/classes')
  //     .then(r => r.json())
  //     .then(data => setClassData(data))
  // }, [])
  
  // const classCards = classesData.map((class)=>
  // <ClassesCard
  //   key = {class.id}
  //   classObj={class}
  // /> )
  
  return (
    <div>
        <h2>All Classes Listed Below:</h2>
        {/* {classCards} */}
    </div>
  )
}

export default Spells;