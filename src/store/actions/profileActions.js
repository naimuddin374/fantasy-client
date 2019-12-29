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
