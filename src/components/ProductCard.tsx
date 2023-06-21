import { Product } from "../interfaces/product";
import '../styles/components/ProductCard.styles.css'
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
function ProductCard(props: Product){
    const {productId, name, price, img} = props;
    const shopContext = useContext(ShopContext);
    if (!shopContext){
        return null;
    }
    const { addToCart } = shopContext;
    return (
        <div className="product-card" id={productId}>
            <div className="pc-top">
                <img src={img}/>
            </div>
            <div className="pc-bottom">
                <h3 className="fProd-title">{name}</h3>
                <p className="fProd-price">{price.toString()} €</p>
                <button onClick={() => addToCart(productId)} className="fProd-button">Add to cart</button>
            </div>

        </div>
    )
}

export default ProductCard;
