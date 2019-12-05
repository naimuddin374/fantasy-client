import { SET_MESSAGE, API_URL, SET_VALIDATION, SET_USER } from './types'
import Axios from 'axios'

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
export const Login = (data, history) => dispatch => {
    Axios.post(`${API_URL}api/login`, data)
        .then(res => {
            localStorage.setItem('auth_token', JSON.stringify(res.data.token))
            dispatch({
                type: SET_USER,
                payload: {
                    token: res.data.token,
                }
            })
            dispatch({
                type: SET_MESSAGE,
                payload: {
                    message: res.data.message,
                    type: 'success',
                }
            })
            history.push(`${process.env.PUBLIC_URL}/`)
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
export const logout = history => dispatch => {
    localStorage.removeItem('auth_token')
    history.push(`${process.env.PUBLIC_URL}/login`)
    window.location.reload();
    dispatch({
        type: SET_USER,
        payload: {
            token: {},
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