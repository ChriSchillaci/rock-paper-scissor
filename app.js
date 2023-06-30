const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');

const changeText = document.getElementById('changing-text');

const scorePlayer = document.getElementById('score-player');
const scoreOpponent = document.getElementById('score-opponent');

const imgPlayer = document.getElementById('img-player');
const imgOpponent = document.getElementById('img-opponent');

const resetBtn = document.getElementById('reset');

let playerVictories = 0;
let opponentVictories = 0;

let playerMove = '';

const moves = ['rock', 'paper', 'scissors'];

const selectedMoveOpponent = () => {
    let opponentMove = Math.random();
    if (opponentMove <= 0.33) {
        opponentMove = moves[0];
        imgOpponent.src = 'rock_icon_alt.png'
    } else if (opponentMove <= 0.66) {
        opponentMove = moves[1];
        imgOpponent.src = 'paper_icon_alt.png'
    } else {
        opponentMove = moves[2];
        imgOpponent.src = 'scissors_icon_alt.png'
    };
    comparison(playerMove, opponentMove)
};

const comparison = (player, opponent) => {
    console.log(player)
    console.log(opponent)
    if (player === 'rock' && opponent === 'scissors' ||
        player === 'paper' && opponent === 'rock' ||
        player === 'scissors' && opponent === 'paper') {
        playerVictories = ++playerVictories;
        scorePlayer.innerHTML = playerVictories;
        changeText.innerHTML = '<div>You won!</div>';
    } else if (
        player === 'rock' && opponent === 'paper' ||
        player === 'paper' && opponent === 'scissors' ||
        player === 'scissors' && opponent === 'rock') {
            opponentVictories= ++opponentVictories;
            scoreOpponent.innerHTML = opponentVictories;
            changeText.innerHTML = '<div>You lost!</div>';
    } else {
        changeText.innerHTML = `<div>It's a tie!</div>`;
    }
};

const startOver = () => {
    playerVictories = 0;
    opponentVictories = 0;
    scorePlayer.innerHTML = playerVictories;
    scoreOpponent.innerHTML = opponentVictories;
    changeText.innerHTML = `<div>The scores have been reset</div>`
};


rockBtn.addEventListener('click', () => {
    playerMove = moves[0];
    imgPlayer.src = 'rock_icon.png'
});

paperBtn.addEventListener('click', () => {
    playerMove = moves[1];
    imgPlayer.src = 'paper_icon.png'
});

scissorsBtn.addEventListener('click', () => {
    playerMove = moves[2];
    imgPlayer.src = 'scissors_icon.png'
});

rockBtn.addEventListener('click', selectedMoveOpponent);
paperBtn.addEventListener('click', selectedMoveOpponent);
scissorsBtn.addEventListener('click', selectedMoveOpponent);
resetBtn.addEventListener('click', startOver);