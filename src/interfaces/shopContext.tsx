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
    buttonText: string;
    updateButtonText: (text:string) => void
    logOut: () => void;
    loggedUser: any;
    handleLoged: (user:any) => any;
    userList: any[];
    setUserList: ([]:any) =>any
    state: any;
    setGenre: (genre: string) => void,
    setCompany: (company: string) => void ,
    setRecommendedAge: (age: string) => void,
    isLoged: boolean,
    setIsLoged: (input: boolean) => void

}
export interface ShopContextProviderProps {
    children: ReactNode;
};

export interface CartItems  { [key: string]: number};
