// Day 1 mini project (about 2 hours)

// Shopping cart in the console:

// A cart array holds items with name, price, and quantity.
// Write addItem, removeItem, and getTotal.
// Adding an item already in the cart should raise its quantity, not create a duplicate.
// Edge cases to handle: removing an item that isn't there, and quantity of 0 or negative.
// Print a simple receipt: one line per item and a total.

// Real-life link: this is the logic behind every cart in a shopping app, and the "increase 
// quantity, don't duplicate" bug is a very common one.






// let cart = [{ name: "Ring", price: 250, quantity: 1 },
// { name: "Bracelete", price: 950, quantity: 2 },
// { name: "anklet", price: 500, quantity: 2 }
// ]

// // addItem 

// let addItem = (itemName, ItemPrice, itemQuantity) => {
//     if (itemQuantity <= 0) {
//         return "itemQuantity cannot be  empty or negative"
//     }
//     else {
//         // checking  duplicate 
//         const duplicateIndex = cart.findIndex(elem => elem.name === itemName)

//         if (duplicateIndex >= 0) {
//             cart[duplicateIndex].quantity = cart[duplicateIndex].quantity + itemQuantity
//         } else {
//             cart.push({ name: itemName, price: ItemPrice, quantity: itemQuantity })
//         }
//     }
// }


// addItem("Pendent", 450, 2);
// addItem("Ring", 250, 0);
// addItem("Ring", 250, 2);


// // removeItem 


// Job: take a product out of the cart completely.

// Requirements:

// If the item is in the cart, remove its whole row.
// If it isn’t there, print a message like "Pen is not in the cart" 
//  leave the cart unchanged. Use return to stop, as in addItem.

// let cart = [{ name: "Ring", price: 250, quantity: 1 },
// { name: "Bracelete", price: 950, quantity: 2 },
// { name: "anklet", price: 500, quantity: 2 }
// ]


// let removeItem = (itemName) => {
//     removeIndex = cart.findIndex((elem) => elem.name === itemName)
//     if(removeIndex >= 0){
//         cart.splice(removeIndex,1)
//     }else {
//         return `${itemName} is not in the cart`
//     }
// }

// console.log(removeItem("Ringo"))
// console.log(cart)


// getTotal()

// Job: return the total price of everything in the cart.

// Requirements:

// Each row contributes price × quantity.
// Return the number (don’t only print it), so other code can use it.
// An empty cart should give 0.

// Tool: reduce, the same shape as your stock-value one. Keep the 0
//  starting value, since without it an empty cart would crash.


// let cart = [{ name: "Ring", price: 250, quantity: 1 },
// { name: "Bracelete", price: 950, quantity: 2 },
// { name: "anklet", price: 500, quantity: 2 }
// ]

let cart = []
 
let total = (cart) => {
    return  cart.reduce((sum, elem) =>{ 
        return sum + (elem.price * elem.quantity) 
    },0)
}

// console.log(total(cart)) 
console.log(total(cart)) 