const user = {
    username: "shivang",
    price: 555,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

user.welcomeMessage()
user.username = "thor"
user.welcomeMessage()

console.log(this);


const bone =  () => {
    let username = "Shivang"
    console.log(this);
}


bone()

const addTwo = (num1, num2) => {
    return num1 + num2
}

const addTwo = (num1, num2) =>  num1 + num2

const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "Shivang"})


console.log(addTwo(3, 4))


const myArray = [2, 5, 3, 7, 8]

myArray.forEach()



const createUser = (id, name) => { id: id, name: name };


const createUser = (id, name) => ({ id: id, name: name });

console.log(createUser(1, "Alex")); 



class Counter {
  constructor() {
    this.count = 0;
    
  
    setInterval(function() {
      this.count++; // Error: Cannot read properties of undefined
    }, 1000);

    // Arrow function: 'this' lexically binds to the Counter instance
    setInterval(() => {
      this.count++;
      console.log(this.count); // Correctly increments
    }, 1000);
  }
}
