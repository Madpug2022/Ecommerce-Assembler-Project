import '../styles/components/LoginModal.styles.css'
import { useContext, useState, useRef, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import LogIn from './LogIn';
import Register from './Register';
import loginLogo from '../assets/resources/loginlogo.jpg'
function LoginModal(){
    const shopContext = useContext(ShopContext);

    if(!shopContext) {
        return null;
    }
    const { closeModal } = shopContext;

    let modalRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        let handler = (e: MouseEvent)=> {
          if(modalRef.current && !modalRef.current.contains(e.target as Node)){
          closeModal();
          }
        }
        document.addEventListener('mousedown', handler);

        return() =>
        document.removeEventListener('mousedown', handler);
      })

    const [currentForm, setCurrentForm] = useState('login');
    const toggleForm = (formName: string) => {
        setCurrentForm(formName)
    }
    return (
        <>
        <div className="modal-background">
            <div className="modal-container" ref={modalRef}>
                <div className="modal-top">
                    <button onClick={() => {closeModal()}}>X</button>
                </div>
                <div className="modal-tittle">
                    <img src={loginLogo} alt="logInLogo" />
                </div>
                {currentForm === 'login' ? <LogIn onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm}/>}
            </div>
        </div>
        </>
    )
}
export default LoginModal
