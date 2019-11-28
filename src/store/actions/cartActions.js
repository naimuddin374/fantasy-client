import { ADD_TO_CART } from './types'

export const addToCart = data => dispatch => {
    localStorage.setItem('cart_item', JSON.stringify(data))
    dispatch({
        type: ADD_TO_CART,
        payload: data
    })
}