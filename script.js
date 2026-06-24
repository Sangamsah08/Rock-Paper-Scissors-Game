let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userScore = document.querySelector("#userScore");
let compScore = document.querySelector("#compScore");

let userCount = 0;
let compCount = 0;

const drawGame = () => {
    msg.innerText = `Draw game. Play again!`;
    msg.style.backgroundColor = "#134E4A";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        userCount++;
        userScore.innerText = userCount;
    } else {
        msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
        compCount++;
        compScore.innerText = compCount;
    }
};

const genCompChoice = () => {
    let options = ["rock", "paper", "scissors"];
    const randIndx = Math.floor(Math.random() * 3);
    return options[randIndx];
}

const playGame = (userChoice) => {

    const compChoice = genCompChoice();

    if(userChoice === compChoice){
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock"){
            // comp - paper, scissors 
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper"){
            // comp - rock, scissors
            userWin = compChoice === "scissors" ? false : true;
        } else{
            userWin = compChoice === "rock" ? false : true;
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