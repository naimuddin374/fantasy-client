import * as Types from '../actions/types'

const init = {
    dashboard: {}
}

const homeReducer = (state = init, action) => {
    switch (action.type) {
        case Types.SET_HOME_DATA:
            {
                return {
                    ...state,
                    dashboard: action.payload.dashboard,
                }
            }
        default:
            return state
    }
}
export default homeReducer
