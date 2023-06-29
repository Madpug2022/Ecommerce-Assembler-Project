import { Link } from 'react-router-dom'

function DropdownItem(props:any){
    return (
        <li className="dropdownItem" id={props.title}>
            <Link className='dropdown-nav-link' to={`${props.console}${props.href}`}>{props.title}</Link>
        </li>
    )
};

export default DropdownItem;
