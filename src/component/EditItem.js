import React from 'react'

const EditEmployee = () => {
  return (
    <div style={{margin: '20px auto', width: '50%'}}>
      <div class="mb-3">
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

      <button class="btn btn-primary" onClick={() => window.location.href='/..'}>Submit Changes</button>
    </div>
  )
}

export default EditEmployee
