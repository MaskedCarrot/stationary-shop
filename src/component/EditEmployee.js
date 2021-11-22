import React from 'react'

const EditEmployee = () => {
  return (
    <div style={{margin: '20px auto', width: '50%'}}>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Employee ID</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="5 digit employee ID" />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Email ID</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Aadhar Number</label>  
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Govt approved aadhar number" />
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
        <label for="exampleFormControlInput1" class="form-label">Job Profile</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Example: Staff Member" />
      </div>
      <button class="btn btn-primary">Submit Changes</button>
    </div>
  )
}

export default EditEmployee
