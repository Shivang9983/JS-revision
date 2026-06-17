// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Shiavng",
    "full name": "Shivang kumar",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "shiavngkk@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "shiavngkk@gmail.com"
// Object.freeze(JsUser)
JsUser.email = "shiavngkk@gmail.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


// 1. Creating an Object using curly brace literal syntax
const user = {
  firstName: 'BUTCHER',
  age: 30,
  isEmployee: true,
  // 2. Adding a Method (a function belonging to an object)
  greet: function() {
    console.log(`Hello, my name is ${this.firstName}`);
  }
};

// 3. Accessing properties using Dot Notation
console.log(user.firstName); // Output: 'John'

// 4. Accessing properties using Bracket Notation (useful for dynamic keys)
const keyName = 'age';
console.log(user[keyName]); // Output: 30

// 5. Adding or updating properties
user.lastName = 'Doe';      // Adds a new property
user.age = 31;              // Updates an existing property

// 6. Deleting a property
delete user.isEmployee;

// 7. Calling the object's method
user.greet(); // Output: 'Hello, my name is John'
