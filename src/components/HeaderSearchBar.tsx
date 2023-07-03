import { SlMagnifier } from "react-icons/sl"
import { featuredProducts } from "../assets/products.db"
import '../styles/components/HeaderSearchBar.styles.css'
import logo from '../assets/resources/Logo.jpg'
import { useEffect, useState } from "react"
import { Product } from "../interfaces/product"
import FilteredItem from "./FilteredItem"
function HeaderSearchBar(){
    const [searchTerm, setSearchTerm] = useState('')
    const [focus, setFocus] = useState(false)
    const [filtered, setFiltered] = useState<Product[] | null>(null)

    useEffect(() => {
        const filteredProducts = featuredProducts.filter((product, index, arr) => {
            return (
            arr.findIndex((p) => p.name === product.name) === index
            );
        });

        let result = filteredProducts.filter((obj) => obj.name.toLowerCase().includes(searchTerm.toLowerCase()))
        if (result) {
        setFiltered(result) }
        console.log(filtered, searchTerm)
    }, [searchTerm, focus])
    return (
        <div className="header-searchbar-container">
            <div className="logo-container">
                <img src={logo}/>
            </div>
            <div className="searchbar-container">
                <form>
                    <input
                    aria-invalid={focus ? "false" : "true"}
                    aria-describedby="uidnote"
                    onChange={(e) => {setSearchTerm(e.target.value)}}
                    onFocus={() => setFocus(true)}
                    onBlur={() => setFocus(false)}
                    type="text"
                    className="searchbar"
                    placeholder="¿What are you looking for?"/>

                    <button type="submit"><SlMagnifier/></button>
                </form>

            </div>
            <div id="uidnote" className={focus ? "search-results" : "offscreen"}>
                    <div className="sr-container">{(filtered?.length == 0) ? <div className="filtered-item"> Item not Found </div> : filtered?.slice(0, 3).map((product) => {return (<FilteredItem key={product.productId}
            productId={product.productId}
            name={product.name}
            price={product.price}
            img={product.img}/>)})}</div>
                </div>
        </div>
    )
}

export default HeaderSearchBar;
