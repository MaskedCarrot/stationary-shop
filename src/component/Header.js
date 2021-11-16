import React, { useState } from 'react'
import { Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import GroupIcon from '@mui/icons-material/Group';
import CategoryIcon from '@mui/icons-material/Category';
import InventoryIcon from '@mui/icons-material/Inventory';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import '../style/Header.css'

const Header = (props) => {
    const userLoggedIn = false
    const [headerActive, setHeaderActive] = useState(false)


    // Adds shadow below the header when the page is scrolled.
    window.addEventListener('scroll', () => {
        if (window.scrollY >= 80) {
            setHeaderActive(true)
        } else {
            setHeaderActive(false)
        }
    })

    return (
        <div className={headerActive ? 'header active' : 'header'} >

            <div className='header-left' >
                <MenuBookIcon style={{ color: '#88c198', paddingLeft: '5px', paddingRight: '7px' }} />
                <span style={{ color: '#333333' }}>
                    Stationary Shop
                </span>
            </div>

            <div className='header-centre' >
                < SearchIcon style={{ height: '18px', width: '18px', padding: '3px', color: 'gray' }} />
                <input className='header-search' type='text' placeholder='What are you looking for?' />
            </div>

            {
                userLoggedIn ?
                    (
                        <div className='header-right-logged-in'>
                            <CategoryIcon />
                            <InventoryIcon />
                            <GroupIcon />
                            <img alt='user avatar' />
                        </div>
                    ) : (
                        <div className='header-right-logged-out'>
                            <Link
                                style={{ textDecoration: 'none', paddingInline: '8px', color: '#333333', fontSize: '12px' }}
                                to='/login'>
                                Staff LogIn
                            </Link>
                        </div>
                    )
            }
        </div>
    )
}

export default Header
