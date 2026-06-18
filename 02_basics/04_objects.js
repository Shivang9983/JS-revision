// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Butcher"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "shivang",
            lastname: "kuamr"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

{
    "name": "shivang",
    "coursename": "js in hindi",
    "price": "free"
}

[
    {},
    {},
    {}
]




const user = {
  firstName: 'spider',
  age: 30,
  isEmployee: true,
  // 2. Adding a Method (a function belonging to an object)
  greet: function() {
    console.log(`Hello, my name is ${this.firstName}`);
  }
};

// 3. Accessing properties using Dot Notation
console.log(user.firstName); // Output: 'spider'

// 4. Accessing properties using Bracket Notation (useful for dynamic keys)
const keyName = 'age';
console.log(user[keyName]); // Output: 30

// 5. Adding or updating properties
user.lastName = 'Doe';      // Adds a new property
user.age = 31;              // Updates an existing property

// 6. Deleting a property
delete user.isEmployee;

// 7. Calling the object's method
user.greet(); // Output: 'Hello, my name is spider
