import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
const Private = () => {
    const shopContext = useContext(ShopContext);

    if(!shopContext) {
        return null;
    }
    const { isLoged } = shopContext;
    console.log(isLoged);

    if(!isLoged) {
        return (<Navigate to='/privateMsg'/>)
    }

    return (
        <div>
            <Outlet/>
        </div>
    )
}

export default Private
