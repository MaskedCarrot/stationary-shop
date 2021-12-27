import { supabase } from "../supabaseClient"
import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import GroupIcon from '@mui/icons-material/Group';
import CategoryIcon from '@mui/icons-material/Category';
import InventoryIcon from '@mui/icons-material/Inventory';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import '../style/Header.css'
import { Button, IconButton, Switch, TextField } from "@mui/material";
import { styled } from '@mui/material/styles';
import { Box } from "@mui/system";
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';


const Header = (props) => {

    const navigate = useNavigate()
    const user = supabase.auth.user()
    const userIsAuth = user && user.aud === 'authenticated'
    const [headerActive, setHeaderActive] = useState(false)
    const [shopStatus, setStatus] = useState(false)

    useEffect(() => {
        fetchShopStatus();
    }, [shopStatus])

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
                throw (error)
            } else {
                console.log(shop[0].status)
                setStatus(shop[0].status)
            }
        } catch (error) {
            alert(error.error_description || error.message)
        }
    }

    async function setShopStatus() {
        if (shopStatus) {
            const { data, error } = await supabase
                .from('shop')
                .update({ 'status': false })
                .eq('name', 'Stationary Shop')
            setStatus(false)
        } else {
            const { data, error } = await supabase
                .from('shop')
                .update({ 'status': true })
                .eq('name', 'Stationary Shop')
            setStatus(true)
        }
    }

    const searchItem = (event) => {
        event.preventDefault()
        const searchText = new FormData(event.currentTarget).get('search')
        props.setSearchData(searchText)
    }

    async function logOut() {
        try {
            console.log('logging out')
            const { error } = await supabase.auth.signOut()
            if (error) throw error
            navigate('../', { replace: true });
        } catch (error) {
            alert(error.error_description || error.message)
        }

    }

    return (
        <div className={headerActive ? 'header active' : 'header'} >

            <div className='header-left' >
                <MenuBookIcon style={{ fontSize: '50px', color: '#88c198', paddingLeft: '5px', paddingRight: '7px' }} />
                <span style={{ color: '#333333' }}>
                    Stationary Shop
                </span>
            </div>

            <Box style={{ display: 'flex' }} className='header-centre' component="form" noValidate onSubmit={searchItem} >
                <TextField style={{ minWidth: '500px' }} id="outlined-basic" name="search" label="search" variant="outlined" />
                <IconButton type="submit">
                    <SearchTwoToneIcon />
                </IconButton>
            </Box>

            {
                userIsAuth ?
                    (
                        <div className='header-right-logged-in'>
                            <CategoryIcon />
                            <InventoryIcon />
                            <GroupIcon onClick={() => window.location.href = '/showemployee'} />
                            <MaterialUISwitch checked={shopStatus} onChange={setShopStatus} />
                            <Button onClick={logOut} variant="contained">Logout</Button>

                        </div>
                    ) : (
                        <div className='header-right-logged-out'>
                            <Button onClick={() => { navigate('../login', { replace: true }); }} variant="contained">LogIn</Button>
                        </div>
                    )
            }


        </div>
    )
}



const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    '& .MuiSwitch-switchBase': {
        margin: 1,
        padding: 0,
        transform: 'translateX(6px)',
        '&.Mui-checked': {
            color: '#fff',
            transform: 'translateX(22px)',
            '& .MuiSwitch-thumb:before': {
                backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                    '#fff',
                )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
            },
            '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
            },
        },
    },
    '& .MuiSwitch-thumb': {
        backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
        width: 32,
        height: 32,
        '&:before': {
            content: "''",
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: 0,
            top: 0,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                '#fff',
            )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
        },
    },
    '& .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
        borderRadius: 20 / 2,
    },
}));

export default Header
