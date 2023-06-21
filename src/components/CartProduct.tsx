import '../styles/components/CartProduct.styles.css'
function CartProduct(){
    return (
    <div className='cart-item'>
        <img src='./resources/featured-p/0.jpg'/>
        <div className="description">
            <p> {" "} <b> Testing </b></p>
            <p> Test €</p>
            <div className="count-handler">
                <button>+</button>
                <input type='text'></input>
                <button>-</button>
            </div>
        </div>
    </div>
    )
}
export default CartProduct
