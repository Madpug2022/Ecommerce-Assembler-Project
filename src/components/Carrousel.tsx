import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../styles/components/Carrousel.styles.css'
import * as images from '../assets/resources/publicityCarrousel/index'

function Carrousel(){
    return (
        <Carousel showThumbs={false} showIndicators={false} showStatus={false} autoPlay={true} infiniteLoop={true} interval={10000}>
                <div>
                    <img className="banner-img" src={images.C1} alt='banner-img'/>

                </div>
                <div>
                    <img className="banner-img" src={images.C2} alt='banner-img'/>

                </div>
                <div>
                    <img className="banner-img" src={images.C3} alt='banner-img'/>

                </div>
                <div>
                    <img className="banner-img" src={images.C4} alt='banner-img'/>

                </div>
        </Carousel>
    )
}
export default Carrousel
