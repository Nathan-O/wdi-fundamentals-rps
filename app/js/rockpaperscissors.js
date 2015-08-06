////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    move = move || getInput();
    return move;
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    move = move || randomPlay();
    return move;
}

function getWinner(playerMove,computerMove) {
    var winner;
   
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    while (playerMove === 'rock') {
        if (computerMove === 'rock') {
            winner = 'tie';
        } else if (computerMove === 'paper') {
            winner = 'computer';
        }  else if (computerMove === 'scissors') {
            winner = 'player';
        }    
    }
    while (playerMove === 'paper') {
        if (computerMove === 'rock') {
            winner = 'player';
        } else if (computerMove === 'paper') {
            winner = 'tie';
        } else if (computerMove === 'scissors') {
            winner = 'computer';
        }
    }
    while (playerMove === 'scissors') {
        if (computerMove === 'rock') {
            winner = 'computer';
        } else if (computerMove === 'paper') {
            winner = 'player';
        } else if (computerMove === 'scissors') {
            winner = 'tie';
        }
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    while ((playerWins < 5) && (computerWins < 5)) {
 
        var playerMove = getPlayerMove();
        var computerMove = getComputerMove();
        var winner = getWinner();

        console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
       
        if (winner === 'player') {
            playerWins += 1;
        } else if (winner === 'computer') {
            computerWins += 1;
        } else if (winner === 'tie') {
            playerWins = playerWins;
            computerWins = computerWins;
        }
        console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
    }
    return [playerWins, computerWins];
    
}

