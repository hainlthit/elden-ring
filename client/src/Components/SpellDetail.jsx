import React from 'react';
import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


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


  return (
    <div className='card-holder'>
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={8}>
            <Card variant="outlined" sx={{ minWidth: 100 }}>
              <div className="card-content">
                <img alt={currentSpell.spellname} src={currentSpell.image}/>
                <h4>{currentSpell.spellname}</h4> 
                                  <p>Spell Type: {currentSpell.spelltype}</p> 
                                  <p>FP: {currentSpell.fp}</p> 
                                  <p>Effect: {currentSpell.effect}</p> 
            </div>
                </Card>
                </Grid>
                </Grid>
                </Box>
                </div>
  )
}

export default SpellDetail