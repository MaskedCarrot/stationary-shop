import React from 'react'
import { useNavigate } from "react-router-dom";
import '../style/EditItem.css'
import { Button, IconButton, Switch, TextField } from "@mui/material";
import { supabase } from '../supabaseClient'
import Box from '@mui/material/Box';

const DeleteEmployee = () => {

  const navigate = useNavigate()
  const handleSubmit = async (event) => {

    event.preventDefault();
    const data = new FormData(event.currentTarget);
    

    // eslint-disable-next-line no-console

    const name = new FormData(event.currentTarget).get('name')

    console.log({
      name: new FormData(event.currentTarget).get('name'),
    });

    try {

      
        const { data,session, error } = await supabase
        .from('employee')
        .delete()
        .eq('name', name)
      
      
      console.log("Success");

      if (error) throw error
      if (session) navigate('../', {replace: true});
    } catch (error) {
      alert(error.error_description || error.message)
      console.log("Failed");
    }


    window.location.href='/showemployee';
  };



  return (
    <Box  component="form" onSubmit={handleSubmit} >
    <div style={{margin: '20px auto', width: '50%'}}>
      <div style={{margin: '10px'}} className='edititem'>
        Remove Employee
      </div>

      <TextField style={{ minWidth: '500px', padding: '5px' }} id="outlined-basic" className="editItemAtt" name="name" label="name" variant="outlined" />

      
      <div className='submitButton'>
        <button type = 'submit' class="btn btn-primary" onClick= "handleSubmit()">Delete</button>
      </div>
    </div>
    </Box>

  )
}

export default DeleteEmployee
