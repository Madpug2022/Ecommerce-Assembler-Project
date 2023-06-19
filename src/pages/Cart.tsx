import '../styles/pages/Cart.styles.css';
import { useState, ChangeEvent } from 'react';

interface ShipmentOptionsState {
    freeShipment: boolean;
    premiumShipment: boolean;
  }

function Cart(){

        const [shipmentOptions, setShipmentOptions] = useState<ShipmentOptionsState>({
            freeShipment: false,
            premiumShipment: false,
        });

        const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
            const { name } = e.target;
    setShipmentOptions(() => ({
      freeShipment: name === 'freeShipment',
      premiumShipment: name === 'premiumShipment',
    }));
        };
    return (
        <section className="cart-page">
            <h1>Your Cart:</h1>
            <div className="cart-container">
                <div className="c-left">
                    <div className="product-container">
                        Products goes here
                    </div>
                </div>
                <div className="c-rigth">
                <form>
                    <div className='delivery-btns'>

                        <label>
                            <input
                            type="checkbox"
                            name="freeShipment"
                            checked={shipmentOptions.freeShipment}
                            onChange={handleCheckboxChange}
                            />
                        Free Shipment
                        </label>

                        <label>
                            <input
                            type="checkbox"
                            name="premiumShipment"
                            checked={shipmentOptions.premiumShipment}
                            onChange={handleCheckboxChange}
                            />
                        Premium Shipment
                        </label>

                    </div>
                    <div className='price-box'>
                        <span>Subtotal:</span>
                        <span><b>$</b></span>
                        <span>Delivery</span>
                        <span><b>$</b></span>
                    </div>
                    <div className='total-box'>
                        <span><b>Total:</b></span>
                        <span><b>$</b></span>
                    </div>
                    <button className='checkout-btn'>Checkout</button>
                    <span className='warng-checkout'>This site is protected by a giant gnome with a stick please read our <a href='/'>Terms of services and elden contract</a></span>
                    </form>
                </div>
                <div className="c-bottom">
                <p><b>Delivery information:</b></p>
                <p>Standart delivery is <b>2-4 working days</b>.</p>
                <p><b>¿Need it faster?</b></p>
                <p>You can choose <b>premium shippment</b> for <b>next working day delivery (purchases before 10:00 AM)</b>. Premium shippment is not available outside Mordor due to chances of <b>arphy attack</b> to our cargo fliers.</p>
                <p>Any order placed ouside <b>10 AM</b> will not be dispached until next working day.</p>
                <p>Please note that you must <b>not feed the delivery gryphon</b> Gandalf & Co. will <b>not take care of permanent or partial injuries or dismemberment.</b></p>
                </div>
            </div>

        </section>
    )
}

export default Cart;
