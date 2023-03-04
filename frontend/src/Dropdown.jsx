import React, { useState } from 'react'
import {Select,MenuItem, FormLabel} from '@mui/material';
const Dropdown = () => {
    const [value,setValue]= useState("");
    function handleChange(e){
        setValue(e.target.value);
    }
  return (
    <div>
        <FormLabel id="demo-controlled-radio-buttons-group">Kind</FormLabel>
        <br>
        </br>
        <Select value={value} displayEmpty onChange={handleChange}>
            <MenuItem value="" disabled>Select Problem</MenuItem>
            <MenuItem value={1}>Electricity</MenuItem>
            <MenuItem value={2}>Water Crisis</MenuItem>
            <MenuItem value={3}>Road Damage</MenuItem>
            <MenuItem value={4}>Pond Treatment</MenuItem>
        </Select>
    </div>
  )
}

export default Dropdown