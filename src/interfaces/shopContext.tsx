import { ReactNode } from "react";
export interface ShopContextValue {
    cartItems: CartItems;
    addToCart: (id: string) => void;
    removeFromCart: (id: string) => void;
    getTotalCartAmmount: () => number | string;
    getTotalItems: () => number;
    updateCartItemCount: (newAmmount:number, id: string) => void;
    openModal: boolean;
    toggleModal: () => void;
    closeModal: () => void;
}
export interface ShopContextProviderProps {
    children: ReactNode;
};

export interface CartItems  { [key: string]: number};
