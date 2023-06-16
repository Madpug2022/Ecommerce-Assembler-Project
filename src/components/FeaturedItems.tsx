import { Link } from "react-router-dom";
import { BsHeadphones, BsFillDpadFill, BsFillMouse2Fill } from "react-icons/bs"
import { BiGame } from "react-icons/bi"
import { GiGameConsole, GiGamepad} from "react-icons/gi";
import '../styles/components/FeaturedItems.styles.css';
function FeaturedItems(){
    return (
        <div className="featured-items-container">
            <div className="f-item-box">
                <Link className="f-item" to="/"><BsHeadphones/><p>AUDIO</p></Link>
            </div>
            <div className="f-item-box">
                <Link className="f-item" to="/"><BsFillDpadFill/><p>GAMES</p></Link>
            </div>
            <div className="f-item-box">
                <Link className="f-item" to="/"><BsFillMouse2Fill/><p>PERIFERICS</p></Link>
            </div>
            <div className="f-item-box">
                <Link className="f-item" to="/"><BiGame/><p>MERCHANDISING</p></Link>
            </div>
            <div className="f-item-box">
                <Link className="f-item" to="/"><GiGameConsole/><p>CONSOLES</p></Link>
            </div>
            <div className="f-item-box">
                <Link className="f-item" to="/"><GiGamepad/><p>GAMEPADS</p></Link>
            </div>
        </div>
    )
}
export default FeaturedItems;
