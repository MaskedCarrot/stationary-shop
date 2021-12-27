import React, { useEffect, useState } from 'react'
import shopOpen from '../resources/shop_open.png'
import '../style/MainInfo.css'
import { supabase } from '../supabaseClient'

const MainInfo = () => {

    async function fetchShopStatus() {
        try {
            let { data: shop, error } = await supabase
                .from('shop')
                .select('status')
    
            if (error) {
                throw (error)
            } else {
                setShopStatus(shop[0].status)
                { console.log(shopStatus) }
            }
        } catch (error) {
            alert(error.error_description || error.message)
        }
    }

    const [shopStatus, setShopStatus] = useState(false)

    useEffect(() => {
        fetchShopStatus();
    }, [])

    return (
        <div className='main-info'>
            <img style={{ height: '200px', width: '400px' }} src={shopOpen} alt='Stationary shop logo' />
            {
                shopStatus ? (<h1>We're Open!</h1>) : (<h1>We're Closed.</h1>)
            }
        </div>
    )
}

export default MainInfo
