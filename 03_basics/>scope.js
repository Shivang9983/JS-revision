//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    console.log("INNER: ", a);
    
}



 console.log(a);
 console.log(b);
 console.log(c);

function one(){
    const username = "Shivang"

    function two(){
        const website = "github"
        console.log(username);
    }
     console.log(website);

     two()

}
one()


if (true) {
    const username = "Shivang"
    if (username === "Spider") {
        const website = " youtube"
         console.log(username + website);
    }
    console.log(website);
}

console.log(username);


console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5)
const addTwo = function(num){
    return num + 2
}

// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('Avenger')



