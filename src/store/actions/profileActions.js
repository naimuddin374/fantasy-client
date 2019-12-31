import { SET_MESSAGE, API_URL } from './types'
import Axios from 'axios'

// Update profile picture 
export const updateProfilePhoto = (data, id) => dispatch => {
    Axios.put(`${API_URL}api/update-profile-photo/${id}`, data)
        .then(res => {
            dispatch({
                type: SET_MESSAGE,
                payload: {
                    message: 'Update successful',
                }
            })
        })
        .catch(err => {
            dispatch({
                type: SET_MESSAGE,
                payload: {
                    message: err.response.data,
                    type: 'error',
                }
            })
        })
}


// Update profile info
export const updateProfile = (data, id) => dispatch => {
    Axios.put(`${API_URL}api/update-profile/${id}`, data)
        .then(res => {
            dispatch({
                type: SET_MESSAGE,
                payload: {
                    message: 'Update successful',
                }
            })
        })
        .catch(err => {
            dispatch({
                type: SET_MESSAGE,
                payload: {
                    message: err.response.data,
                    type: 'error',
                }
            })
        })
}

// Forgot Password
export const forgotPassword = (data, history) => dispatch => {
    Axios.post(`${API_URL}api/forgot-password`, data)
        .then(res => {
            dispatch({
                type: SET_MESSAGE,
                payload: {
                    message: res.data.message,
                    type: Number(res.data.type) === 1 ? 'success' : 'error',
                }
            })
            Number(res.data.type) === 1 &&
                history.push(`${process.env.PUBLIC_URL}/set-password`)
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


// Set New Password
export const setPassword = (data, history) => dispatch => {
    Axios.post(`${API_URL}api/set-password`, data)
        .then(res => {
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
            console.log(err.response)
            dispatch({
                type: SET_MESSAGE,
                payload: {
                    message: err.response.data.message,
                    type: 'error',
                }
            })
        })
}