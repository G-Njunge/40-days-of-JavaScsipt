function numberGuessing(){
    console.log("Welcome to the number guessing game!!")
    //ask the user for input (1-10)
    let userNumber;
    function userChoice(){
        const userInput = prompt(" Input a number from 1-10: ")
        if (userInput){
            userNumber = Number(userInput)
            if (!isNaN(userNumber )){
                (userNumber > 0 && userNumber <= 10) ? console.log("Input recorded") : userChoice()
            } else {
                console.log("Invalid input please input a number ");
                userChoice()
            }
        } else{
            let cancelChoice = prompt("You pressed cancel, would you like to exit the program yes/no?: ")
            if (cancelChoice){
                if (cancelChoice === "yes"){
                    throw new Error("thank you for your time!");
                } else if (cancelChoice == "no"){
                    userChoice()
                } else {
                    console.log("invalid input, please enter yes or no")
                } 
            } 
        }
    }

    //generate a random number 
    let numbers = Math.floor(Math.random()*10) + 1;
    
    let userTrial = 0
    while (userNumber !== numbers){
        if (userNumber < numbers){
            console.log("Your number is less than the magic number");
        } else{
            console.log("Your number is more than the magic number");
        }
        userTrial ++;
        userChoice()  
    }
    console.log(`You have figured the number!!\nIt is ${numbers}\nTotal trials ${userTrial}`)
    // }
}
numberGuessing()



