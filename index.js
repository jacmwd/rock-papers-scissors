
const choices = ["rock", "paper", "scissors"];
let score = { player: 0, computer: 0};


//describes outcome of each round
const parentE1 = document.getElementById("parent");
const createE1 = document.createElement("div");
parentE1.appendChild(createE1);

//running score
const parentE2 = document.getElementById("scoreboard");
const createE2 = document.createElement("div");
parentE2.appendChild(createE2);

//outcome of the game after 5 rounds
const parentE3 = document.getElementById("gameverdict");
const createE3 = document.createElement("div");
parentE3.appendChild(createE3);



function computerPlay() {
    let random = Math.floor(Math.random() * choices.length);
    let randomSelection = choices[random];
    console.log(randomSelection);
    return randomSelection;
};

function playRound(playerSelection) {
    let computerSelection = computerPlay();
    const result = choices.indexOf(playerSelection) - choices.indexOf(computerSelection);

    if (result === 1 || result === -2) {
        score.player += 1;

        createE1.innerHTML = `It's ${playerSelection} beats ${computerSelection}! You win!`;
        createE2.innerHTML = `Player: ${score.player} Computer: ${score.computer}`;
    }

    if (result === -1) {
        score.computer += 1;

        createE1.innerHTML = `It's ${computerSelection} beats ${playerSelection}! You lose!`;
        createE2.innerHTML =`Player: ${score.player}  Computer: ${score.computer}`;
    }

    if (result === 0) {

        createE1.innerHTML = `It's ${playerSelection} against ${computerSelection}! It's a draw! No one wins!`;
        createE2.innerHTML = `Player: ${score.player} Computer: ${score.computer}`;

    }

    //once either player reaches 5 pts, announce the winner

    if (score.player === 5 || score.computer === 5) {
        if (score.player > score.computer) {
            createE3.innerHTML = "You are the winner!";
        } else {
            createE3.innerHTML = "The computer is the winner!";
        }
        rock.setAttribute("disabled", 1);
        paper.setAttribute("disabled", 1);
        scissors.setAttribute("disabled", 1);
    }
    
}

const reset = document.querySelector("#reset");
reset.addEventListener("click", () => {
    newGame();
});

function newGame() {
    score.player = 0;
    score.computer = 0;

    createE1.innerHTML = "";
    createE2.innerHTML = `Player: ${score.player} Computer:${score.computer}`;
    createE3.innerHTML = "";
    //player cannot make another selection when game finishes
    //can only reset the game
    rock.removeAttribute("disabled");
    paper.removeAttribute("disabled");
    scissors.removeAttribute("disabled");
}

//buttons for each player selection

const rock = document.querySelector("#rock");
rock.addEventListener("click", () => {
    playRound("rock");
});

const paper = document.querySelector("#paper");
paper.addEventListener("click", () => {
    playRound("paper");
});

const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", () => {
    playRound("scissors");
});




