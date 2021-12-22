import React from 'react'
import shopOpen from '../resources/shop_open.png'
import '../style/MainInfo.css'

const MainInfo = () => {
    return (
        <div className='main-info'>
            <img style={{height: '200px', width: '400px'}} src={shopOpen} alt='Stationary shop logo' />     
            <h1>We're Open!</h1>
        </div>
    )
}

export default MainInfo
