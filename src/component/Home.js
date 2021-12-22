import React from 'react'
import Header from './Header'
import MainInfo from './MainInfo'
import Footer from './Footer'
import MainPage from './MainPage'
import AllItems from './AllItems'
import { useLocation } from 'react-router-dom'

/**
 * This is the first page that is displayed to the customer, employee, and the shopkeer.
 */
const Home = (props) => {

    const state = useLocation();

    return (
        <div>
            <Header userIsAuth={state.userIsAuth} />
            <MainInfo />
            <AllItems />
            <Footer />
        </div>
    )
}

export default Home
