import { ADD_TO_CART, SET_ROOM_RESULT, SET_ROOM_IN_CART, PAYMENT_SUCCESS } from '../actions/types'

const init = {
    rides: {},
    rooms: {},
    booking: {}
}

const cartReducer = (state = init, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            {
                return {
                    ...state,
                    rides: action.payload,
                }
            }
        case SET_ROOM_RESULT:
            {
                return {
                    ...state,
                    rooms: action.payload,
                }
            }
        case SET_ROOM_IN_CART:
            {
                return {
                    ...state,
                    booking: action.payload,
                }
            }
        case PAYMENT_SUCCESS:
            {
                return {
                    ...state,
                    rides: {},
                    rooms: {},
                    booking: {},
                }
            }
        default:
            return state
    }
}
export default cartReducer
