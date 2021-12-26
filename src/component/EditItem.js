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
      console.log("Success");


      if (error) throw error
      if (session) navigate('../', {replace: true});
    } catch (error) {
      alert(error.error_description || error.message)
      console.log("Failed");
    }
    
  };


  return (

    <Box  component="form" onSubmit={handleSubmit} >
    <div style={{margin: '20px auto', width: '50%'}}>
      <div className='edititem'>
        EDIT ITEMS
      </div>

      <TextField style={{ minWidth: '500px' }} id="outlined-basic" name="item" label="item" variant="outlined" />

      <TextField style={{ minWidth: '500px' }} id="outlined-basic" name="price" label="price" variant="outlined" />

      <TextField style={{ minWidth: '500px' }} id="outlined-basic" name="quantity" label="quantity" variant="outlined" />

      <TextField style={{ minWidth: '500px' }} id="outlined-basic" name="image_url" label="image_url" variant="outlined" />


      {/* <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Item Name</label>
        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Item" />
        
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Enter Price</label>
        <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="Price" />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Quantity</label>  
        <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="Quantity" />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Image URL</label>  
        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="image_url" />
      </div> */}

      <button type = 'submit' class="btn btn-primary" onClick= "handleSubmit()">Submit Changes</button>
    </div>
    </Box>
  )
}

export default EditItem
