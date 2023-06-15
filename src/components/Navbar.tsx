import '../styles/components/Navbar.styles.css'
import { Link } from 'react-router-dom'
import NavbarButton from './NavbarButton'
import {BiCart} from "react-icons/bi"
function Navbar(){
    const consoles: string[] = ['Playstation', 'Xbox', 'PC', 'Nintendo']

    return (
        <div className="navbar-container">
            <Link to="/" className='main-nav-link'>Featured</Link>
            {consoles.map((console) => <NavbarButton name={console}/>)}

            <Link to="/" className='main-nav-link'><BiCart/></Link>

        </div>
    )
}
export default Navbar
