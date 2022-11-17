let computerScore = 0;
let humanScore = 0;

function getComputerChoice () {
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice == 0) {return ("rock");}
    else if (computerChoice == 1) {return("paper");}
    else {return("scissors");}
}

function playRound (playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "rock"){
        return ("tie");
    }
    else if (playerSelection == "rock" && computerSelection == "paper"){
        computerScore += 1;
        return ("point for computer, paper beats rock"); 
    }
    else if (playerSelection == "rock" && computerSelection == "scissors"){
        humanScore +=1;
        return ("point for you, rock beats scissors");
    }
    else if (playerSelection == "paper" && computerSelection == "scissors"){
        computerScore += 1;
        return ("point for computer, scissors beats paper");
    }
    else if (playerSelection == "paper" && computerSelection == "rock"){
        humanScore +=1;
        return ("point for you, paper beats rock");
    }
    else if (playerSelection == "paper" && computerSelection == "paper"){
        return ("tie");
    }
    else if (playerSelection == "scissors" && computerSelection == "paper"){
        humanScore +=1;
        return ("point for you, sissors beats paper");
    }
    else if (playerSelection == "scissors" && computerSelection == "rock"){
        computerScore += 1;
        return ("point for computer, rock beats scissors");
    }
    else if (playerSelection == "scissors" && computerSelection == "scissors"){
        return ("tie");
    }
}

function game () {
    for (let i = 0; i < 5; i++ ) {
        let playerSelection =  prompt("Choose rock, paper or scissors!");
        const computerSelection = getComputerChoice();
        playRound(playerSelection,computerSelection);
        console.log ("computerScore je", computerScore);
        console.log ("humanScore je", humanScore);
    }
}
game ();
