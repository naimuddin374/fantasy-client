import React from 'react';
import CurrencyFormat from 'react-currency-format';

export const textLimit = (text, limit = 100) => {
    if (!text) {
        return null
    }
    if (text.length > limit) {
        return text.substring(0, limit) + "..."
    }
    return text
}
export const getItemPrice = (quantity, price, discount_price) => {
    let tPrice = 0
    if (discount_price !== null) {
        tPrice = tPrice + (quantity * discount_price)
    } else {
        tPrice = tPrice + (quantity * price)
    }
    return tPrice
}
export const priceCal = (price = 0, vat = 0, discount = 0) => {
    let subTotal = price - (price * discount) / 100;
    return Math.floor(subTotal + (subTotal * vat) / 100)
}
export const priceFormat = price => {
    return <CurrencyFormat value={price} displayType={'text'} thousandSeparator={true} prefix={'৳'} />
}