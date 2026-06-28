const readline = require('readline/promises');

async function shoppingCart() {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    const cart = [];
    let active = true;

    console.log("--- Shopping Cart App ---");
    console.log("Type 'exit' to finish adding items.\n");

    while (active) {
        let item = await rl.question("Enter item name: ");
        
        if (item.trim().toLowerCase() === 'exit') {
            active = false;
        } else if (item.trim() === "") {
            console.log("Item name cannot be empty!");
        } else {
            cart.push(item.trim());
            console.log(`Added: ${item}. Total items in cart: ${cart.length}`);
        }
    }

    console.log("\n--- Your Final Cart Summary ---");
    if (cart.length === 0) {
        console.log("Your cart is empty.");
    } else {
        cart.forEach((item, index) => console.log(`${index + 1}. ${item}`));
    }

    rl.close();
}

shoppingCart();
