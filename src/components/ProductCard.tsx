import { Product } from "../interfaces/product";
import '../styles/components/ProductCard.styles.css'
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Store } from 'react-notifications-component';
import * as images from '../assets/resources/carrousel/index';

function ProductCard(props: Product){
    const {productId, name, price, img} = props;
    const shopContext = useContext(ShopContext);
    if (!shopContext){
        return null;
    }
    const { addToCart } = shopContext;
    const notify = () => {
        Store.addNotification({
            title: "Product added to cart",
            type: "info",
            insert: "top",
            container: "top-right",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
            duration: 3000,
            }
        });
    }
    return (
        <div className="product-card" id={productId}>
            <div className="pc-top">
                <img src={images[img as keyof typeof images]}/>
            </div>
            <div className="pc-bottom">
                <h3 className="fProd-title">{name}</h3>
                <p className="fProd-price">{price.toString()} €</p>
                <button onClick={() => {addToCart(productId); notify()}}  className="fProd-button">Add to cart</button>
            </div>

        </div>
    )
}

export default ProductCard;
