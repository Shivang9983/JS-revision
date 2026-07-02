console.log("     * ");
console.log("    * *");
console.log("   * * *");
console.log("  * * * *");
console.log(" * * * * *");


     *
    * *
   * * *
  * * * *
 * * * * *

console.log(" * ");
console.log(" * *");
console.log(" * * *");
console.log(" * * * *");
console.log(" * * * * *");

* 
* * 
* * * 
* * * * 
* * * * * 

    
// pattern == 1
    
  let Prompt = require('prompt-sync')();
let a = Number(Prompt("enter your Number: "));

for (let i = 1; i<=a; i++){
    for (let j = 1; j<=a; j++){
        process.stdout.write("* ");
    }
    console.log();
}

// pattern == 2

let Prompt = require('prompt-sync')();
let a = Number(Prompt("enter your Number: "));

for (let i = 1; i<=a; i++){
    for (let j = 1; j<=i; j++){
        process.stdout.write("* ");
    }
    console.log();
}


