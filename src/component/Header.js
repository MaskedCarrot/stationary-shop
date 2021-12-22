import { supabase } from "../supabaseClient"
import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import GroupIcon from '@mui/icons-material/Group';
import CategoryIcon from '@mui/icons-material/Category';
import InventoryIcon from '@mui/icons-material/Inventory';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import '../style/Header.css'

const Header = (props) => {
    const userLoggedIn = props.userIsAuth
    const [headerActive, setHeaderActive] = useState(false)

    // Adds shadow below the header when the page is scrolled.
    window.addEventListener('scroll', () => {
        if (window.scrollY >= 80) {
            setHeaderActive(true)
        } else {
            setHeaderActive(false)
        }
    })

    async function fetchShopStatus() {
        try {
            let { data: shop, error } = await supabase
                .from('shop')
                .select('status')

            if (error) {
                throw(error)
            } else {
                setStatus(shop[0].status)
            }
        } catch (error) {
            alert(error.error_description || error.message)
        }
    }

    const [shopStatus, setStatus] = useState([])
    useEffect(() => {
        fetchShopStatus();
    }, [])

    async function setShopStatus() {
        if (document.getElementById('toggleSwitch').checked) {
            const { data, error } = await supabase
                .from('shop')
                .update({ 'status': true })
                .eq('name', 'Stationary Shop')
        } else {
            const { data, error } = await supabase
                .from('shop')
                .update({ 'status': false })
                .eq('name', 'Stationary Shop')
        }
    }

    return (
        <div className={headerActive ? 'header active' : 'header'} >

            <div className='header-left' >
                <MenuBookIcon style={{ fontSize:'50px', color: '#88c198', paddingLeft: '5px', paddingRight: '7px' }} />
                <span style={{ color: '#333333' }}>
                    Stationary Shop
                </span>
            </div>

            <div className='header-centre' >
                < SearchIcon style={{ fontSize:'30px', padding: '3px', color: 'gray' }} />
                <input className='header-search' type='text' placeholder='What are you looking for?' />
            </div>

            {
                userLoggedIn ?
                    (
                        <div className='header-right-logged-in'>
                            <CategoryIcon />
                            <InventoryIcon />
                            <GroupIcon />
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

            <div className='toggle-switch'>
                Shop status
                {
                    shopStatus ?
                        (
                            <label class='toggle-switch-label' htmlFor='toggleSwitch'>
                                <input type='checkbox' onChange={setShopStatus} className='toggle-switch-checkbox' name='toggleSwitch'
                                    id='toggleSwitch' checked />
                                <span class='slider round'></span>
                            </label>
                        ) : (
                            <label class='toggle-switch-label' htmlFor='toggleSwitch'>
                                <input type='checkbox' onChange={setShopStatus} className='toggle-switch-checkbox' name='toggleSwitch'
                                    id='toggleSwitch' />
                                <span class='slider round'></span>
                            </label>
                        )
                }
            </div>
        </div>
    )
}

export default Header
