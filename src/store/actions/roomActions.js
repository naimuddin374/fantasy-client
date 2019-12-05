import { SET_MESSAGE, API_URL } from './types'
import Axios from 'axios'

export const storeRoomBooking = data => dispatch => {
    Axios.post(`${API_URL}api/room-booking`, data)
        .then(res => {
            dispatch({
                type: SET_MESSAGE,
                payload: {
                    message: res.data.message,
                    type: 'success',
                }
            })
        })
        .catch(err => {
            console.log(err.response.data)
            dispatch({
                type: SET_MESSAGE,
                payload: {
                    message: err.response.data.message,
                    type: 'error',
                }
            })
        })
}