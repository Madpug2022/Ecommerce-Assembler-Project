import * as images from '../assets/resources/carrousel/index';
import '../styles/components/FilteredItem.styles.css'

const FilteredItem = (props: any) => {

    const { img, name, price} = props;

    return (
        <>

        <div className="filtered-item">
            <div className="fi-left">
                <img className='fi-img' src={images[img as keyof typeof images]}/>
            </div>
            <div className="fi-rigth">
                <p><b>{name}</b></p>
                <p>{price} €</p>
            </div>
        </div>

        </>
    )
}
export default FilteredItem
