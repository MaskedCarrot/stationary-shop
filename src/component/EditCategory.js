import React from 'react'
import { useNavigate } from "react-router-dom";
import '../style/EditItem.css'
import { Button, IconButton, Switch, TextField } from "@mui/material";
import { supabase } from '../supabaseClient'
import Box from '@mui/material/Box';

const EditCategory = () => {

  const user = supabase.auth.user()
    const userIsAuth = user && user.aud === 'authenticated'

  const navigate = useNavigate()
  const handleSubmit = async (event) => {

    event.preventDefault();
    const data = new FormData(event.currentTarget);
    

    // eslint-disable-next-line no-console

    const name = new FormData(event.currentTarget).get('name')
    const image_url = new FormData(event.currentTarget).get('image_url')
    console.log({
      name: new FormData(event.currentTarget).get('name'),
      image_url: data.get('image_url'),
    });

    try {

      
      // const { data,session,  error } = await supabase
      // .from('items')
      // .insert([
      //   { name: name, price: price, quantity: quantity, image_url: image_url },
      // ])
      // console.log("Success");

      const { data, session, error } = await supabase
      .from('categories')
      .update({ image_url: image_url })
      .eq('name', name)


      if (error) throw error
      if (session) navigate('../', {replace: true});
    } catch (error) {
      alert(error.error_description || error.message)
      console.log("Failed");
    }


    window.location.href='/..';
  };


  return (

    !userIsAuth ? (
      window.location.href='/..'
  ):
  (

    <Box  component="form" onSubmit={handleSubmit} >
    <div style={{margin: '20px auto', width: '50%'}}>
      <div style={{margin: '10px'}} className='edititem'>
        EDIT CATEGORY
      </div>

      <TextField style={{ minWidth: '500px', padding: '5px' }} id="outlined-basic" className="editItemAtt" name="name" label="name" variant="outlined" />

      <TextField style={{ minWidth: '500px', padding: '5px' }} id="outlined-basic" className="editItemAtt" name="image_url" label="image_url" variant="outlined" />

      <div className='submitButton'>
        <button type = 'submit' class="btn btn-primary" onClick= "handleSubmit()">Submit Changes</button>
      </div>
    </div>
    </Box>
  )
  )
}

export default EditCategory
