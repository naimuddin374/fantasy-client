import { ADD_TO_CART, SET_ROOM_RESULT, SET_ROOM_IN_CART } from '../actions/types'

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
        default:
            return state
    }
}
export default cartReducer
