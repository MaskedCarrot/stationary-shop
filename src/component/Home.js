import React from 'react'
import Header from './Header'
import MainInfo from './MainInfo'
import Footer from './Footer'

/**
 * This is the first page that is displayed to the customer, employee, and the shopkeer.
 */
const Home = () => {
    return (
        <div>
            <Header />
            <MainInfo />
            <Footer />
        </div>
    )
}

export default Home
