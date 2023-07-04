import goblin from '../assets/resources/101063.jpg'
import '../styles/components/UnderConstruction.styles.css'
const UnderConstruction = () => {
    return (
        <div className="under-const-cont">
            <h2>This Page is under construction, our most laborious goblins are doing great right now</h2>
            <img src={goblin} alt="Our nice goblin working" />

        </div>
    )
}

export default UnderConstruction
