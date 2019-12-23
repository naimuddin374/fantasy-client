import { SET_ROOM_RESULT, SET_ROOM_IN_CART } from '../actions/types'

const init = {
    rooms: {},
    booking: {},
    searchData: {},
    actionStatus: false
}

const roomReducer = (state = init, action) => {
    switch (action.type) {
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
        default:
            return state
    }
}
export default roomReducer
