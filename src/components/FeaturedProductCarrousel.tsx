import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'
import {featuredProducts} from '../assets/products.db'
import ProductCard from './ProductCard'
import '../styles/components/FeaturedProductCarrousel.styles.css'


function FeaturedProductCarrousel(){
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 500, min: 0 },
          items: 2
        }
      };
    return (
        <>

        <Carousel className="fProductCarrousel" responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={3000}>
        {featuredProducts.slice(0, 8).map((product) => { return (
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
            />)
        })}
        </Carousel>

        </>
    )
}

export default FeaturedProductCarrousel
