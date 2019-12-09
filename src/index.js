import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import { ADD_TO_CART, SET_USER, SET_ROOM_IN_CART } from './store/actions/types';

let cart = localStorage.getItem('cart_item')
let token = localStorage.getItem('auth_token')
let booking = localStorage.getItem('booking_data')
if (cart) {
    store.dispatch({
        type: ADD_TO_CART,
        payload: JSON.parse(cart)
    })
}
if (token) {
    store.dispatch({
        type: SET_USER,
        payload: {
            token: JSON.parse(token)
        }
    })
}
if (booking) {
    store.dispatch({
        type: SET_ROOM_IN_CART,
        payload: JSON.parse(booking)
    })
}

ReactDOM.render(<Provider store={store}>
    <App />
</Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
