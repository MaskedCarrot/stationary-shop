import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css'
import Home from './component/Home'
import Login from './component/Login'
import Employee from './component/Employee'


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
              </Routes>
          </BrowserRouter>
        </div>
    )
}

export default App