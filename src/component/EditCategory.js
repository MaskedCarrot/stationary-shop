import React from 'react'

const EditCategory = () => {
  return (
    <div style={{margin: '20px auto', width: '50%'}}>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Category ID</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="5 digit category ID" />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Email ID</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Batch Number</label>  
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Category Batch number" />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">Address</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Contact Number</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="10 digit number" />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Date of Manufacturing</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="DD-MM-YYYY" />
      </div>
      <button class="btn btn-primary">Submit Changes</button>
    </div>
  )
}

export default EditCategory
