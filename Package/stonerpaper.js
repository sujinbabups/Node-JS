const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const choices = ['rock', 'scissors', 'paper', 'snake', 'water'];
const weights = {
    rock: 0.4,      // 40% chance
    scissors: 0.15, // 15% chance
    paper: 0.15,    // 15% chance
    snake: 0.15,    // 15% chance
    water: 0.15     // 15% chance
};

function playGame() {
    rl.question(`Choose one: ${choices.join(', ')}\n`, (userChoice) => {
        userChoice = userChoice.toLowerCase();

        if (!choices.includes(userChoice)) {
            console.log('Invalid choice! Please select again.');
            return playGame();
        }

        const computerChoice = getWeightedRandomChoice(choices, weights);
        const result = determineWinner(userChoice, computerChoice);

        console.log(`You chose ${userChoice}, computer chose ${computerChoice}. ${result}`);

        rl.question('Do you want to play again? (yes/no)\n', (answer) => {
            if (answer.toLowerCase() === 'yes') {
                playGame();
            } else {
                rl.close();
            }
        });
    });
}

function getWeightedRandomChoice(choices, weights) {
    const random = Math.random();
    let cumulativeWeight = 0;

    for (let i = 0; i < choices.length; i++) {
        cumulativeWeight += weights[choices[i]];
        if (random < cumulativeWeight) {
            return choices[i];
        }
    }
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a tie!";
    }

    let win = false;

    switch (userChoice) {
        case 'rock':
            if (computerChoice === 'scissors' || computerChoice === 'snake') {
                win = true;
            } else if (computerChoice === 'water') {
                win = false;
            }
            break;
        case 'scissors':
            if (computerChoice === 'paper' || computerChoice === 'snake') {
                win = true;
            } else if (computerChoice === 'rock' || computerChoice === 'water') {
                win = false;
            }
            break;
        case 'paper':
            if (computerChoice === 'rock') {
                win = true;
            } else if (computerChoice === 'scissors' || computerChoice === 'snake' || computerChoice === 'water') {
                win = false;
            }
            break;
        case 'snake':
            if (computerChoice === 'paper' || computerChoice === 'water') {
                win = true;
            } else if (computerChoice === 'rock' || computerChoice === 'scissors') {
                win = false;
            }
            break;
        case 'water':
            if (computerChoice === 'rock' || computerChoice === 'scissors' || computerChoice === 'paper') {
                win = true;
            } else if (computerChoice === 'snake') {
                win = false;
            }
            break;
        default:
            return "Invalid choice!";
    }

    return win ? 'You win!' : 'You lose!';
}

// Start the game
playGame();