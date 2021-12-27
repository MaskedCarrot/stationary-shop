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
const ShowEmployee = (props) => {

    const user = supabase.auth.user()
    const userIsAuth = user && user.aud === 'authenticated'

    console.log(userIsAuth)

    

    return (

        !userIsAuth ? (
            window.location.href='/..'
        ):
        (

        <div>
            <Header userIsAuth={user && user.aud === 'authenticated'} />
            
            <AllEmployee />
            <Footer />
        </div>
        )
    )
}

export default ShowEmployee
