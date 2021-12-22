import React from 'react'
import Header from './Header'
import MainInfo from './MainInfo'
import Footer from './Footer'
import AllItems from './AllItems'
import AllCategory from './AllCategory'
import { supabase } from '../supabaseClient'

/**
 * This is the first page that is displayed to the customer, employee, and the shopkeer.
 */
const Home = (props) => {

    const user = supabase.auth.user()

    return (
        <div>
            <Header userIsAuth={user && user.aud === 'authenticated'} />
            <MainInfo />
            <AllItems />
            <AllCategory />
            <Footer />
        </div>
    )
}

export default Home
