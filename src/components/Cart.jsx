import { useId } from "react"
import { CartIcon, ClearCartIcon } from "./Icons"
import { useCart } from '../hooks/useCart'
import { CartItem } from "./CartItem"
import './Cart.css'

export const Cart = () => {
    const cartCheckboxId = useId()
    const { cart, addToCart, clearCart } = useCart()
    return(
        <>
            <label className="cart-button" htmlFor={cartCheckboxId}>
                <CartIcon />
            </label>
            <input id={cartCheckboxId} type="checkbox" hidden />

            <aside className="cart">
                <ul>
                    {
                        cart.map((product)=>{
                            return(
                                <CartItem
                                    key={product.id}
                                    addToCart={() => addToCart(product)}
                                    {...product}
                                />
                            )
                        })
                    }
                </ul>
                <button onClick={clearCart}>
                    <ClearCartIcon />
                </button>
            </aside>
        </>
    )
}