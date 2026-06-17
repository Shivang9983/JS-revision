// 1. Creating an Array using bracket literal syntax
const fruits = ['Apple', 'Banana', 'Orange'];

// 2. Accessing elements using zero-based indexing
console.log(fruits[0]); // Output: 'Apple' (First item)
console.log(fruits[1]); // Output: 'Banana'

// 3. Finding the size of the array
console.log(fruits.length); // Output: 3

// 4. Modifying an existing item
fruits[1] = 'Mango'; // Changes 'Banana' to 'Mango'

// 5. Adding an item to the end of the array
fruits.push('Grapes'); 
console.log(fruits); // Output: ['Apple', 'Mango', 'Orange', 'Grapes']

// 6. Removing the last item from the array
const lastFruit = fruits.pop(); 
console.log(lastFruit); // Output: 'Grapes'

// A new phase


const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Shivang"))
console.log(Array.from("shivang"))
console.log(Array.from({name: "shivang"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
