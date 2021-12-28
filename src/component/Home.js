import React, { useState, useEffect } from 'react'
import Header from './Header'
import MainInfo from './MainInfo'
import Footer from './Footer'
import AllItems from './AllItems'
import AllCategory from './AllCategory'

/**
 * This is the first page that is displayed to the customer, employee, and the shopkeer.
 */
const Home = () => {

    const [homeState, sethomeState] = useState(null)

    useEffect(() => {
        console.log(homeState)
    }, [homeState])

    return (

        <div>
            <Header searchData={homeState} setSearchData={sethomeState}  />
            <MainInfo />
            <AllItems data={homeState}/>
            <br></br>
            <AllCategory data={homeState}/>
            <Footer />
        </div>
    )
}

export default Home
