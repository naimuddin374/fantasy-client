import { API_URL, SET_MESSAGE } from './types';
import Axios from 'axios'

// Update profile picture 
export const storeSubscribe = data => dispatch => {
    Axios.post(`${API_URL}api/subscribe/`, data)
        .then(res => {
            dispatch({
                type: SET_MESSAGE,
                payload: {
                    message: 'Thank you for connected with us.',
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