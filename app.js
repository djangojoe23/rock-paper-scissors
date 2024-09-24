
function getComputerChoice(){
    randomNumber = Math.ceil(3*Math.random());
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

computerChoice = getComputerChoice()
