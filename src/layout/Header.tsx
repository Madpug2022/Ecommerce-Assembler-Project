import '../styles/layout/header.css'
import HeaderSearchBar from '../components/HeaderSearchBar'
import NavbarRoutes from '../router/Navbar.routes'

const Header = () => {
    return (
        <>
        <main>
            <HeaderSearchBar/>
            <NavbarRoutes/>
        </main>
        </>
    )
}

export default Header;
