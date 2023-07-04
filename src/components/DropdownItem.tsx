import React from 'react';
import { Link } from 'react-router-dom'

interface DropdownItem {
    title: string
    console: string
    href: string
}

const DropdownItem:React.FC<DropdownItem> = (props) =>{
    return (
        <li className="dropdownItem" id={props.title}>
            <Link className='dropdown-nav-link' to={`${props.console}${props.href}`}>{props.title}</Link>
        </li>
    )
};

export default DropdownItem;
