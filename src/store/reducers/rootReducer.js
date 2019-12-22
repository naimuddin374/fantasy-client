import { combineReducers } from 'redux';
import homeReducer from './homeReducer';
import cartReducer from './cartReducer'
import commonReducer from './commonReducer'
import authReducer from './authReducer'
import roomReducer from './roomReducer'

const rootReducer = combineReducers({
    home: homeReducer,
    cart: cartReducer,
    common: commonReducer,
    auth: authReducer,
    room: roomReducer,
})
export default rootReducer
