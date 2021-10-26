import React from 'react'
import { Link } from "react-router-dom";

const SidebarItem = (props) => {
    return (
        <li key={props.index} className='sidemenu-item'>
            <Link to={props.data.to}>
                {props.data.icon}
                <span>{props.data.name}</span>
            </Link>
            {props.data.subMenus && props.data.subMenus.map((item, index) => {
                return (
                    <li className='sidemenu-item-dropdown'>
                        <Link to={item.to}>
                            {item.icon}
                            <span>{item.name}</span>
                        </Link>
                    </li>
                )
            })}
        </li>
    )
}

export default SidebarItem
