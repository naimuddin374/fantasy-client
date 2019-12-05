import { SET_MESSAGE, API_URL, SET_ROOM_RESULT } from './types'
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
export const searchRoom = data => dispatch => {
    Axios.post(`${API_URL}api/room-search`, data)
        .then(res => {
            dispatch({
                type: SET_ROOM_RESULT,
                payload: res.data
            })
        })
        .catch(err => {
            console.log(err.response.data)
            dispatch({
                type: SET_MESSAGE,
                payload: {
                    message: err.response.data,
                    type: 'error',
                }
            })
        })
}

export const setRoom = data => dispatch => {
    dispatch({
        type: SET_ROOM_RESULT,
        payload: data
    })
}