let userScore = 0;
let computerScore = 0;

// Selecting Elements
const userScoreEl = document.querySelector("#user-score");
const computerScoreEl = document.querySelector("#computer-score");

const scoreBoardEl = document.querySelector(".score-board");
const messageEl = document.querySelector(".message");

// Even listener for choices
// Leveraging event delegation

document.querySelector(".choices").addEventListener("click", ({ target }) => {
    // Filtering valid clicks [1st checks div or 2nd checks img]
    if (target.className === "choice" || target.tagName === "IMG") {
        // Checking rock [1st checks div or 2nd checks img]
        if (target.id === "rock" || target.alt === "rock") {
            game("rock");
        }
        // Checking scissors [1st checks div or 2nd checks img]
        else if (target.id === "paper" || target.alt === "paper") {
            game("paper");
        }
        // If both of them failed then obviously it's scissors
        else {
            game("scissors");
        }
    }
});

function game(userChoice) {
    const computerChoice = getComputerChoice();
    console.log("Computer choice: " + computerChoice + " Your Choice: " + userChoice);

    // If choices are equal
    if (userChoice === computerChoice) {
        console.log("Draw!");
    }

    // Checking for 6 entangled cases
    // In which 3 user wins and 3 user loses
    switch (userChoice + computerChoice) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            console.log("You won");
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            console.log("You lost");
    }
}

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    // Random index between 0 to 2
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}
