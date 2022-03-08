import React from 'react'
import ClassCard from './ClassCard';
import {useEffect, useState} from "react";
import ClassesForm from './ClassesFile/ClassesForm';

function Classes() {
  const [classData, setClassData] = useState([''])
  const [errors, setErrors] = useState(false)

  useEffect(() => {
    fetch('http://localhost:3000/er_classes')
      .then(r => r.json())
      .then(data => setClassData(data))
  }, [])
  
  function handleUpdateClass(updatedClass) {
    const editedClasses = classData.map((er_class) => {
      if (er_class.id === updatedClass.id) {
        return updatedClass;
      } else {
        return classData;
      }
    });
    setClassData(editedClasses);
  }

  function handleDeleteClass(classToDelete){
    const updatedClasses = classData.filter((er_class) => {
      if (er_class.id !== classToDelete.id) {
        return er_class
      } else {
        return null
      }
    });
    setClassData(updatedClasses);
  }

  function handlePost(obj){
    fetch('/er_classes',{
      method:'POST',
      headers: {'Content-Type': 'application/json'},
      body:JSON.stringify(obj)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.errors){
        setErrors(data.errors)
      } else {
        setClassData([...classData,data])
      }
    })
}

  const classCards = classData.map((er_class)=> 
  <ClassCard
    key = {er_class.id}
    id = {er_class.id}
    classObj={er_class}
    handleUpdateClass={handleUpdateClass}
    handleDeleteClass={handleDeleteClass}
  /> )
  
  return (
    <div>
        <h2>All Classes Listed Below:</h2>
        {classCards}
        <ClassesForm handlePost={handlePost} classData={classData} setClassData={setClassData}/>
    </div>
  )
}

export default Classes;