import { Product } from "../interfaces/product";
import '../styles/components/ProductCard.styles.css'
function ProductCard(props: Product){
    const {productId, name, price, img} = props;
    return (
        <div className="product-card" id={productId}>
            <div className="pc-top">
                <img src={img}/>
            </div>
            <div className="pc-bottom">
                <h3 className="fProd-title">{name}</h3>
                <p className="fProd-price">{price.toString()} €</p>
                <button className="fProd-button">Add to cart</button>
            </div>

        </div>
    )
}

export default ProductCard;
