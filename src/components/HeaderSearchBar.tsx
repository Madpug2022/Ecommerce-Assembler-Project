import { SlMagnifier } from "react-icons/sl"
import '../styles/components/HeaderSearchBar.styles.css'
function HeaderSearchBar(){
    return (
        <div className="header-searchbar-container">
            <div className="logo-container">
                <img src="./resources/Logo.jpg"/>
            </div>
            <div className="searchbar-container">
                <form>
                    <input type="text" className="searchbar" placeholder="¿What are you looking for?"/>
                    <button type="submit"><SlMagnifier/></button>
                </form>
            </div>
        </div>
    )
}

export default HeaderSearchBar;
