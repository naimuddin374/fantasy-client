import * as Types from './types'
import Axios from 'axios'


// Store Action
export const storeAgent = data => dispatch => {
    Axios.post('/api/agents', data)
        .then(result => {
            dispatch({
                type: Types.SET_MESSAGE,
                payload: {
                    message: result.data.message,
                    date: result.headers.date,
                }
            })
        })
        .catch(error => {
            dispatch({
                type: Types.SET_MESSAGE,
                payload: {
                    message: error.response.data.message,
                    date: error.response.headers.date,
                }
            })
        })
}
