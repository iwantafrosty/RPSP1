
let wins = 0;
let ties = 0;
let losses = 0;


let totalRounds = prompt("How many rounds do you want to play?");
totalRounds = parseInt(totalRounds); 


if (isNaN(totalRounds)) {
    alert("Please enter a valid number for rounds.");
} else {

    for (let round = 1; round <= totalRounds; round++) {
   
        let userChoice = prompt("Round " + round + ": Enter r for rock, p for paper, or s for scissors.");
        
   
        let computerChoice = Math.floor(Math.random() * 3); // 0, 1, or 2
        

        let computerChoiceStr;
        switch (computerChoice) {
            case 0:
                computerChoiceStr = 'r';
                break;
            case 1:
                computerChoiceStr = 'p';
                break;
            case 2:
                computerChoiceStr = 's';
                break;
        }
        
        
        if (userChoice === computerChoiceStr) {
            ties++;
            alert("It's a tie!");
        } else if ((userChoice === 'r' && computerChoiceStr === 's') ||
                   (userChoice === 'p' && computerChoiceStr === 'r') ||
                   (userChoice === 's' && computerChoiceStr === 'p')) {
            wins++;
            alert("You won!");
        } else {
            losses++;
            alert("You lost!");
        }
    }

    
    alert("Game over! Wins: " + wins + ", Ties: " + ties + ", Losses: " + losses);
}
