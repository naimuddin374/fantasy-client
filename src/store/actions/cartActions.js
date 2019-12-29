import { ADD_TO_CART, PAYMENT_SUCCESS, SET_MESSAGE, API_URL } from './types'
import { getItemPrice } from '../../util/helper'
import Axios from 'axios'

export const addToCart = data => dispatch => {
    localStorage.setItem('cart_item', JSON.stringify(data))
    dispatch({
        type: ADD_TO_CART,
        payload: data
    })
}

export const checkoutPayment = (rides, booking, auth, history) => dispatch => {
    let name = auth.full_name
    let email = auth.email
    let contactNo = auth.contact_no

    let totalPrice = 0
    // Rides Lists and price
    let rideLists = ''
    Object.keys(rides).length !== 0 &&
        rides.map((item, index) => {
            totalPrice = totalPrice + getItemPrice(item.quantity, item.price, item.discount_price)
            rideLists += `<h4 style="margin: 0;padding: 0;"><span style="float:left;">${index + 1}. ${item.title}</span><span style="float:right;">${getItemPrice(item.adult_quantity, item.kids_quantity, item.price, item.discount_price)}</span></h4>`
            return true
        })

    // Room booking Lists and price
    let roomLists = ''
    if (Object.keys(booking).length !== 0) {
        totalPrice = totalPrice + booking.totalPrice
        roomLists += `<hr/><h3>Room Information</h3><hr/><h4 style="margin: 0;padding: 0;"><span style="float:left;">${booking.title}</span><span style="float:right;">${booking.totalPrice}</span></h4>`
    }

    // Email body for admin 
    let emailBody = `<!DOCTYPE html>
<html lang="en" style="margin: 0;padding: 0;font-family: Montserrat;">
<head style="margin: 0;padding: 0;">
    <meta charset="UTF-8" style="margin: 0;padding: 0;">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" style="margin: 0;padding: 0;">
    <meta http-equiv="X-UA-Compatible" content="ie=edge" style="margin: 0;padding: 0;">
    <!-- google font-->
    <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700,900&display=swap" rel="stylesheet" style="margin: 0;padding: 0;">
    <title style="margin: 0;padding: 0;">Fantasy Kingdom</title>
</head>
<body style="margin: 0;padding: 0;font-family:Montserrat;">
    <div class="right-tab-content" style="margin: 0 auto;padding: 11px 34px;border: 1px solid #35ABA7;-webkit-border-radius: 10px;border-radius: 10px;width: 75%;position: relative;">
        <div class="shape-item" style="margin: 0;padding: 0;"></div>
        <h3 style="margin: 0;padding: 0;margin-bottom: 20px;font-size: 21px;font-weight: 600;text-align: center;">Customer Information</h3>
        <h4 style="margin: 0;padding: 0;">Name: ${name}</h4>
        <h4 style="margin: 0;padding: 0;">Email: ${email}</h4>
        <h4 style="margin: 0;padding: 0;">Contact Number: ${contactNo}</h4><br/>
        <hr class="margin-bottom" style="margin: 0;padding: 0;margin-bottom: 23px;">
        <h3 style="margin: 0;padding: 0;margin-bottom: 20px;font-size: 21px;font-weight: 600;text-align: center;">Rides&Room Information</h3>
        <div class="single-menu-cart" style="margin: 0;padding: 0;-webkit-display: flex;display: flex;-webkit-justify-content: space-between;justify-content: space-between;margin-bottom: 15px;">
            <div class="menu-item-name-list" style="margin: 0;padding: 0;">
                ${rideLists}
                ${roomLists}
            </div>
        </div>
        <hr class="margin-bottom" style="margin: 0;padding: 0;margin-bottom: 23px;">
        <div class="single-menu-cart" style="margin: 0;padding: 0;-webkit-display: flex;display: flex;-webkit-justify-content: space-between;justify-content: space-between;margin-bottom: 15px;">
            <div class="menu-item-name-list" style="margin: 0;padding: 0;">
                <h4 style="margin: 0;padding: 0;">Total: </h4>
            </div>
            <div class="delete-menu-cart" style="margin: 0;padding: 0;">
                <span style="margin: 0;padding: 0;cursor: pointer;font-weight: 700;color: #3a3a3a;"> ৳${totalPrice}</span>
            </div>
        </div>
    </div>
</body>
</html>`
    let postData = {
        booking,
        emailBody,
        rides: rides,
        userToken: auth.token,
        user: auth,
        totalPrice: totalPrice
    }
    Axios.post(`${API_URL}api/sales`, postData)
        .then(res => {
            console.log(res.data)
            // localStorage.removeItem("cart_item")
            // localStorage.removeItem("booking_data")
            dispatch({
                type: SET_MESSAGE,
                payload: {
                    message: "Purchase Successful"
                }
            })
            dispatch({
                type: PAYMENT_SUCCESS,
            })
            history.push('/')
        })
        .catch(err => console.log(err.response))

}