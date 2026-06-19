
function sayMyName(){
    console.log("S");
    console.log("H");
    console.log("I");
    console.log("V");
    console.log("A");
    console.log("N");
    console.log("G");
}

sayMyName()

function addTwoNumbers(number1, number2){

    console.log(number1 + number2);
}

function addTwoNumbers(number1, number2){

    let result = number1 + number2
    return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

console.log("Result: ", result);



function loginUserMessage(username = "Cooper"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Shivang"))
console.log(loginUserMessage("Kuma"))


function calculateCartPrice(val1, val2, ...num1){
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000))


