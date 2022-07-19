var wins = 0;
var losses = 0;
var ties = 0;

//This is the function for the game
var playGame = function () {

    var userChoice = prompt(["R", " P", " S"]);

    if (!userChoice) {
        return;
    }

    //This forces the user to use uperrcase to match the computer choice
    userChoice = userChoice.toUpperCase();

    //This is the math for the computers choice for Rock, Papper or Scissors
    var computerChoice = Math.random();
    if (computerChoice <= 0.33) {
        computerChoice = "R";
    } else if (computerChoice <= 0.66) {
        computerChoice = "P";
    } else {
        computerChoice = "S";
    }
    //This alerts you to what the computer chose
    alert("The computer chose " + computerChoice);

    //This is your comparisons for win or lose
    if (userChoice === computerChoice) {
        ties++;
        alert("Its a Tie");
    }

    if (userChoice === "R") {
        if (computerChoice === "S") {
            wins++
            alert("User Wins!");
        } else {
            losses++;
            alert("Computer Wins");
        }
    }

    if (userChoice === "S") {
        if (computerChoice === "P") {
            wins++
            alert("User Wins!");
        } else {
            losses++;
            alert("Computer Wins");
        }
    }

    if (userChoice === "P") {
        if (computerChoice === "R") {
            wins++;
            alert("User Wins!");
        } else {
            losses++;
            alert("Computer Wins");
        }
    }


    //Alerts the player of the stats
    alert("Stats" + "\nWins: " + wins + "\nLosses: " + losses + "\nTies: " + ties);

    //This will ask the player if they want to play again
    var playAgain = confirm("play again?");

    if (playAgain) {
        playGame()
    }

}


//Call the function
playGame();
