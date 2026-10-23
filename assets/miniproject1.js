// Day 1 mini project (about 2 hours)

// Shopping cart in the console:

// A cart array holds items with name, price, and quantity.
// Write addItem, removeItem, and getTotal.
// Adding an item already in the cart should raise its quantity, not create a duplicate.
// Edge cases to handle: removing an item that isn't there, and quantity of 0 or negative.
// Print a simple receipt: one line per item and a total.

// Real-life link: this is the logic behind every cart in a shopping app, and the "increase 
// quantity, don't duplicate" bug is a very common one.






let cart = [{ name: "Ring", price: 250, quantity: 1 },
{ name: "Bracelete", price: 950, quantity: 2 },
{ name: "anklet", price: 500, quantity: 2 }
]

// addItem 

let addItem = (itemName, ItemPrice, itemQuantity) => {
    if (itemQuantity <= 0) {
        return "itemQuantity cannot be  empty or negative"
    }
    else {
        // checking  duplicate 
        const duplicateIndex = cart.findIndex(elem => elem.name === itemName)

        if (duplicateIndex >= 0) {
            cart[duplicateIndex].quantity = cart[duplicateIndex].quantity + itemQuantity
        } else {
            cart.push({ name: itemName, price: ItemPrice, quantity: itemQuantity })
        }
    }
}


addItem("Pendent", 450, 2);
addItem("Ring", 250, 0);
addItem("Ring", 250, 2);

