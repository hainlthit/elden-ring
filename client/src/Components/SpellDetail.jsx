import React from 'react';
import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';


function SpellDetail() {

    const [currentSpell, setCurrentSpell] = useState("")

    const {id} = useParams();

    useEffect(() => {
        fetch(`/spells/${id}`)
          .then((r) => r.json())
          .then((data) => {
            setCurrentSpell(data);
            
          });
    }, [id]);

    console.log(currentSpell)

  return (
    <div>SpellDetail 

        WUBBA WUBBA
    </div>
  )
}

export default SpellDetail