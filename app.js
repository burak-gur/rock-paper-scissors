// Computers Choice
const choice = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
  let randomIndex = Math.floor(Math.random() * (choice.length-1));
  return choice[randomIndex];
}

//Game

let userScore=0
let computerScore=0

function playRound(playerSelection,getComputerChoice)
    {
    if
    ((getComputerChoice()=="Paper"&&playerSelection=="Rock") || (getComputerChoice()=="Scissors"&&playerSelection=="Paper")||(getComputerChoice()=="Rock"&&playerSelection=="Scissors"))
    {
        computerScore += 1;
        return("You Lose! Paper beats Rock");
    }
    else{
        userScore += 1;
        return(`You Win! ${playerSelection} beats ${getComputerChoice()}`);
    } 
}

//Outputs
function conclusion(str){
let playerSelection=str;

const results = document.querySelector(".output")

results.textContent = "";

const para=document.createElement("p")
para.textContent=(playRound(playerSelection,getComputerChoice));
results.appendChild(para)

const para1=document.createElement("p")
para1.textContent=("User Score: "+ userScore)+"   ||   "+("Computer Score: "+computerScore);
results.appendChild(para1)
}

document.getElementById("Rock").addEventListener("click",()=> conclusion("Rock"));

document.getElementById("Paper").addEventListener("click",()=> conclusion("Paper"));

document.getElementById("Scissors").addEventListener("click",()=> conclusion("Scissors"));


/*
//Players Choice
let playerSelection = 
prompt("Your Turn! Rock, Paper or Scissors?","Rock, Paper or Scissors?");

playerSelection = (playerSelection.toUpperCase()[0] + playerSelection.slice(1));
*/



//1. create an array that contains (rock, paper and scissors)

//2. create function that generates random number between 0 - 2 and use it with array that you create

//Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"   **Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).
