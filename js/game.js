function game() {
    do {
        let playerSelection = prompt("Select rock, paper, or scissors");
        let computerSelection = computerPlay();
        //console.log(computerSelection);
        console.log(playRound(playerSelection, computerSelection));
    } while (prompt("Continue? yes/no").toLowerCase() === "yes");
};

let computerPlay = () => {
    // 1 = rock, 2 = paper, 3 = scissors
    let selection = Math.floor(Math.random() * 3) + 1;
    //console.log(selection);
    switch (selection) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    };
};

function playRound(playerSelection, computerSelection) {
    // your code here!
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === "" || playerSelection === null || (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors")) {
        return "Your selection is invalid! Go home you loser!";
    };

    if (computerSelection === playerSelection) {
        return "You tied!";
    } else if ((computerSelection === "rock" && playerSelection === "scissors") || (computerSelection === "paper" && playerSelection === "rock") || (computerSelection === "scissors" && playerSelection === "paper")) {
        return `You Lose! ${ computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1) } beats ${ playerSelection }`;
    } else {
        return `You Win! ${ playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1) } beats ${ computerSelection }`;
    }
};
  
  