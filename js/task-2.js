/**
 * Get a total price message for order with delivery
 * @param {string} country - country of delivery
 * @param {number} price - total cost of the product
 * @param {number} deliveryFee - cost of delivery of product
 * @returns - message with a total price for order with delivery
 */
function getShippingMessage(country, price, deliveryFee) {
    return `Shipping to ${country} will cost ${price + deliveryFee} credits`;
}

console.log(getShippingMessage("Australia", 120, 50));
console.log(getShippingMessage("Germany", 80, 20));
console.log(getShippingMessage("Sweden", 100, 20));
