console.log("Hello, World!");
// I was gonna use arrays but I've challenged myself that I will not use them.
// The array method is more maintanable but for challenge's sake, let's go with conditionals.
// const itemChoices = ["rock", "paper", "scissors"];

//  I just realized I can refactor both these functions to just return the value themselves.

/*
let getComputerChoice = () => {
  const randomDecimal = Math.random();
  // I think this is technically bad practice? Clever code but unmaintainable.
  // if value is 1.00 - 0.67, return rock
  // elif value is 0.66 - 0.34, return paper
  // else return scissors

  return randomDecimal > 0.66
    ? "rock"
    : randomDecimal > 0.33
      ? "paper"
      : "scissors";
};

let getHumanChoice = () => {
  return prompt(
    "Please pick one: rock, paper or scissors",
    getComputerChoice(),
  );
};

*/

// This functoin is just so beatiful!!! SO SEXY!!!
const getComputerChoice = (randomDecimal = Math.random()) =>
  randomDecimal > 0.66 ? "rock" : randomDecimal > 0.33 ? "paper" : "scissors";

const getHumanChoice = () =>
  prompt("Please pick one: rock, paper or scissors", getComputerChoice());
