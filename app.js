
function getComputerChoice(){
    let randomNumber = Math.ceil(3*Math.random());
    if (randomNumber === 1){
        return 'rock';
    }
    else if(randomNumber === 2){
        return 'paper';
    }
    else{
        return 'scissors';
    }
}

function getHumanChoice(messageAddOn){
    let choice = prompt(`${messageAddOn}What's your move? [r]ock, [p]aper, or [s]cissors?`, '');
    if (choice.toLowerCase() === 'r'){
        return 'rock';
    }
    else if (choice.toLowerCase() === 'p'){
        return 'paper';
    }
    else if (choice.toLowerCase() === 's'){
        return 'scissors'
    }
    else{
        throw new Error('Invalid choice. Type r, s, or p.\n');
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(){
    let humanChoice = null;
    let errorMessage = '';
    while (humanChoice === null){
        try{
            humanChoice = getHumanChoice(errorMessage);
        }
        catch(e){
            errorMessage = e;
        }
    }
    let computerChoice = getComputerChoice();

    let resultMessage = '';
    if (humanChoice === computerChoice){
        resultMessage = 'The game is a tie!';
    }
    else if(
        (humanChoice === 'rock' && computerChoice === 'scissors') || 
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper') 
    ){
        resultMessage = `You win! ${humanChoice} beats ${computerChoice}!`;
        humanScore++;
    }
    else{
        resultMessage = `The computer wins! ${computerChoice} beats ${humanChoice}!`;
        computerScore++;
    }

    console.log(`You chose ${humanChoice}. The computer chose ${computerChoice}. ${resultMessage}`);
}

function playGame(){
    for(let i=0; i<5; i++){
        playRound();
        console.log(`You have ${humanScore} points and the computer has ${computerScore} points.`);
    }
    if (humanScore > computerScore){
        console.log('You beat the computer!');
    }
    else if(humanScore < computerScore){
        console.log('The computer wins!');
    }
    else{
        console.log('Tie game!');
    }
}

playGame()
