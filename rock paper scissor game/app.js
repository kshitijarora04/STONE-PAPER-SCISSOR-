let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genComputerChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    msg.innerText = "Game was draw!!Play Again.";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin === true) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win!! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    //Generate computer choice -> moudlar way of programming
    const compChoice = genComputerChoice();

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            //scissors,paper
            if (compChoice === "paper") {
                userWin = false;
            } else {
                userWin = true;
            }
        } else if (userChoice === "paper") {
            //rock,scissor
            if (compChoice === "scissors") {
                userWin = false;
            } else {
                userWin = true;
            }
        } else {
            //rock,paper
            if (compChoice === "rock") {
                userWin = false;
            } else {
                userWin = true;
            }
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
