// //es5


customer = {
    name: "Rohan",
}

cart = {
    quantity: 5,
    product: "Antivirus",
    unitprice: 2000
}




// var message = "Hello " + customer.name + ",\nwant to buy " + cart.product + " for\na total of " + (cart.quantity * cart.unitprice) + " bucks?";

var message = `Hello ${customer.name}  want to buy ${cart.product} for a total of ${(cart.quantity * cart.unitprice)} bucks?`;
console.log(message);