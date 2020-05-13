import { ADD_TO_CART, SET_ROOM_RESULT, SET_ROOM_IN_CART, PAYMENT_SUCCESS, SET_EXPECTED_DATE } from '../actions/types'

const init = {
    rides: {},
    rooms: {},
    booking: {},
    searchData: {},
    expectedDate: null
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
                    rooms: action.payload.rooms,
                    searchData: action.payload.searchData,
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
        case SET_EXPECTED_DATE:
            {
                return {
                    ...state,
                    expectedDate: action.payload,
                }
            }
        default:
            return state
    }
}
export default cartReducer
