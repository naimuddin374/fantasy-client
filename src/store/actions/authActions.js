import { SET_MESSAGE, API_URL, SET_VALIDATION, SET_USER } from './types'
import Axios from 'axios'
import store from '../index';

// Registration 
export const Registration = (data, history) => dispatch => {
    Axios.post(`${API_URL}api/register`, data)
        .then(res => {
            dispatch({
                type: SET_VALIDATION,
                payload: {
                    validation: {},
                }
            })
            dispatch({
                type: SET_MESSAGE,
                payload: {
                    message: res.data.message,
                    type: 'success',
                }
            })
            history.push(`${process.env.PUBLIC_URL}/login`)
        })
        .catch(err => {
            if (err.response.data.validation) {
                dispatch({
                    type: SET_VALIDATION,
                    payload: {
                        validation: err.response.data.validation,
                    }
                })
            }
            dispatch({
                type: SET_MESSAGE,
                payload: {
                    message: err.response.data.message,
                    type: 'error',
                }
            })
        })
}


// Login
export const Login = (data, history) => dispatch => {
    let carts = store.getState().cart
    let cartRide = false
    let cartRoom = false
    if (Object.keys(carts.rides).length !== 0) {
        let cartRides = carts.rides.filter(item => item.isInCart)
        if (Object.keys(cartRides).length !== 0) {
            cartRide = true
        }
        if (!cartRide) {
            cartRoom = Object.keys(carts.booking).length !== 0
        }
    }
    Axios.post(`${API_URL}api/login`, data)
        .then(res => {
            let userAuth = { token: res.data.token, user: res.data.user }
            localStorage.setItem('auth', JSON.stringify(userAuth))
            dispatch({
                type: SET_USER,
                payload: userAuth
            })
            dispatch({
                type: SET_MESSAGE,
                payload: {
                    message: res.data.message,
                    type: 'success',
                }
            })
            if (cartRide || cartRoom) {
                history.push(`${process.env.PUBLIC_URL}/checkout`)
            } else {
                history.push(`${process.env.PUBLIC_URL}/`)
            }
        })
        .catch(err => {
            dispatch({
                type: SET_MESSAGE,
                payload: {
                    message: err.response.data.message,
                    type: 'error',
                }
            })
        })
}


// Logout
export const logout = history => dispatch => {
    localStorage.removeItem('auth')
    history.push(`${process.env.PUBLIC_URL}/login`)
    window.location.reload();
    dispatch({
        type: SET_USER,
        payload: {
            token: {},
            user: {}
        }
    })
    dispatch({
        type: SET_MESSAGE,
        payload: {
            message: 'Logout Successful',
            type: 'success',
        }
    })
}

