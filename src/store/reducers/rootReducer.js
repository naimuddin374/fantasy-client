import { combineReducers } from 'redux';
import homeReducer from './homeReducer';
import cartReducer from './cartReducer'
import commonReducer from './commonReducer'
import authReducer from './authReducer'

const rootReducer = combineReducers({
    home: homeReducer,
    cart: cartReducer,
    common: commonReducer,
    auth: authReducer,
})
export default rootReducer
