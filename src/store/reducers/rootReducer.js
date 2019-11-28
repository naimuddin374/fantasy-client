import { combineReducers } from 'redux';
import homeReducer from './homeReducer';
import cartReducer from './cartReducer'

const rootReducer = combineReducers({
    home: homeReducer,
    cart: cartReducer,
})
export default rootReducer
