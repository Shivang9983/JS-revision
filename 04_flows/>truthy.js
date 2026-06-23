const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}


falsy values

false, 0, -0, BigInt 0n, "", null, undefined, NaN

truthy values
"0", 'false', " ", [], {}, function(){}

if (userEmail.length === 0) {
    console.log("Array is empty");
}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
val1 = 5 ?? 10
val1 = null ?? 10
val1 = undefined ?? 15
val1 = null ?? 10 ?? 20


console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")



// core example 

function evaluateSystemState(config, InputPayload) {

  const flag1 = new Boolean(false); 
  const isFlag1Truthy = !!flag1; // Evaluates to true because all objects are truthy


  const emptyArray = [];
  const arrayIfCheck = emptyArray ? "Array is Truthy" : "Array is Falsy";
  const arrayLooseCheck = (emptyArray == false) ? "Equals False" : "Does Not Equal False";


  const timeoutSetting = InputPayload.timeout || 3000; // Overwrites intentional 0!
  const safeTimeoutSetting = InputPayload.timeout ?? 3000; // Preserves intentional 0


  const elementCount = 0;
  const renderMessage = elementCount && `<div>Found ${elementCount} items</div>`;

  return {
    isFlag1Truthy,       // true
    arrayIfCheck,        // "Array is Truthy"
    arrayLooseCheck,     // "Equals False"
    timeoutSetting,      // 3000 (Bug: 0 was overwritten)
    safeTimeoutSetting,  // 0 (Correct)
    renderMessage        // 0 (Bug: React/UI engines will literally render the number 0)
  };
}

// Execution
const userPayload = { timeout: 0 };
console.log(evaluateSystemState(true, userPayload));

