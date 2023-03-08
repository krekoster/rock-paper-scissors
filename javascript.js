let computerScore = 0;
let humanScore = 0;
let playerChoice = "";
let playerSelection = 0;
let computerSelection = 0;
let statusMessage = "";

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice == 0) { return ("rock"); }
    else if (computerChoice == 1) { return ("paper"); }
    else { return ("scissors"); }
}
function startGame() {
    // let computerScore = 0;
    // let humanScore = 0;
    document.getElementById("popUpWindow").style.display = "none";
    statusMessage = "CHOOSE YOUR WEAPON!";
    document.getElementById("statusText").innerHTML = statusMessage;
    document.getElementById("resultText").innerHTML = humanScore + " : " + computerScore;
    playGame();
}
function playGame() {
    document.querySelector("#humanButtonRock").addEventListener("click", () => playRound("rock"));
    document.querySelector("#humanButtonPaper").addEventListener("click", () => playRound("paper"));
    document.querySelector("#humanButtonScissors").addEventListener("click", () => playRound("scissors"));
}
function playRound(playerSelection) {
    const computerSelection = getComputerChoice();
    if (playerSelection == "rock" && computerSelection == "rock") {
        document.getElementById("humanButtonRock").style.transform = "scale(1.3,1.3)";
        document.getElementById("compButtonRock").style.transform = "scale(1.3,1.3)";
        document.getElementById("compButtonRock").style.opacity = "1";
        statusMessage = "It's a tie!";
        setTimeout(processStatus, 200);
    }
    if (playerSelection == "rock" && computerSelection == "paper") {
        computerScore++;
        document.getElementById("humanButtonRock").style.transform = "scale(1.3,1.3)";
        document.getElementById("compButtonPaper").style.transform = "scale(1.3,1.3)";
        document.getElementById("compButtonPaper").style.opacity = "1";
        statusMessage = "Paper beats rock!";
        setTimeout(processStatus, 200);
    }
    if (playerSelection == "rock" && computerSelection == "scissors") {
        humanScore++;
        document.getElementById("humanButtonRock").style.transform = "scale(1.3,1.3)";
        document.getElementById("compButtonScissors").style.transform = "scale(1.3,1.3)";
        document.getElementById("compButtonScissors").style.opacity = "1";
        statusMessage = "Rock beats scissors!";
        setTimeout(processStatus, 200);
    }
    if (playerSelection == "paper" && computerSelection == "scissors") {
        computerScore++;
        document.getElementById("humanButtonPaper").style.transform = "scale(1.3,1.3)";
        document.getElementById("compButtonScissors").style.transform = "scale(1.3,1.3)";
        document.getElementById("compButtonScissors").style.opacity = "1";
        statusMessage = "Scissors beat paper!";
        setTimeout(processStatus, 200);
    }
    if (playerSelection == "paper" && computerSelection == "rock") {
        humanScore++;
        document.getElementById("humanButtonPaper").style.transform = "scale(1.3,1.3)";
        document.getElementById("compButtonRock").style.transform = "scale(1.3,1.3)";
        document.getElementById("compButtonRock").style.opacity = "1";
        statusMessage = "Paper beats rock!";
        setTimeout(processStatus, 200);
    }
    if (playerSelection == "paper" && computerSelection == "paper") {
        document.getElementById("humanButtonPaper").style.transform = "scale(1.3,1.3)";
        document.getElementById("compButtonPaper").style.transform = "scale(1.3,1.3)";
        document.getElementById("compButtonPaper").style.opacity = "1";
        statusMessage = "It's a tie!";
        setTimeout(processStatus, 200);
    }
    if (playerSelection == "scissors" && computerSelection == "paper") {
        humanScore++;
        document.getElementById("humanButtonScissors").style.transform = "scale(1.3,1.3)";
        document.getElementById("compButtonPaper").style.transform = "scale(1.3,1.3)";
        document.getElementById("compButtonPaper").style.opacity = "1";
        statusMessage = "Scissors beat paper!";
        setTimeout(processStatus, 200);
    }
    if (playerSelection == "scissors" && computerSelection == "rock") {
        computerScore++;
        document.getElementById("humanButtonScissors").style.transform = "scale(1.3,1.3)";
        document.getElementById("compButtonRock").style.transform = "scale(1.3,1.3)";
        document.getElementById("compButtonRock").style.opacity = "1";
        statusMessage = "Rock beats scissors!";
        setTimeout(processStatus, 200);
    }
    if (playerSelection == "scissors" && computerSelection == "scissors") {
        document.getElementById("humanButtonScissors").style.transform = "scale(1.3,1.3)";
        document.getElementById("compButtonScissors").style.transform = "scale(1.3,1.3)";
        document.getElementById("compButtonScissors").style.opacity = "1";
        statusMessage = "It's a tie!";
        setTimeout(processStatus, 200);
    }
}
function processStatus() {
    document.getElementById("statusText").innerHTML = statusMessage;
    setTimeout(processScore, 200);
}
function processScore() {
    document.getElementById("resultText").innerHTML = humanScore + " : " + computerScore;
    countRounds();
}
function countRounds() {
    if ((humanScore < 3) && (computerScore < 3)) {
        setTimeout(resetGui, 300);
    }
    else {
        setTimeout(gameOverMessage, 600);
    }
}
function gameOverMessage() {
    statusMessage = "game over!";
    document.getElementById("statusText").innerHTML = statusMessage;
    setTimeout(resetGui, 600);
    setTimeout(showPopupWindow, 1000);
}
function resetGui() {
    let buttonsClass = document.getElementsByClassName("buttons");
    for (let i = 0; i < buttonsClass.length; i++) {
        buttonsClass[i].style.transform = "";
        buttonsClass[i].style.opacity = "";
    }
}
function showPopupWindow() {
    document.getElementById("popUpWindow").style.display = "block";
    if (humanScore > computerScore) {
        statusMessage = "Human won!";
    }
    else {
        statusMessage = "Computer won!";
    }
    document.getElementById("statusText").innerHTML = statusMessage;
}
function fadeToBlack() {
    document.getElementById("popUpWindow").style.display = "none";
    document.body.style.backgroundColor = "#2e3840";
    document.getElementById("content").style.backgroundColor = "#2e3840";
    
    document.getElementById("status").style.backgroundColor = "#2e3840";
    document.getElementById("scoreTable").style.backgroundColor = "#2e3840";
    document.getElementById("buttonsHolder").style.backgroundColor = "#2e3840";
    // document.getElementsByTagName("body").style.backgroundColor= "#2e3840";

}

startGame();

