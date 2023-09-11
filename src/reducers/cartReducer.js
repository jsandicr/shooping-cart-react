export const initialState =  JSON.parse(window.localStorage.getItem('cart')) || [];

export const CART_ACTIONS = {
    ADD_TO_CART: 'ADD_TO_CART',
    REMOVE_FROM_CART: 'REMOVE_FROM_CART',
    CLEAR_CART: 'CLEAR_CART'
}

const updateLocalStorage = (cart) => {
    window.localStorage.setItem('cart', JSON.stringify(cart))
}

export const cartReducer = (state, action) => {

    const { type, payload } = action 
    const { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } = CART_ACTIONS
    switch(type){
        case ADD_TO_CART:{
            const { id } = payload
            const productInCartId = state.findIndex(item => item.id === id)

            if(productInCartId >= 0){
                const newState = [
                    ...state.slice(0, productInCartId),
                    { ...state[productInCartId], quantity: state[productInCartId].quantity + 1 },
                    ...state.slice(productInCartId + 1)
                ]

                updateLocalStorage(newState)
                return newState
            }

            const newState = [
                ...state,
                {
                  ...action.payload,
                  quantity: 1
                }
            ]
        
            updateLocalStorage(newState)
            return newState
        }

        case REMOVE_FROM_CART: {
            const { id } = payload
            const newState = state.filter(item => item.id !== id)
            updateLocalStorage(newState)
            return newState
        }

        case CLEAR_CART: {
            if(state.length===0) return
            updateLocalStorage(initialState)
            return initialState
        }
    }

    return state
}