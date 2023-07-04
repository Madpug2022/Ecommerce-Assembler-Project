import { createContext, useState, useEffect, useReducer, useCallback, useMemo } from "react";
import { ShopContextValue, ShopContextProviderProps, CartItems } from  "../interfaces/shopContext"
import { featuredProducts } from '../assets/products.db'
export const ShopContext = createContext<ShopContextValue | null>(null);

const reducer = (state:any, action:any) => {
    switch (action.type) {
    case 'SET_GENRE':
        return { ...state, genre: action.payload };
    case 'SET_COMPANY':
        return { ...state, company: action.payload };
    case 'SET_RECOMMENDED_AGE':
        return { ...state, recommendedAge: action.payload };
    default:
        return state;
    }
};

export const ShopContextProvider = (props: ShopContextProviderProps) => {
    const [userList, setUserList] = useState<any[]>([])

    const [loggedUser, setLogedUser] = useState({
        email: "",
        password: ""
    });

    const loged = () => {
        const userEmail: string | null = localStorage.getItem('loged user');
        if (userEmail){
        setButtonText(userEmail.replace(/"/g, ''))}
    }
    useEffect(() => loged(),
    [])

    const getDefaultCart = (): CartItems => {
        let cart: CartItems = {};
        let savedCartItems = localStorage.getItem("Cart");
        if (savedCartItems) {
            return (JSON.parse(savedCartItems))
        } else {
        for (let i = 0; i < featuredProducts.length; i++){
            let pId = featuredProducts[i].productId;
            cart[pId] = 0;
        }
        return cart}
    };

    const [buttonText, setButtonText] = useState("Log In");

    const handleLoged = (user: any) => {
        setLogedUser({
            email: user.email,
            password: user.password
        });
    }
    const updateButtonText = (text: string) => {
        setButtonText(text);
    };
    const logOut = useCallback(() => {
        setButtonText("Log In");
        localStorage.removeItem("isLoged");
        localStorage.removeItem("token");
        localStorage.removeItem("loged user");
        localStorage.removeItem("Cart");
        setIsLoged(false);
        setLogedUser({
            email: '',
            password: '',
        })
    }, [])

    const [cartItems, setCartItems] =useState<CartItems>(getDefaultCart());
    const [openModal, setOpenModal] = useState(false)
    const toggleModal = () => {
        setOpenModal(!openModal);
    }
    const closeModal = () => {
        setOpenModal(false);
    }
    useEffect(() => {
        localStorage.setItem('Cart', JSON.stringify(cartItems));
        }, [cartItems]);

    const getTotalItems = () => {
        let total = 0;
        for (const item in cartItems) {
            total += cartItems[item];
        }
        return total;

    }
    const getTotalCartAmmount = () => {
        let totalAmmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0){
                let itemInfo = featuredProducts.find((product) => product.productId === item);
                totalAmmount += cartItems[item] * itemInfo!.price;
            }
        }
        return totalAmmount.toFixed(2);
    }
    const addToCart = useMemo( () =>(id: string) => {
        setCartItems((prev) => ({ ...prev, [id]: prev[id] + 1  }));
    }, [cartItems])

    const removeFromCart = (id: string) => {
        setCartItems((prev) => {
            if (prev[id] > 0) {
                return { ...prev, [id]: prev[id] - 1};
            }
            return prev;
        });
    };
    const updateCartItemCount = (newAmmount:number, id: string) => {
        setCartItems((prev) => ({ ...prev, [id]: newAmmount }));
    }

    const initialState = { genre: '', company: '', recommendedAge: '' };
    const [state, dispatch] = useReducer(reducer, initialState);

    const setGenre = (genre: string) => {
        dispatch({ type: 'SET_GENRE', payload: genre });
    };
    const setCompany = (company: string) => {
        dispatch({ type: 'SET_COMPANY', payload: company });
    };
    const setRecommendedAge = (age: string) => {
        dispatch({ type: 'SET_RECOMMENDED_AGE', payload: age });
    };

    const [isLoged, setIsLoged] = useState((localStorage.getItem('isLoged') == 'true') ? true : false)

    const contextValue: ShopContextValue = {
        cartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmmount,
        getTotalItems,
        updateCartItemCount,
        openModal,
        toggleModal,
        closeModal,
        buttonText,
        updateButtonText,
        logOut,
        loggedUser,
        handleLoged,
        userList,
        setUserList,
        state,
        setGenre,
        setCompany,
        setRecommendedAge,
        isLoged,
        setIsLoged
    }
    return (
        <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
    );
}
