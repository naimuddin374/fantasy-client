import { SET_MESSAGE, API_URL, SET_ROOM_RESULT, SET_ROOM_IN_CART } from './types'
import Axios from 'axios'

export const storeRoomBooking = (data, history, roomData) => dispatch => {
    Axios.post(`${API_URL}api/room-booking`, data)
        .then(res => {
            let bookingData = [{ ...roomData, booking_id: res.data.booking_id }]
            localStorage.setItem('booking_data', JSON.stringify(bookingData))
            dispatch({
                type: SET_ROOM_IN_CART,
                payload: bookingData
            })
            dispatch({
                type: SET_MESSAGE,
                payload: {
                    message: res.data.message,
                    type: 'success',
                }
            })
            history.push('/checkout')
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
export const searchRoom = data => dispatch => {
    Axios.post(`${API_URL}api/room-search`, data)
        .then(res => {
            dispatch({
                type: SET_ROOM_RESULT,
                payload: {
                    rooms: res.data,
                    searchData: data
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

export const setRoom = data => dispatch => {
    dispatch({
        type: SET_ROOM_RESULT,
        payload: {
            rooms: data,
            searchData: {}
        }
    })
}