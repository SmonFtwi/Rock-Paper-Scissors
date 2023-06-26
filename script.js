let playerCount = 0;
let computerCount = 0;
let roundsPlayed = 0;
let gameRunning = false;

function getComputerChoice() {
    var list = ['Rock', 'Paper', 'Scissors'];
    var randomIndex = Math.floor(Math.random() * list.length);
    return list[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        document.getElementById('tie').textContent =`This round is a tie: you select ${playerSelection} and the computer select ${computerSelection}`;
        return "tie";
    } else if (
        (playerSelection === 'Rock' && computerSelection === 'Scissors') ||
        (playerSelection === 'Scissors' && computerSelection === 'Paper') ||
        (playerSelection === 'Paper' && computerSelection === 'Rock')
    ) {
        playerCount++;
        document.getElementById('pCount').textContent = playerCount;
        document.getElementById('tie').textContent =`You have won: you select ${playerSelection} and the computer select ${computerSelection}`;
        return `You have won ${playerCount} round(s)`;
    } else if (
        (playerSelection === 'Scissors' && computerSelection === 'Rock') ||
        (playerSelection === 'Rock' && computerSelection === 'Paper') ||
        (playerSelection === 'Paper' && computerSelection === 'Scissors')
    ) {
        computerCount++;
        document.getElementById('cCount').textContent = computerCount;
        document.getElementById('tie').textContent =`You have lost: you select ${playerSelection} and the computer select ${computerSelection}`;
        return `The computer has won ${computerCount} round(s)`;
    } else {
        return "Invalid selection. Please choose 'Rock', 'Paper', or 'Scissors'.";
    }
}

function handlePlayerSelection(playerSelection) {
    if (!gameRunning) {
        return;
    }
  
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    roundsPlayed++;

    if (roundsPlayed >= 5) {
        endGame();
    }
}


function startGame() {
    playerCount = 0;
    computerCount = 0;
    roundsPlayed = 0;
    gameRunning = false;
    document.getElementById('pCount').textContent = '0';
    document.getElementById('cCount').textContent = '0';
    if (gameRunning) {
        return;
    }
  
    gameRunning = true;
}

function resetGame() {
    playerCount = 0;
    computerCount = 0;
    roundsPlayed = 0;
    gameRunning = false;
    document.getElementById('pCount').textContent = '0';
    document.getElementById('cCount').textContent = '0';
}

function endGame() {
    gameRunning = false;
    if(playerCount > computerCount){
        alert('Congratulations! You have won.')
    }
    if(playerCount < computerCount){
        alert('Sorry, you have lost.')
    }
}

function initializeGame() {
    document.getElementById('rock').addEventListener('click', function() {
        handlePlayerSelection('Rock');
    });

    document.getElementById('paper').addEventListener('click', function() {
        handlePlayerSelection('Paper');
    });

    document.getElementById('scissors').addEventListener('click', function() {
        handlePlayerSelection('Scissors');
    });

    document.getElementById('startButton').addEventListener('click', startGame);
    document.getElementById('resetButton').addEventListener('click', resetGame);
}

window.addEventListener('load', initializeGame);