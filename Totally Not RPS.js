// Getting user input
function getUserChoice(userInput) {
    userInput = userInput.toLowerCase();
    if (userInput == 'bear' || userInput == 'gun' || userInput == 'human') {
        return userInput;
    }
    else {
        console.log('Read the instructions you goofus.');
    }
}

// Getting computer input
function getComputerChoice() {
    var randomAnimalList = ['bear', 'gun', 'human'];
    var randomNumber = Math.floor(Math.random() * 3);
    var randomComputerChoice = randomAnimalList[randomNumber];
    return randomComputerChoice;
}

// Determining winner I guess
function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'It\'s a tie y\'all';
    }
    if (userChoice === 'human') {
        if (computerChoice === 'bear') {
            return 'Pity, the computer wins via bear mauling.';
        }
        else {
            return 'Congrats, you disarmed the gun I think?';
        }
    }
    if (userChoice === 'bear') {
        if (computerChoice === 'gun') {
            return 'Shame, the computer wins by glocking you';
        }
        else {
            return 'You did it, you\'ve followed the rules of nature and mauled the human computer.';
        }
    }
    if (userChoice === 'gun') {
        if (computerChoice === 'human') {
            return 'Unfortunately, the computer dismembered you since you can\'t move because you\'re a gun.';
        }
        else {
            return 'You win by shooting the bear first somehow despite being just an unmoving gun.';
        }
    }
}

// Actually playing the silly thing
function playGame() {
    var promptUserChoice = prompt("Please choose bear, human, or gun");
    var userChoice = getUserChoice(promptUserChoice);
    console.log(userChoice);
    var computerChoice = getComputerChoice();
    console.log(computerChoice);
    return (determineWinner(userChoice, computerChoice));
}

playGame()
