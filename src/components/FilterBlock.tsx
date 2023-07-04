import '../styles/components/FilterBlock.styles.css'
import { ShopContext } from '../context/ShopContext';
import { useContext } from 'react';



function FilterBlock(props: any){
    const filterparams = props.filterparams;
    const shopContext = useContext(ShopContext);

    if(!shopContext) {
        return null;
    }
    const { setGenre, setCompany, setRecommendedAge } = shopContext;

    const handleClick = (category:string, value: string) => {
        switch (category) {
            case 'recomendedAge':
            setRecommendedAge(value);
            break;
            case 'genre':
            setGenre(value);
            break;
            case 'company':
            setCompany(value);
            break;
            default:
            break;
        }
    };

    return (
        <div className='filters-bar'>
            <h3>Filters</h3>
            <div>
            <button className="fb-button" onClick={() => {
                setCompany('');
                setGenre('');
                setRecommendedAge('');
            }}>All</button>
            {Object.keys(filterparams).map((key) => (
                <div className="fb-category" key={key}>
                <b>{filterparams[key].title}</b>
                {Object.keys(filterparams[key]).map((subKey) => {
                    if (subKey !== "title") {
                    return (
                    <button className="fb-button" key={subKey} onClick={() => handleClick(key, filterparams[key][subKey])}>
                    {filterparams[key][subKey]}
                    </button>
                );
            }
            return null;
            })}
        </div>
        ))}
    </div>
    </div>
    )
}
export default FilterBlock
