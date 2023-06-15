import { Link } from "react-router-dom";
import { FaGithub, FaInstagram } from "react-icons/fa"
import { BsFillPersonFill } from "react-icons/bs"
import '../styles/components/LogInNavBar.styles.css'
function LogInNavbar(){
 return (
    <div className="log-in-nav-bar-container">
        <nav className="log-in-nav-bar">
            <a href="https://github.com/Madpug2022" target="_blank" className="nav-link"><FaGithub/>@Madpug2022</a>
            <Link to="/" className="nav-link"><FaInstagram/>@Pl∆ayStore</Link>
            <Link to="/" className="nav-link">Stores</Link>
            <Link to="/" className="nav-link">Company</Link>
            <Link to="/" className="nav-link">Contact</Link>
            <Link to="/" className="nav-link"><BsFillPersonFill/>Log In</Link>
        </nav>
    </div>
 )
}

export default LogInNavbar;
