import '../styles/pages/Games.style.css'
import { useState, useEffect, CSSProperties, useContext } from 'react';
import { AiFillCaretLeft } from "react-icons/ai";
import { useParams } from "react-router-dom"
import { Link } from 'react-router-dom';
import FilterBlock from '../components/FilterBlock';
import { productsList } from '../assets/products.db';
import ProductCard from '../components/ProductCard';
import ClipLoader from "react-spinners/ClipLoader";
import { ShopContext } from '../context/ShopContext';

const override: CSSProperties = {
    display: "flex",
    margin: "auto",
    gridColumn: 2,
    alignItems: "center",
    justifyContent: "center",
  };

const filterparams = {
    recomendedAge: {
        title: "Recommended age",
        sub1: "Teenage (T)",
        sub2: "10 years or older (E+10)",
        sub3: "Adults (M)",
        sub4: "Everyone (E)"
    },
    genre:{
        title: "Genre",
        sub1: "Action",
        sub2: "Hack & Slash",
        sub3: "FPS",
        sub4: "Third person shooter",
        sub5: "Racing",
        sub6: "Horror",
    },
    company:{
        title: "Company",
        sub1: "Capcom",
        sub2: "Activision",
        sub3: "Bethesda",
        sub4: "EA Games"
    }
}
function GamesPage(){
    const [filteredProducts, setfilteredProducts] = useState(productsList)
    const shopContext = useContext(ShopContext);

    if(!shopContext) {
        return null;
    }
    const { state } = shopContext;
    const { genre, company, recommendedAge } = state;

    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
            setTimeout(() => {
            setLoading(false);
            }, 500);
    }, [])
    useEffect(() => {
        handleFilter()
    }, [state])

    function handleFilter() {
        if (genre === '' && company === '' && recommendedAge === '') {
         setfilteredProducts(productsList);
        } else {
        setfilteredProducts(productsList.filter((product) => {
            return (
            (product.genre === genre || genre === '') &&
            (product.company === company || company === '') &&
            (product.recommendedAge.includes(recommendedAge) || recommendedAge === '')
            );
        }));
        }
    }
    const param = useParams()
    return ( <> { param.href == 'games' ?
        (<section className="game-section-container">
            <div className='game-sect-top'><Link to={'/'}><AiFillCaretLeft/></Link><span>Welcome to {param.href}</span></div>
            <div className='game-sect-left'><FilterBlock filterparams={filterparams}/></div>
            <div className='game-sect-rigth'> { loading ?
            <ClipLoader
            color={'black'}
            loading={loading}
            cssOverride={override}
            size={150}
            /> :
            filteredProducts.map(product => { return (
                <ProductCard

                key={product.productId}
                productId={product.productId}
                name={product.name}
                price={product.price}
                img={product.img}
                console={product.console}
                recommendedAge={product.recommendedAge}
                genre={product.genre}
                company={product.company}
                />
            )})}
            </div>
        </section>) : (<div>testo</div>) }
        </>
)
}

export default GamesPage
