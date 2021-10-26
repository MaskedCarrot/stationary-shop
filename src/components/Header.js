import React from 'react'

const Header = (props) => {
    return (
        <header>
            <h1 className='custom-header'>{props.pageName}</h1>
        </header>
    )
}

export default Header
