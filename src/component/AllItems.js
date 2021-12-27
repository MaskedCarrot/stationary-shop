import React, { useState, useEffect } from 'react'
import { supabase } from '../supabaseClient'
import ItemCard from './ItemCard'
import '../style/Items.css'
import { Typography } from '@mui/material'

const AllItems = (props) => {

    const fetchItemData = async () => {
        try {
            const { data: items, error } = (props.data == null) ?
                await supabase
                    .from('items')
                    .select('*')
                :
                await supabase
                    .from('items')
                    .select('*')
                    .ilike('name', '%'+props.data+'%')

            if (error) throw error
            else setitemData(items)
            console.log(items)
        } catch (error) {
            alert(error.error_description || error.message)
        }
    }

    const [itemData, setitemData] = useState([])
    useEffect(() => {
        fetchItemData();
    }, [props])

    return (
        <div>
            <Typography
                variant="h4"
                gutterBottom component="div"
                style={{ margin: '10px' }}
            >
                All Items
            </Typography>
            <ul className='item' >
                {itemData.map((item, index) => {
                    return <li key={index}><ItemCard data={item} /></li>
                })}
            </ul>
        </div>
    )
}

export default AllItems
