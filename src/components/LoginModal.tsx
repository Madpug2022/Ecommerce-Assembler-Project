import '../styles/components/LoginModal.styles.css'
import { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import LogIn from './LogIn';
import Register from './Register';
function LoginModal(){
    const shopContext = useContext(ShopContext);

    if(!shopContext) {
        return null;
    }
    const { closeModal } = shopContext;

    const [currentForm, setCurrentForm] = useState('login');
    const toggleForm = (formName: string) => {
        setCurrentForm(formName)
    }
    return (
        <>
        <div className="modal-background">
            <div className="modal-container">
                <div className="modal-top">
                    <button onClick={() => {closeModal()}}>X</button>
                </div>
                <div className="modal-tittle">
                    <img src="./resources/loginlogo.jpg" alt="logInLogo" />
                </div>
                {currentForm === 'login' ? <LogIn onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm}/>}
            </div>
        </div>
        </>
    )
}
export default LoginModal
