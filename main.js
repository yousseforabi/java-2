// Ask the user to enter a price
let enterPrice = prompt('$','49,99');

// Convert the price to a number and apply the 10% discount
console.log("$"+"49,99")
let price = parseFloat(enterPrice);

// Calculate the discounted price and display it
let discountPrice = price * 0.9;

// Display the discounted price rounded to the nearest cent
console.log("New Price= $" + discountPrice);


