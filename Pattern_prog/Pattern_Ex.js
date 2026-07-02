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

  let Prompt = require('prompt-sync')();
let a = Number(Prompt("enter your Number: "));

for (let i = 1; i<=a; i++){
    for (let j = 1; j<=a; j++){
        process.stdout.write("* ");
    }
    console.log();
}


