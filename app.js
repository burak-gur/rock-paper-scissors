const coice=["Rock","Paper","Scissors"];

let a=Math.floor(Math.random()*coice.length);

function getComputerChoice(){
return(coice[a])
}

let playerSelection = prompt("Your Turn! Rock, Paper or Scissors?","Rock, Paper or Scissors?");

playerSelection = (playerSelection.toUpperCase()[0] + playerSelection.slice(1));

function playRound(playerSelection,getComputerChoice)
{
if((getComputerChoice()=="Paper"&&playerSelection=="Rock"))
{
    return("computer wins");
}
else
{
    return("human wins");
}
}

console.log("computers choice: "+ getComputerChoice());
console.log("User choice: ", playerSelection);
console.log(playRound(playerSelection,getComputerChoice));





//1. create an array that contains (rock, paper and scissors)

//2. create function that generates random number between 0 - 2 and use it with array that you create

//Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"   **Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).
