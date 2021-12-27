import React from 'react'
import { useNavigate } from "react-router-dom";
import '../style/EditItem.css'
import { Button, IconButton, Switch, TextField } from "@mui/material";
import { supabase } from '../supabaseClient'
import Box from '@mui/material/Box';

const EditItem = () => {

  const navigate = useNavigate()
  const handleSubmit = async (event) => {

    event.preventDefault();
    const data = new FormData(event.currentTarget);
    

    // eslint-disable-next-line no-console

    const name = new FormData(event.currentTarget).get('item')
    const price = new FormData(event.currentTarget).get('price')
    const quantity = new FormData(event.currentTarget).get('quantity')
    const image_url = new FormData(event.currentTarget).get('image_url')
    console.log({
      name: new FormData(event.currentTarget).get('item'),
      price: data.get('price'),
      quantity: data.get('quantity'),
      image_url: data.get('image_url'),
    });

    try {

      
      const { data,session,  error } = await supabase
      .from('items')
      .insert([
        { name: name, price: price, quantity: quantity, image_url: image_url },
      ])
    //   console.log("Success");

    //   const { data, session, error } = await supabase
    //   .from('items')
    //   .update({ price: price })
    //   .eq('name', name)

    //   const { data1, session1, error1 } = await supabase
    //   .from('items')
    //   .update({ quantity: quantity })
    //   .eq('name', name)


      if (error) throw error
      if (session) navigate('../', {replace: true});
    } catch (error) {
      alert(error.error_description || error.message)
      console.log("Failed");
    }


    window.location.href='/..';
  };



  return (

    <Box  component="form" onSubmit={handleSubmit} >
    <div style={{margin: '20px auto', width: '50%'}}>
      <div style={{margin: '10px'}} className='edititem'>
        ADD ITEMS
      </div>

      <TextField style={{ minWidth: '500px', padding: '5px' }} id="outlined-basic" className="editItemAtt" name="item" label="item" variant="outlined" />

    <TextField style={{ minWidth: '500px', padding: '5px' }} id="outlined-basic" className="editItemAtt" name="price" label="price" variant="outlined" />

    <TextField style={{ minWidth: '500px', padding: '5px' }} id="outlined-basic" className="editItemAtt" name="quantity" label="quantity" variant="outlined" />

    <TextField style={{ minWidth: '500px', padding: '5px' }} id="outlined-basic" className="editItemAtt" name="image_url" label="image_url" variant="outlined" />

      <div className='submitButton'>
        <button type = 'submit' class="btn btn-primary" onClick= "handleSubmit()">Submit Changes</button>
      </div>
    </div>
    </Box>
  )
}

export default EditItem
