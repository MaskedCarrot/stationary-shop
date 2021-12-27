import React from 'react'
import Header from './Header'
import MainInfo from './MainInfo'
import Footer from './Footer'
import AllItems from './AllItems'
import AllCategory from './AllCategory'
import { supabase } from '../supabaseClient'
import AllEmployee from './AllEmployee'

/**
 * This is the first page that is displayed to the customer, employee, and the shopkeer.
 */
const Home = () => {

    return (
        <div>
            <Header />
            <MainInfo />
            <AllItems />
            <Footer />
        </div>
    )
}

export default Home
