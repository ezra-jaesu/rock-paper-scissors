console.log("Hello World!");

let humanScore = 0;
let computerScore = 0;

// I was gonna use arrays but I've challenged myself that I will not use them.
// The array method is more maintanable but for challenge's sake, let's go with conditionals.

// This function is just so beatiful!!! SO SEXY!!!
const getComputerChoice = (randomDecimal = Math.random()) =>
    randomDecimal > 0.66 ? "rock" : randomDecimal > 0.33 ? "paper" : "scissors";

const getHumanChoice = (e) => {
    const humanChoice =
        e.target.id === "random" ? getComputerChoice() : e.target.id;

    const scoreContainer = document.querySelector("#scoreContainer");

    const message = document.querySelector("#message");
    message.innerText = playRound(humanChoice, getComputerChoice());

    scoreContainer.children[0].innerText = `Human: ${humanScore}`;
    scoreContainer.children[1].innerText = `Computer: ${computerScore}`;

    if (humanScore === 5) message.innerText = "You win the game!";
    if (computerScore === 5) message.innerText = "You lose the game!";
    if (humanScore === 5 || computerScore === 5) humanScore = computerScore = 0;
};

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
              : humanChoice === "scissors" && computerChoice === "rock"
                ? "lose"
                : humanChoice.length > computerChoice.length
                  ? "win"
                  : "lose";

    switch (result) {
        case "draw":
            return "It's a draw!!!";
        case "win":
            humanScore++;
            return `You win! ${humanChoice} beats ${computerChoice}.`;
        case "lose":
            computerScore++;
            return `You lose! ${computerChoice} beats ${humanChoice}.`;
    }
};

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const random = document.querySelector("#random");
const choices = document.querySelector("#choices");

[...choices.children].forEach((el) => {
    el.addEventListener("click", (e) => getHumanChoice(e));
});
