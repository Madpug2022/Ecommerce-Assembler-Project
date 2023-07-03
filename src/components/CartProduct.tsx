import '../styles/components/CartProduct.styles.css'
import { Product } from '../interfaces/product'
import { ShopContext } from '../context/ShopContext'
import { useContext } from 'react'
import * as images from '../assets/resources/carrousel/index';

function CartProduct(props: {product: Product}){
    const {productId, name, img, price} = props.product
    const shopContext = useContext(ShopContext);

    if(!shopContext) {
        return null;
    }
    const { cartItems, addToCart, removeFromCart, updateCartItemCount } = shopContext;

    return (
    <div className='cart-item'>
        <div className='cart-item-img-c'>
            <img src={images[img as keyof typeof images]}/>
        </div>
        <div className="description">
            <p> {" "} <b> {name} </b></p>
            <p> {price} €</p>
            <div className="count-handler">
                <button onClick={() => removeFromCart(productId)}>-</button>
                <input type='text' value={cartItems[productId]} onChange={(e) => updateCartItemCount(Number(e.target.value), productId)}></input>
                <button onClick={() => addToCart(productId)}>+</button>
            </div>
        </div>
    </div>
    )
}
export default CartProduct
