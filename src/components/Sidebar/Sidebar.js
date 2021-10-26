import React from 'react'
import { SidebarData } from './SidebarData'
import SidebarItem from './SidebarItem'
import './sidebar.css'


const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='sidebar-topsection'>
                <img className='sidebar-top-logo' src={process.env.PUBLIC_URL+'/stationary.png'} alt='Logo'/>
                <span className='sidebar-top-text' >Stationary Shop</span>
            </div>
            <ul>
                {SidebarData.map((item, index) => {
                    return (
                        <SidebarItem
                            index={index}
                            data={item}
                        />
                    )
                })}
            </ul>
        </div>
    )
}

export default Sidebar
