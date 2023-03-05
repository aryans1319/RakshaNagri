import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'
import React, { useState } from 'react'

const Radioo = ({prob,probT,heading}) => {
  const [value,setValue]= useState({prob});
  function handleChange(e){
    setValue(e.target.value);
  }
  return (
   
    <FormControl>
  <FormLabel id="demo-controlled-radio-buttons-group ">{heading}</FormLabel>
  <RadioGroup
    aria-labelledby="demo-controlled-radio-buttons-group"
    name="controlled-radio-buttons-group"
    value={value}
    onChange={handleChange}
  >
    <FormControlLabel value={prob} control={<Radio/>} label={prob}/>
    <FormControlLabel value={probT} control={<Radio/>} label={probT}/>
  </RadioGroup>
</FormControl>
  )
}

/*
<FormControl>
  <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
  <RadioGroup
    aria-labelledby="demo-controlled-radio-buttons-group"
    name="controlled-radio-buttons-group"
    value={value}
    onChange={handleChange}
  >
    <FormControlLabel value="female" control={<Radio/>} label="Female"/>
    <FormControlLabel value="male" control={<Radio/>} label="Male"/>
  </RadioGroup>
</FormControl>

*/
export default Radioo