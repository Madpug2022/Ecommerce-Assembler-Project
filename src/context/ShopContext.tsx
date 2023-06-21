import { createContext, useState, useEffect } from "react";
import { ShopContextValue, ShopContextProviderProps, CartItems } from  "../interfaces/shopContext"
import { featuredProducts } from '../assets/products.db'
export const ShopContext = createContext<ShopContextValue | null>(null);
const getDefaultCart =(): CartItems => {
    let cart: CartItems = {};
    const savedCartItems = localStorage.getItem("userCart");
        if (savedCartItems) {
            return (JSON.parse(savedCartItems))
        } else {
    for (let i = 0; i < featuredProducts.length; i++){
        let pId = featuredProducts[i].productId;
        cart[pId] = 0;
    }
    return cart}
}

export const ShopContextProvider = (props: ShopContextProviderProps) => {
    const [cartItems, setCartItems] =useState<CartItems>(getDefaultCart());

    useEffect(() => {localStorage.setItem('userCart', JSON.stringify(cartItems));}, [cartItems]);


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
    const addToCart = (id: string) => {
        setCartItems((prev) => ({ ...prev, [id]: prev[id] + 1  }));
        console.log(cartItems);
      };

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

    const contextValue: ShopContextValue = {cartItems, addToCart, removeFromCart, getTotalCartAmmount, getTotalItems, updateCartItemCount};
    return (
        <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
      );
}
