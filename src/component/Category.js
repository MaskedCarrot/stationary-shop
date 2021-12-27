import React, { useState, useEffect } from 'react'
import Header from './Header'
import MainInfo from './MainInfo'
import Footer from './Footer'
import AllCategory from './AllCategory'
import { supabase } from '../supabaseClient'

/**
 * This is the first page that is displayed to the customer, employee, and the shopkeer.
 */
const Home = () => {

    const user = supabase.auth.user()
    const userIsAuth = user && user.aud === 'authenticated'

    const [homeState, sethomeState] = useState(null)

    useEffect(() => {
        console.log(homeState)
    }, [homeState])

    return (
        !userIsAuth ? (
            window.location.href='/..'
        ):
        (

        <div>
            <Header searchData={homeState} setSearchData={sethomeState}  />
            <MainInfo />
            <AllCategory data={homeState}/>
            <Footer />
        </div>
        )
    )
}

export default Home
