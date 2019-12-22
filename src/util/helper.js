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
export const priceCal = (price, vat, discount) => {
    let p = price - (price * discount) / 100;
    return Math.floor(p + (p * vat) / 100);
}