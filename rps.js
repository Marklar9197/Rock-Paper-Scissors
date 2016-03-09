    // We want to create a Rock Paper Scissors game that accepts user input and plays rock paper scissors with the computer 5 times. 
    // We want to calculate the player's score and the cpu score.
    // We want to take these values and see who won.

    //Variable Declarations//

    var userScore = 0;
    var computerScore = 0;
    var finished = false;

    //Do While Statement//

    do {
        var userChoice = getInput();
        var computerChoice = randomPlay();
        var gameResult = compare(userChoice, computerChoice);
        alert(gameResult);
    } while (!finished);

    alert('Thanks for playing - User Score ' + userScore + ' Computer Score ' + computerScore);

    //List of Functions//

    function getInput() {
        do {
            var answer = prompt("Please choose Rock-1 Paper-2 or Scissors-3");
        } while (answer != 1 && answer != 2 && answer != 3);
        return answer;
    }

    function randomPlay() {
        var randomNumber = Math.random();
        if (randomNumber < 0.33) {
            return 1;
        }
        if (randomNumber < 0.66) {
            return 2;
        } else {
            return 3;
        }
    }

    function compare(userChoice, computerChoice) {
        alert(userChoice + ' picked by user');
        alert(computerChoice + ' picked by computer');
        var decision = ((userChoice - computerChoice) + 3) % 3;

        if (decision == 0) {
            return "It's a tie!!!";

        } else if (decision == 1) {
            finished = score('player');
            return "You win! UC is " + userScore + computerScore;
        } else {
            finished = score('cpu');
            return "You lose UC is " + userScore + computerScore;

        }

    }

    function score(winner) {
        if (winner == 'player') {
            userScore++;
            if (userScore == 5) {
                return true;
            }
        }
        if (winner == "cpu") {
            computerScore++;
            if (computerScore == 5) {
                return true;
            }
        }

        return false;
    }