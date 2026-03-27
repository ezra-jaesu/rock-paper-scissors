console.log("Hello, World!");
let humanScore = 0;
let computerScore = 0;

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

const playRound = (humanChoice, computerChoice) => {
  // Making it case-sensitive
  humanChoice = humanChoice.toLowerCase();

  // Check for draws first
  // The number of cases are killing me aauuuuggghhhh
  // I actually have a tricky ahh idea lol
  // If you watch carefully, this almost encapsulates the whole game
  // scissors (7 char) > paper (5) > rock (4)
  // Except when
  // rock (4) > scissors (7)
  // To alleviate this, we check for that condition
  // Now we have two win conditions
  // Human plays Rock and Computer plays Scissors OR
  // Human plays something larger than what computer plays.
  // NOTE: The second condition only applies after excluding if player played rock
  //       since the only possible permutation there is h=rock and c=paper.

  const result =
    humanChoice === computerChoice
      ? "draw"
      : humanChoice === "rock" && computerChoice === "scissors"
        ? "win"
        : humanChoice.length > computerChoice.length && humanChoice !== 4
          ? "win"
          : "lose";

  switch (result) {
    case "draw":
      return "It's a draw!!!";
    case "win":
      humanScore++;
      return `You win! ${humanChoice} beats ${computerChoice}`;
    case "lose":
      computerScore++;
      return `You lose! ${computerChoice} beats ${humanChoice}`;
  }
};
