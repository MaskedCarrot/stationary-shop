import React from 'react'

const EditCategory = () => {
  return (
    <div style={{margin: '20px auto', width: '50%'}}>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Category ID</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="5 digit category ID" />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Item 1</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="" />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Item 2</label>  
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="" />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Item 3</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="" />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Item 4</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="" />
      </div>
      <button class="btn btn-primary">Submit Changes</button>
    </div>
  )
}

export default EditCategory
