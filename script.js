console.log("Welcome to rock, paper, scissors!")

function getComputerChoice(){
    return Math.floor(Math.random()*3)
}

function getHumanChoice(){
    let humanChoice = prompt("Choose: Rock, paper, scissors?")
    humanChoice = humanChoice.toUpperCase()
    while(humanChoice != "ROCK" && humanChoice != "PAPER" && humanChoice != "SCISSORS"){
        humanChoice = prompt("Invalid choice. Choose: Rock, paper, scissors?")
        humanChoice = humanChoice.toUpperCase()
    }

    switch(humanChoice){
        case "ROCK":
            humanChoice = parseInt(0)
            break;
        case "PAPER":
            humanChoice = parseInt(1)
            break;
        case "SCISSORS":
            humanChoice = parseInt(2)
            break;
    }
    return humanChoice
}

let computerChoice = 0
let humanChoice = 0
let humanScore = 0
let computerScore = 0


function playRound(computerChoice, humanChoice){
    
    computerChoice = getComputerChoice()
    humanChoice = getHumanChoice()

    let winner = ""
    let sum = computerChoice + humanChoice
    if (computerChoice == humanChoice){
        if (computerChoice == 0)
            console.log("COMPUTER and HUMAN chose ROCK")
        else if(computerChoice == 1)
            console.log("COMPUTER and HUMAN chose PAPER")
        else
            console.log("COMPUTER and HUMAN chose SCISSORS")
        winner = "NONE"
    }

    else if(computerChoice < humanChoice && sum == 1){
        console.log("COMPUTER chose ROCK and HUMAN chose PAPER!")
        winner = "HUMAN"
    }
    else if(computerChoice > humanChoice && sum == 1){
        console.log("HUMAN chose ROCK and COMPUTER chose PAPER!")
        winner = "COMPUTER"
    }

    else if(computerChoice < humanChoice && sum == 2){
        console.log("COMPUTER chose ROCK and HUMAN chose SCISSORS!")
        winner = "COMPUTER"
    }
    else if(computerChoice > humanChoice && sum == 2){
        console.log("HUMAN chose ROCK and COMPUTER chose SCISSORS!")
        winner = "HUMAN"
    }

    else if(computerChoice < humanChoice && sum == 3){
        console.log("COMPUTER chose PAPER and HUMAN chose SCISSORS!")
        winner = "HUMAN"
    }
    else if(computerChoice > humanChoice && sum == 3){
        console.log("HUMAN chose PAPER and COMPUTER chose SCISSORS!")
        winner = "COMPUTER"
    }
    return winner
}

for(let i = 1; i <= 5; i++){
    console.log("ROUND " + i)
    let roundWinner = playRound(computerChoice, humanChoice)
    if(roundWinner == "HUMAN")
        humanScore += 1
    else if(roundWinner == "COMPUTER")
        computerScore += 1
    else{
        humanScore += 0
        computerScore += 0
    }
    
    console.log(roundWinner + " wins this round!")
}

if(humanScore < computerScore)
    console.log("COMPUTER wins!")
else if(humanScore > computerScore)
    console.log("HUMAN wins!")
else
    console.log("It's a TIE!")