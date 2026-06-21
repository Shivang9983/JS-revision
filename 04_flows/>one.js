if
const isUserloggedIn = true
const temperature = 41

if ( temperature === 40 ){
    console.log("less than 50");
} else {
    console.log("temperature is greater than 50");
}

console.log("Execute");
<, >, <=, >=, ==, !=, ===, !==

const score = 200

if (score > 100) {
    let power = "fly"
    console.log(`User power: ${power}`);
}

console.log(`User power: ${power}`);


const balance = 1000

if (balance > 500) console.log("test"),console.log("test2");

if (balance < 500) {
    console.log("less than 500");
} else if (balance < 750) {
    console.log("less than 750");
    
} else if (balance < 900) {
    console.log("less than 750");
    
} else {
    console.log("less than 1200");

}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}

// core example


let role = "admin";

switch (role) {
  case "guest":
    console.log("Read-only access.");
    break;
  case "admin":
    console.log("Full access granted."); // This block executes
    break; // Prevents "fall-through" execution into the next case
  default:
    console.log("Access denied.");
}



// =========== hard example in control flows ===========

// Mock database of items to purchase
const shoppingCart = [
  { id: "p1", name: "Laptop", price: 1200, inStock: true },
  { id: "p2", name: "Mouse", price: 25, inStock: false }, // Will trigger a 'continue'
  { id: "p3", name: "Monitor", price: 300, inStock: true },
  { id: "p4", name: "Invalid Item", price: -5, inStock: true } // Will trigger a 'break'
];

async function processCheckout(user) {
  let totalCost = 0;
  console.log(`Starting checkout for: ${user.name}`);

  try {
    // 1. Initial Gatekeeper Conditional
    if (!user.isLoggedIn) {
      throw new Error("Authentication required.");
    }

    // 2. Loop through cart items
    for (const item of shoppingCart) {
      
      // Control Modifier: Skip out-of-stock items, keep processing others
      if (!item.inStock) {
        console.warn(`Skipped ${item.name}: Out of stock.`);
        continue; 
      }

      // Control Modifier: Critical error safely aborts the whole loop
      if (item.price <= 0) {
        console.error(`Critical error: Invalid price for ${item.name}.`);
        break; 
      }

      // Nested Conditional for Premium Discounts
      let finalPrice = item.price;
      if (user.isPremium) {
        if (item.price > 500) {
          finalPrice *= 0.9; // 10% off expensive items
        } else {
          finalPrice *= 0.95; // 5% off cheaper items
        }
      }

      totalCost += finalPrice;
      console.log(`Added ${item.name}: $${finalPrice.toFixed(2)}`);
    }

    // 3. Final Evaluation Conditional
    if (totalCost === 0) {
      console.log("Checkout cancelled. No valid items processed.");
    } else if (user.balance < totalCost) {
      console.log(`Declined: Insufficient funds. Need $${totalCost.toFixed(2)}`);
    } else {
      user.balance -= totalCost;
      console.log(`Success! Order total: $${totalCost.toFixed(2)}. New Balance: $${user.balance.toFixed(2)}`);
    }

  } catch (error) {
    // Error Control Flow execution path
    console.error(`Checkout failed execution: ${error.message}`);
  }
}

// Execution Mock
const customer = { name: "Alice", isLoggedIn: true, isPremium: true, balance: 1500 };
processCheckout(customer);
