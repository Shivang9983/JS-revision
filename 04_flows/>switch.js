const month = "march"

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}


// core example in switch 


function analyzeServerResponse(response) {
  // Lexical scoping block for the entire switch
  switch (true) {
    // 1. Multiple range validations + nested data validation
    case (response.status >= 200 && response.status < 300):
      if (!response.data || Object.keys(response.data).length === 0) {
        return "Success status, but received an empty payload error.";
      }
      return `Success: Processing ${response.data.itemCount} items.`;

    // 2. Exact match check integrated alongside range parameters
    case (response.status === 401 || response.status === 403):
      return response.isTokenExpired 
        ? "Unauthorized: Token expired. Triggering silent refresh." 
        : "Forbidden: Insufficient account permissions.";

    // 3. Fall-through combined with inline logical evaluation
    case (response.status >= 400 && response.status < 500):
    case (response.status === 502): // Multi-tier match grouping
      console.warn("Client-side error or Bad Gateway encountered.");
      return `Failure: Request rejected with status ${response.status}.`;

    // 4. Fallback execution block
    default:
      return "Critical failure: Unknown internal server status.";
  }
}

// Test instances
console.log(analyzeServerResponse({ status: 200, data: {} })); 
// Output: Success status, but received an empty payload error.

console.log(analyzeServerResponse({ status: 401, isTokenExpired: true })); 
// Output: Unauthorized: Token expired. Triggering silent refresh.

console.log(analyzeServerResponse({ status: 404 })); 
// Output: Failure: Request rejected with status 404.




function configureUserAccess(role, department) {
  let accessLevel;

  switch (role.toLowerCase()) {
   
    case "admin":
    case "superuser":
    case "owner":
      accessLevel = "Full Root Access";
      break;

    
    case "manager":
      console.log(`Notification sent to ${department} head.`);
   
    case "employee":
    case "staff":
      accessLevel = "Standard Write Access";
      break;
   
    case "guest":
    case "visitor": {
      const expirationHours = 24; 
      accessLevel = `Temporary Read Access (${expirationHours}hr limit)`;
      break;
    }
 
    default:
      accessLevel = "No Access Permitted";
  }

  return accessLevel;
}

console.log(configureUserAccess("SuperUser", "IT")); 

console.log(configureUserAccess("Manager", "Engineering")); 

console.log(configureUserAccess("Guest", "Sales")); 


