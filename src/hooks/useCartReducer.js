import { useReducer } from 'react'
import { cartReducer, CART_ACTIONS, initialState } from '../reducers/cartReducer'

export const useCartReducer = () => {
    const [ cart, dispatch ] = useReducer(cartReducer, initialState)

    const { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } = CART_ACTIONS

    const addToCart = (product) => dispatch({
        type: ADD_TO_CART,
        payload: product
    })

    const removeFromCart = (product) => dispatch({
        type: REMOVE_FROM_CART,
        payload: product
    })

    const clearCart = () => dispatch({
        type: CLEAR_CART
    })

    return ({ addToCart, removeFromCart, clearCart, cart })
}