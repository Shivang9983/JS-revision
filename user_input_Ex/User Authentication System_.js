const readline = require('readline');


function getPassword(prompt) {
    return new Promise((resolve) => {
        const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
        process.stdout.write(prompt);
        
        let password = '';
        process.stdin.setRawMode(true); 


        process.stdin.on('data', (char) => {
            char = char.toString();
            
            if (char === '\n' || char === '\r') { // Enter key
                process.stdin.setRawMode(false);
                rl.close();
                console.log(); 
                resolve(password);
            } else if (char === '\u0003') { 

                process.exit();
            } else if (char === '\u0008' || char === '\x7f') { 
                if (password.length > 0) {
                    password = password.slice(0, -1);
                    process.stdout.write('\b \b'); 
                }
            } else {
                password += char;
                process.stdout.write('*'); 
            }
        });
    });
}

async function loginSystem() {
    const rl = require('readline/promises').createInterface({ input: process.stdin, output: process.stdout });
    
    const username = await rl.question("Enter Username: ");
    rl.close(); 
    
    const password = await getPassword("Enter Password: ");

   
    if (username === "Avenger" && password === "Avenger123") {
        console.log("\n Access Granted! Welcome to the secure dashboard.");
    } else {
        console.log("\n Access Denied! Invalid credentials.");
    }
}

loginSystem();
