import React from 'react'
import { useNavigate } from "react-router-dom";
import '../style/EditItem.css'
import { Button, IconButton, Switch, TextField } from "@mui/material";
import { supabase } from '../supabaseClient'
import Box from '@mui/material/Box';

const DeleteItem = () => {

  const user = supabase.auth.user()
    const userIsAuth = user && user.aud === 'authenticated'

  const navigate = useNavigate()
  const deleteSubmit = async (event) => {

    event.preventDefault();
    const data = new FormData(event.currentTarget);
    

    // eslint-disable-next-line no-console

    const name = new FormData(event.currentTarget).get('item')
    console.log({
      name: new FormData(event.currentTarget).get('item'),
    });

    try {

      
      // const { data,session,  error } = await supabase
      // .from('items')
      // .insert([
      //   { name: name, price: price, quantity: quantity, image_url: image_url },
      // ])
      // console.log("Success");

    //   const { data, session, error } = await supabase
    //   .from('items')
    //   .update({ price: price })
    //   .eq('name', name)

    //   const { data1, session1, error1 } = await supabase
    //   .from('items')
    //   .update({ quantity: quantity })
    //   .eq('name', name)

    const { data,session,  error } = await supabase
    .from('items')
    .delete()
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

    <Box  component="form" onSubmit={deleteSubmit} >
    <div style={{margin: '20px auto', width: '50%'}}>
      <div className='edititem'>
        DELETE ITEMS
      </div>

      <TextField style={{ minWidth: '500px' }} id="outlined-basic" name="item" label="item" variant="outlined" />
      
      <button type = 'submit' class="btn btn-primary" onClick= "deleteSubmit()">DELETE</button>
    </div>
    </Box>
  )
  )
}

export default DeleteItem
