
//Automatically runs the game when "run" is clicked.
playToFive();

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
    move = move || getInput()
    return move;
}

function getComputerMove(move) {
    move = move || randomPlay();
    return move;
}

function getWinner(playerMove,computerMove) {
    var winner;
    if (playerMove === 'rock') {
        if (computerMove === 'rock') {
            winner = 'Tie';
        } else if (computerMove === 'paper') {
            winner = 'Computer';
        }  else if (computerMove === 'scissors') {
            winner = 'Player';
        }    
    } else if (playerMove === 'paper') {
        if (computerMove === 'rock') {
            winner = 'Player';
        } else if (computerMove === 'paper') {
            winner = 'Tie';
        } else if (computerMove === 'scissors') {
            winner = 'Computer';
        }
    } else if (playerMove === 'scissors') {
        if (computerMove === 'rock') {
            winner = 'computer';
        } else if (computerMove === 'paper') {
            winner = 'Player';
        } else if (computerMove === 'scissors') {
            winner = 'Tie';
        }
    } 
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;    
    while ((playerWins < 5) && (computerWins < 5)) {
        var playerMove = getPlayerMove();
        var computerMove = getComputerMove();
        var winner = getWinner(playerMove, computerMove); 
        if (winner === 'Player') {
            playerWins += 1;
        } else if (winner === 'Computer') {
            computerWins += 1;
        } else if (winner === 'Tie') {
            playerWins = playerWins;
            computerWins = computerWins;
        }
        console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
        if (winner != 'Tie') {
            console.log(winner + ' ' + 'wins!');
        } else {
            console.log('Draw!')
        }
        console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
    }
    return [playerWins, computerWins];
    
}
