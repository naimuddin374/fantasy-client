import { SET_VALIDATION, SET_USER } from '../actions/types'

const init = {
    validation: {},
    time: {},
    token: null,
    user: {},
    isAuth: false,
}

const authReducer = (state = init, action) => {
    switch (action.type) {
        case SET_VALIDATION:
            {
                return {
                    ...state,
                    validation: action.payload.validation,
                    time: new Date().toLocaleString(),
                }
            }
        case SET_USER:
            {
                return {
                    ...state,
                    token: action.payload.token ? action.payload.token : null,
                    user: action.payload.user ? action.payload.user : {},
                    isAuth: action.payload.token ? action.payload.token : false,
                }
            }
        default:
            return state
    }
}
export default authReducer
