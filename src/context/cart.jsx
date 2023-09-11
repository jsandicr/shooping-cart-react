import { createContext } from "react";
import { useCartReducer } from "../hooks/useCartReducer";

export const CartContext = createContext()

export function CartProvider({children}){
    
    const { addToCart, removeFromCart, clearCart, cart } = useCartReducer()
    
    return(
        <CartContext.Provider value={{
            cart,
            addToCart,
            clearCart,
            removeFromCart
        }}>
            {children}
        </CartContext.Provider>
    )
}