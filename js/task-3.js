/**
 * Get total width of the element
 * @param {string} content - content width
 * @param {string} padding - value of horizontal padding for each side
 * @param {string} border - border thickness value for each side
 * @returns {number} - total width of the element
 */
function getElementWidth(content, padding, border) {
    return Number.parseFloat(content) + Number.parseFloat(padding) * 2 + Number.parseFloat(border) * 2;
}

console.log(getElementWidth("50px", "8px", "4px"));
console.log(getElementWidth("60px", "12px", "8.5px"));
console.log(getElementWidth("200px", "0px", "0px"));
