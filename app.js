let userScore = 0;
let computerScore = 0;

// Selecting Elements
const userScoreEl = document.querySelector("#user-score");
const computerScoreEl = document.querySelector("#computer-score");

const scoreBoardEl = document.querySelector(".score-board");
const messageEl = document.querySelector(".message p");

const rockEl = document.querySelector("#rock");
const paperEl = document.querySelector("#paper");
const scissorsEl = document.querySelector("#scissors");

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
    // If choices are equal
    if (userChoice === computerChoice) {
        draw(userChoice, computerChoice);
    }

    // Checking for 6 entangled cases
    // In which 3 user wins and 3 user loses
    switch (userChoice + computerChoice) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            win(userChoice, computerChoice);
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            lose(userChoice, computerChoice);
            break;
    }
}

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    // Random index between 0 to 2
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function win(userChoice, computerChoice) {
    userScore++;
    userScoreEl.textContent = userScore;
    computerScoreEl.textContent = computerScore;
    messageEl.innerHTML = `
                            ${userChoice.toUpperCase()}<sub>user</sub>
                             beats ${computerChoice.toUpperCase()}<sub>computer</sub>. You win! 🔥
                             `;
    // Adding a class and removing after 300ms
    document.querySelector(`#${userChoice}`).classList.add("win");
    setTimeout(() => {
        document.querySelector(`#${userChoice}`).classList.remove("win");
    }, 300);
}
function lose(userChoice, computerChoice) {
    computerScore++;
    userScoreEl.textContent = userScore;
    computerScoreEl.textContent = computerScore;
    messageEl.innerHTML = `
                            ${userChoice.toUpperCase()}<sub>user</sub>
                             loses to ${computerChoice.toUpperCase()}<sub>computer</sub>. You lose... 🤪
                             `;
    // Adding a class and removing after 300ms
    document.querySelector(`#${userChoice}`).classList.add("lose");
    setTimeout(() => {
        document.querySelector(`#${userChoice}`).classList.remove("lose");
    }, 300);
}
function draw(userChoice, computerChoice) {
    // Because it's draw we don't increment score
    // So we don't need to update HTML
    messageEl.innerHTML = `
                            ${userChoice.toUpperCase()}<sub>user</sub>
                             eqauls ${computerChoice.toUpperCase()}<sub>computer</sub>. It's a tie... 😨
                             `;
    document.querySelector(`#${userChoice}`).classList.add("draw");
    // Adding a class and removing after 300ms
    setTimeout(() => {
        document.querySelector(`#${userChoice}`).classList.remove("draw");
    }, 300);
}
