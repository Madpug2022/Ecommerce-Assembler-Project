import { Link } from "react-router-dom";
import { FaGithub, FaInstagram } from "react-icons/fa"
import { BsFillPersonFill } from "react-icons/bs"
import '../styles/components/LogInNavBar.styles.css'
import LoginModal from "./LoginModal";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
function LogInNavbar(){
    const shopContext = useContext(ShopContext);

    if(!shopContext) {
        return null;
    }
    const { openModal, toggleModal, buttonText, logOut } = shopContext;
 return (
    <>
    <div className="log-in-nav-bar-container">
        <nav className="log-in-nav-bar">
            <a href="https://github.com/Madpug2022" target="_blank" className="nav-link"><FaGithub/>@Madpug2022</a>
            <Link to="/" className="nav-link"><FaInstagram/>@Pl∆ayStore</Link>
            <Link to="/" className="nav-link">Store</Link>
            <Link to="/" className="nav-link">Company</Link>
            <Link to="/" className="nav-link">Contact</Link>
            {buttonText !== 'Log In' ? <button onClick= {() => logOut()} className="nav-link nav-button">Log Out</button> : <></>}<button disabled={buttonText !== 'Log In'? true : false} onClick={() => { toggleModal() }} className="nav-link nav-button"><BsFillPersonFill/>{buttonText}</button>
        </nav>
    </div>
    {openModal && <LoginModal/>}
    </>
 )
}

export default LogInNavbar;
