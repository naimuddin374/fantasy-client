export const textLimit = (text, limit = 100) => {
    if (!text) {
        return null
    }
    if (text.length > limit) {
        return text.substring(0, limit) + "..."
    }
    return text
}
export const getItemPrice = (adult_quantity, kids_quantity, price, discount_price) => {
    let tPrice = 0
    if (adult_quantity > 0) {
        if (discount_price !== null) {
            tPrice = tPrice + (adult_quantity * discount_price)
        } else {
            tPrice = tPrice + (adult_quantity * price)
        }
    }
    if (kids_quantity > 0) {
        if (discount_price !== null) {
            tPrice = tPrice + (kids_quantity * discount_price)
        } else {
            tPrice = tPrice + (kids_quantity * price)
        }
    }
    return tPrice
}
export const priceCal = (price, vat, discount) => {
    let p = price - (price * discount) / 100;
    return Math.floor(p + (p * vat) / 100);
}