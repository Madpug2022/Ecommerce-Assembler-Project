import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../styles/components/Carrousel.styles.css'

function Carrousel(){
    return (
        <Carousel showThumbs={false} showIndicators={false} showStatus={false} autoPlay={true} infiniteLoop={true} interval={10000}>
                <div>
                    <img className="banner-img" src="./resources/C1.jpg" alt='banner-img'/>

                </div>
                <div>
                    <img className="banner-img" src="./resources/C2.jpg" alt='banner-img'/>

                </div>
                <div>
                    <img className="banner-img" src="./resources/C3.jpg" alt='banner-img'/>

                </div>
                <div>
                    <img className="banner-img" src="./resources/C4.png" alt='banner-img'/>

                </div>
        </Carousel>
    )
}
export default Carrousel
