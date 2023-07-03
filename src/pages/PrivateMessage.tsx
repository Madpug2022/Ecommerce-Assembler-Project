import notPass from '../assets/resources/978d274e374e5dcb14b49a727810d9a3.png'
import { ShopContext } from '../context/ShopContext'
import { useContext } from 'react'
import '../styles/pages/PrivateMessage.styles.css'
const PrivateMessage = () => {
    const shopContext = useContext(ShopContext);

    if(!shopContext) {
        return null;
    }
    const {toggleModal} = shopContext;

    return (
        <div className='private-msg-container'>
            <img src={notPass} alt='Not Pass' />
            <p className='alert-msg'> Please <button className='alert-btn' onClick={() => { toggleModal() }}>Log In</button> to continue to payment </p>
        </div>

    )
}

export default PrivateMessage
