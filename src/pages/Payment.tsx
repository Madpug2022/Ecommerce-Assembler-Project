import '../styles/pages/Payment.styles.css'
import image from '../assets/resources/Payment_Options.jpg'
import gryphon from '../assets/resources/gryphon.jpg'

const Payment = () =>{
    return (
        <div className="payment-p-container">
            <div className='gryphon-container'>

                <img src={gryphon} alt="gryphon-logo" />

            </div>
            <div className='payment-data'>
                <form>
                    <label htmlFor="name">Complete Name</label>
                    <input id= "name" type="text" />

                    <label htmlFor="lastname">Last Name</label>
                    <input id= "lastname" type="text" />

                    <label htmlFor="addres">Address street and number</label>
                    <input id= "addres" type="text" />

                    <label htmlFor="phone">Phone</label>
                    <input id= "phone" type="tel" />
                    <hr />
                    <img src={image} alt="payment-logo" />
                    <label htmlFor="cardname">Credit card Holder</label>
                    <input id= "cardname" type="tel" />
                    <label htmlFor="cardnumber">Credit card Number</label>
                    <input id= "cardnumber" type="tel" />
                    <label htmlFor="carddate">Expiration date</label>
                    <input id= "carddate" type="tel" />
                    <label htmlFor="cardseccode">Security code</label>
                    <input id= "cardseccode" type="tel" />
                    <button>Pay</button>
                </form>
            </div>
        </div>
    )
}

export default Payment
