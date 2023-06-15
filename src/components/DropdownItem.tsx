import { Link } from 'react-router-dom'

function DropdownItem(props:any){
    return (
        <li className="dropdownItem">
            <Link className='dropdown-nav-link' to={props.href} target="_blank">{props.title}</Link>
        </li>
    )
};

export default DropdownItem;
