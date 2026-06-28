const readline =require ('readline/promises');

async function main() {
  const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });


let name = await input.question('What is your name? ');
let age = await input.question('What is your age? ');

console.log(`Hello ${name},you are ${age},year old`);

input.close();

}

main();




