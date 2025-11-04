// Error handling

//Parsing errpr- Syntax error hence the interpreter can't interpret
//Runtime error- Syntax is okay. There might be some values or condition that are not quite right
    //Exceptions ar run time errors that prevents the program from running 
        // .i.e Uncaught reference error, Uncaught typeerror, SyntaxError, EvalError, URIError

try{
    console.log("Everything is fine");
    abc;
} catch (err) {
    console.error("errooorr!");
    console.log(err.message);
    console.log(err.name)
    console.log(err.stack)
}

//throwing errors

function divideNumbers(a,b){
    try{
        if (b === 0){
            throw new Error("Division by zero is not allowed."); 
        }
    }catch (error){
        console.error("Got a Math error", error.message)
}
} 
divideNumbers(2,0)

//Re-throwing errors 

function validate(data){
    try{
        if (!data.username) throw new Error("Please input the username, it is mandatory");
    } catch (error){
        console.error(error.message)
        throw error //rethrow
    }
}
//catching the rethrown error
try{
    validate({username: ""})//calling the function with the rethrown error
} catch(error){
    console.error("error caught at upper level", error.message)
}finally{
    //runs code whether or not an error is found
}

//2. Write a function processPayment(amount) that checks
//  if the amount is positive and not exceeding balance. 
// If any condition fails, throw appropriate errors

function processPayment(amount){
    const balance = 500
    try{
        if (amount <= 0) throw new Error("The amount should be a positive number- greater than zero")
        if (amount > balance) throw new Error(" Insufficient funds, try a lower amount")
    } catch(error){
        console.error(error.message)
    }
}
processPayment(0.09)

// 3. Implement a custom error handling system for an e-commerce website
//  that categorizes errors as UserError PaymentError ServerError EmailError

function UserError(message){
    this.namer = "UserError";
    this.message = message;
    this.stack = new Error().stack;
}
UserError.prototype = Object.create(Error.prototype)

function PaymentError(message){
    this.namer = "PaymentError";
    this.message = message;
    this.stack = new Error().stack;
}
PaymentError.prototype = Object.create(Error.prototype)

function ServerError(message){
    this.namer = "UserError";
    this.message = message;
    this.stack = new Error().stack;
}
ServerError.prototype = Object.create(Error.prototype)

function EmailError(message){
    this.namer = "UserError";
    this.message = message;
    this.stack = new Error().stack;
}
EmailError.prototype = Object.create(Error.prototype)

function errorHandling(error){
    try{
        if (error == "Validation Error") throw new UserError("The input is invalid")
        if(error == "No @ symbol") throw new EmailError("Your email needs an @ symbol")
        if (error == "Server disconnection") throw new ServerError("Sorry we cannot connect to the server")
        if (error == "Unable to process payment") throw new PaymentError("Sorry we cannot process the payment")

        throw {namer:"Uknown", message:"Invalid error input" }

    
    } catch(err){
        console.error(err.message)
    } 
}
errorHandling("Validation Error")

// 4. Simulate an API call function fetchData(url). If the URL does not start with "https", throw an "Invalid URL" error.
//  Handle it using try...catch

function fetchData(url){
    try{
        const pattern = new RegExp("^https")
        if (!pattern.test(url)){
            throw new Error("Invalid URL")
        }else{
            console.log("proceed")
        }
    } catch(error){
        console.error(error.message)
    }
}
fetchData("httpkuuyo")

//5. Implement a custom error type ValidationError
// using constructor functions to handle form validation errors
function Username(message){
    this.message = message
}
function Age(message){
    this.message = message
}

function validateUser(userInput){
    try{
        if (!userInput.username) throw new Username("ValidationError: Username cannot be empty")
    } catch (error){
        console.error(error.message)
    }
    try{
        if (userInput.age < 0) throw new Age("Age must be a positive number")
    } catch (error){
        console.error(error.message)
    }
}
const userInput = { username: " l", age: -2 };
validateUser(userInput);

// 6. Write a function readFile(filePath) that simulates reading a file. 
// If the file does not exist (simulate with a condition),
//  throw a "File not found" error. Handle the error with try...catch. 
// Make sure you have code to handle releasing the IO resources
const fs = require('fs');
const { json } = require('stream/consumers');

function readFile(filePath){
    try{
        if (!fs.existsSync(filePath)) {
            throw new Error("File not found")
        } else{
            const openFile = fs.openSync(filePath,'r')
            const readfile = fs.readFileSync(openFile, 'utf-8')
        }
    } catch (error) {
        console.error(error.message)
    } finally{
        if (openFile !== undefined) fs.closeSync(openFile)
    }
}

// 7. Write a function parseJson(str) that takes a JSON string and tries to parse it using JSON.parse().
//  If parsing fails, catch the error and return "Invalid JSON"

//define func
function parseJson(str){
    try{
        return JSON.parse(str)
    } catch{
        return "Invalid JSON"
    }
}
