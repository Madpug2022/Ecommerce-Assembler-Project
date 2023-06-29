import '../styles/layout/footer.styles.css'
import { BsInstagram, BsTwitter } from "react-icons/bs";
import Logo from '../assets/resources/Logo.jpg'
function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <div className="f-top"></div>
                <div className="f-middle">
                    <div className='fm-box'>
                        <h2>HELP</h2>
                        <a href="">How to buy</a>
                        <a href="">Terms and conditions</a>
                        <a href="">Privacy policy</a>
                    </div>
                    <div className='fm-box'>
                        <h2>MY ACCOUNT</h2>
                        <a href="">Log in</a>
                        <a href="">Register</a>
                    </div>
                    <div className='fm-box'>
                        <h2>FOLLOW US</h2>
                        <a href=""><BsInstagram/></a>
                        <a href=""><BsTwitter/></a>
                    </div>
                </div>
                <div className="f-bottom">
                    <div className='fb-left'>
                        <div><img src={Logo} alt="logo" /></div>
                        <div>
                            <p>© Pl△ay Store</p>
                            <p>All rigths reserved.</p>
                        </div>
                    </div>
                    <div className='fb-rigth'>
                        <div className='dg-btn-container'>
                            <button className='btn-flip'></button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer
