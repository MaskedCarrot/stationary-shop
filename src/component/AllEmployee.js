import React, { useState, useEffect } from 'react'
import { supabase } from '../supabaseClient'
import EmployeeCard from './EmployeeCard'
import '../style/EmployeeCard.css'
import { Typography } from '@mui/material'

const AllEmployee = () => {

    const userIsAuth = false

    const fetchItemData = async () => {
        try {
            const { data: employee, error } = await supabase
                .from('employee')
                .select('*')

            if (error) throw error
            else setitemData(employee)
            console.log(employee)
        } catch (error) {
            alert(error.error_description || error.message)
        }
    }

    const [employeeData, setitemData] = useState([])
    useEffect(() => {
        fetchItemData();
    }, [])

    return (
        <div>
            <Typography
                variant="h4"
                gutterBottom component="div"
                style={{ margin: '10px' }}
            >
                All Employees
            </Typography>
            <ul className='employee' >
                {employeeData.map((employee, index) => {
                    return <li key={index}><EmployeeCard data={employee} /></li>
                })}
            </ul>
        </div>
    )
}

export default AllEmployee
