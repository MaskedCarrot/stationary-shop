import React, { useState, useEffect } from 'react'
import { supabase } from '../supabaseClient'
import ItemCard from './ItemCard'

const AllItems = () => {

    const fetchItemData = async () => {
        try {
            const { data: items, error } = await supabase
                .from('items')
                .select('*')

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
    }, [])

    return (
        <div>
            <h4>All Items in One place</h4>
            <ul>
                {itemData.map((item, index) => {
                    return <li key={index}><ItemCard data={item}/></li>
                })}
            </ul>
        </div>
    )
}

export default AllItems
