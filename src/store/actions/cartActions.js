import { ADD_TO_CART, PAYMENT_SUCCESS, SET_MESSAGE, API_URL } from './types'
import { getItemPrice } from '../../util/helper'
import Axios from 'axios'

export const addToCart = data => dispatch => {
    localStorage.setItem('cart_item', JSON.stringify(data))
    dispatch({
        type: ADD_TO_CART,
        payload: data
    })
}

export const checkoutPayment = (rides, booking, userToken) => dispatch => {

    let totalPrice = 0
    // Rides Lists and price
    Object.keys(rides).length !== 0 &&
        rides.map(item => {
            totalPrice = totalPrice + getItemPrice(item.quantity, item.price, item.discount_price)
            return true
        })

    // Room booking Lists and price
    if (Object.keys(booking).length !== 0) {
        totalPrice = totalPrice + booking.totalPrice
    }

    let postData = {
        booking,
        rides,
        userToken,
        totalPrice
    }
    Axios.post(`${API_URL}api/sales`, postData)
        .then(res => {
            console.log('res', res.data)
            // dispatch({
            //     type: SET_MESSAGE,
            //     payload: {
            //         message: res.data.message
            //     }
            // })
            window.location.href = `${API_URL}payment?invoice=${res.data.invoice}`
        })
        .catch(err => {
            console.log(err.response)
            dispatch({
                type: SET_MESSAGE,
                payload: {
                    message: 'Server too busy, please try again later!',
                    type: 'error'
                }
            })
        })
}

export const paymentSuccess = () => dispatch => {
    localStorage.removeItem('cart_item')
    localStorage.removeItem('booking_data')
    dispatch({
        type: SET_MESSAGE,
        payload: {
            message: "Purchase Successful"
        }
    })
    dispatch({
        type: PAYMENT_SUCCESS,
    })
}

export const paymentFailed = () => dispatch => {
    dispatch({
        type: SET_MESSAGE,
        payload: {
            message: "Purchase Failed"
        }
    })
}