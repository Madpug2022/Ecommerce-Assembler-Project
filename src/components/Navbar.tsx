import '../styles/components/Navbar.styles.css'
import { Link } from 'react-router-dom'
import NavbarButton from './NavbarButton'
import { useContext } from 'react'
import {BiCart} from "react-icons/bi"
import { ShopContext } from '../context/ShopContext'

function Navbar(){
    const consoles: string[] = ['Playstation', 'Xbox', 'PC', 'Nintendo']
    const shopContext = useContext(ShopContext);
    if (!shopContext) return null;
    const { getTotalItems } = shopContext;
    return (
        <>
        <div className="navbar-container">
            <Link to="/" className='main-nav-link'>Featured</Link>
            {consoles.map((console) => <NavbarButton key={console} name={console}/>)}
            <Link to="/cart" className='main-nav-link'style={{ display: 'flex', flexDirection: 'row', alignItems: 'center'}}><BiCart/> <span style={{ fontSize: '16px'}}>({ getTotalItems() })</span></Link>
        </div>
        </>
    )
}
export default Navbar
