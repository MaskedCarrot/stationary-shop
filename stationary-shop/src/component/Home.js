import React from 'react'
import Header from './Header'
import MainInfo from './MainInfo'
import Footer from './Footer'
import MainPage from './MainPage'





/**
 * This is the first page that is displayed to the customer, employee, and the shopkeer.
 */
const Home = () => {
    return (
        <div>
            <Header />
            <MainInfo />
            <MainPage />
            {/* <Footer /> */}
        </div>
    )
}

export default Home
