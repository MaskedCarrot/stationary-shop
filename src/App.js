import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css'
import Home from './component/Home'
import Login from './component/Login'
import Employee from './component/Employee'
import Category from './component/CategoryCard'
import AddEmployee from './component/AddEmployee'
import EditEmployee from './component/EditEmployee'
import DeleteEmployee from './component/DeleteEmployee'
import EditCategory from './component/EditCategory'
import EmployeeList from './component/EmployeeList'
import EditItem from './component/EditItem'
import DeleteItem from './component/DeleteItem'
import AddItem from './component/AddItem'
import ShowEmployee from './component/showwmployee'

const App = () => {
    return (
        <div className='app'>
          <BrowserRouter>
            {
              /**
               * Switch in not exported in react router dom v6 so we use route instead
               * https://stackoverflow.com/a/69849683
               */
            }
              <Routes>
                  <Route path="/" exact element={<Home />} />
                  <Route path="/login" exact element={<Login />} />
                  <Route path="/employee" exact element={<Employee />} />
                  <Route path="/category" exact element={<Category />} />
                  <Route path="/addemployee" exact element={<AddEmployee />} />
                  <Route path="/editemployee" exact element={<EditEmployee />} />
                  <Route path="/deleteemployee" exact element={<DeleteEmployee />} />
                  <Route path="/deletecategory" exact element={<EditCategory />} />
                  <Route path="/employeelist" exact element={<EmployeeList />} />
                  <Route path="/edititem" exact element={<EditItem />} />
                  <Route path="/deleteitem" exact element={<DeleteItem />} />
                  <Route path="/additem" exact element={<AddItem />} />
                  <Route path="/showemployee" exact element={<ShowEmployee />} />
              </Routes>
          </BrowserRouter>
        </div>
    )
}

export default App