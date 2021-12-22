import React, { useState, useEffect } from 'react'
import { supabase } from '../supabaseClient'
import CategoryCard from './CategoryCard'
import '../style/Category.css'
import { Typography } from '@mui/material'

const AllCategory = () => {

    const userIsAuth = false

    const fetchItemData = async () => {
        try {
            const { data: categories, error } = await supabase
                .from('categories')
                .select('*')

            if (error) throw error
            else setitemData(categories)
            console.log(categories)
        } catch (error) {
            alert(error.error_description || error.message)
        }
    }

    const [categoryData, setitemData] = useState([])
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
                Category
            </Typography>
            <ul className='category' >
                {categoryData.map((category, index) => {
                    return <li key={index}><CategoryCard data={category} /></li>
                })}
            </ul>
        </div>
    )
}

export default AllCategory
