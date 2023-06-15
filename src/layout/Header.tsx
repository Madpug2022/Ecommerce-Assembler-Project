import '../styles/layout/header.css'
import LogInNavbarRoutes from '../router/LogInNavbar.routes'
import HeaderSearchBar from '../components/HeaderSearchBar'
import NavbarRoutes from '../router/Navbar.routes'
const Header = () => {
    return (
        <header>
            <LogInNavbarRoutes/>
            <HeaderSearchBar/>
            <NavbarRoutes/>
        </header>
    )
}

export default Header;
