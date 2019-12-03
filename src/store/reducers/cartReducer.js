import { ADD_TO_CART } from '../actions/types'

const init = {
    rides: {},
    resorts: {}
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
        default:
            return state
    }
}
export default cartReducer
