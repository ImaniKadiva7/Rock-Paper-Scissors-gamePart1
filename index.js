const gameOptions = ["rock", "paper", "scissors"];
let computerPoints = 0,
 playerPoints = 0;

 //============================================================================================================================================
function checkUserWantingToPlay()
{
    let userChoice = confirm('Hi Welcome to Rock, Paper and Scissors game\nDesigned and developed by Imani Noah Kadiva\n\nDo you want to play');
    if(userChoice == false)
    {
        alert('Sorry to see you leave, please reload the page to start the game again');
    }
    else
    {
        return userChoice;
    }
}

//===========================================================================================

function askUsersName()
{
    let Name = window.prompt('Hi what is your name');
    if(Name == null)
    {
        alert('Sorry to see you leave, please reload the page to start the game again');
    }
    else if(Name == false)
    {
        alert('Please enter your name to continue');
        return askUsersName();
    }
    else
    {            
        console.log(Name);
        return Name;
    }
}

//========================================================================================

function computerPlay()
{
    let Random = gameOptions[Math.floor((Math.random() * gameOptions.length) + 0)];
    return Random;
}

//=====================================================================================

function userselectionOptions(Name)
{
    let playerSelection = window.prompt(`Hi ${Name}, Please type in a correct choice to play`);
    if(playerSelection == null)
    {
        alert('Sorry to see you leave, please reload the page to start the game again');
    }
    else if(playerSelection == false)
    {
        alert(`Sorry ${Name} please type in correct input`);
        userselectionOptions(Name);
    }
    else
    {
        return playerSelection.toLowerCase().trim();
    }
}

//======================================================================================================

function checkUserInputMatchingGameOptions(playerSelection)
{
    if((playerSelection == gameOptions[0] || playerSelection == gameOptions[1] || playerSelection == gameOptions[2]) && (playerSelection != null))
    {
        console.log(playerSelection);
        return playerSelection;
    }
    if(playerSelection != null && (playerSelection != gameOptions[0] || playerSelection != gameOptions[1] || playerSelection != gameOptions[2]))
    {
        alert(`Sorry please type in correct input`);
        playerSelection = userselectionOptions(Name);
        playerSelection = checkUserInputMatchingGameOptions(playerSelection);
    }
}

//================================================================================================

function playRound(playerSelection, computerSelection)
{
    let Messages = messageResponses(playerSelection, computerSelection);
    if( playerSelection == gameOptions[1] && computerSelection == gameOptions[2] )
    {
        return Messages.playerLoseMessage;
    }
    else if( playerSelection ==gameOptions[0] && computerSelection == gameOptions[2] )
    {
        return Messages.playerWinsMessage;
    }
    else if(playerSelection ==gameOptions[0] && computerSelection == gameOptions[1] )
    {
        return Messages.playerLoseMessage;
    }
    else if(playerSelection == gameOptions[2] && computerSelection == gameOptions[1] )
    {
        return Messages.playerLoseMessage;
    }
    else if(playerSelection == gameOptions[1] && computerSelection ==gameOptions[0] )
    {
        return Messages.playerWinsMessage;
    } 
    else if(playerSelection == gameOptions[2] && computerSelection ==gameOptions[0] )
    {
        return Messages.playerLoseMessage;
    }
    else
    {
        return Messages.gameTieMessage;
    }    
}

//========================================================================================================

function messageResponses(playerSelection, computerSelection)
{
    return { 
             playerWinsMessage: `You win this round, ${playerSelection} beats ${computerSelection} `,
             playerLoseMessage: `You loose this round, ${computerSelection} beats ${playerSelection} `,
             gameTieMessage: 'Its a tie there is no winner'
           }   
};

//==============================================================================================================

function game()
{
    for(let round = 0; round < 5;)
    {
        playerSelection = userselectionOptions(Name);
        if(playerSelection != undefined && playerSelection != null && playerSelection != false)
        {
            if(playerSelection == gameOptions[0] || playerSelection == gameOptions[1] || playerSelection == gameOptions[2])
            {
                console.log(allowGameToBePlayed(playerSelection, round));
                round += 1;
                if(round > 4)
                {
                    if(computerPoints > playerPoints)
                    {
                        console.log(`You lost the game with ${playerPoints} points while computer won with ${computerPoints} points`);
                        let replayTheGame = confirm(`You lost the game with ${playerPoints} points while computer won with ${computerPoints} points\n\nDo you want to play again`);
                        if(replayTheGame == true)
                        {
                            userselectionOptions(Name);
                            round = 0;
                        }
                        else
                        {
                            alert('Sorry to see you leave, please reload the page to start the game again');
                            break;
                        }
                    }
                    else if(playerPoints > computerPoints)
                    {
                        replayTheGame = confirm(`You won the game with ${playerPoints} points while computer lost with ${computerPoints} points\n\nDo you want to play again`);
                        if(replayTheGame == true)
                        {
                            userselectionOptions(Name);
                            round = 0;
                        }
                        else
                        {
                            alert('Sorry to see you leave, please reload the page to start the game again');
                            break;
                        }
                    }
                    else
                    {
                        replayTheGame = confirm(`It's a tie, You have ${playerPoints} points while computer has ${computerPoints} points\n\nDo you want to play again`);
                        if(replayTheGame == true)
                        {
                            userselectionOptions(Name);
                            round = 0;
                        }
                        else
                        {
                            alert('Sorry to see you leave, please reload the page to start the game again');
                            break;
                        }   
                    }
                }
            }
        }
        else
        {
            break;
        }
    }
}

//==============================================================================================

function allowGameToBePlayed(playerSelection, round)
{
    let computerSelection = computerPlay();
    let gameResults = playRound(playerSelection, computerSelection);
    let Responses = messageResponses(playerSelection, computerSelection);
    if(gameResults == Responses.playerLoseMessage)
    {
        computerPoints += 1;
    }
    else if(gameResults == Responses.playerWinsMessage)
    {
        playerPoints += 1;          
    }
    console.log(`${gameResults} at round ${round + 1}`);
    console.log(`Computer Points are ${computerPoints} and playerPoints are ${playerPoints}`);
}

//=======================================================================================================

userChoice = checkUserWantingToPlay(); // Ask the user if he or she wants to play
if(userChoice == true) // if the user wants to play
{
    Name = askUsersName(); // Ask the user to provide their name
    if(Name) // if name is provided
    {  
        game();     // start playing the game
    }
}























// const gameOptions = ["rock", "paper", "scissors"],
//       off = 2,
//       on = 0;


// function computerPlay()
// {
//     let computerSelection = gameOptions[Math.floor((Math.random() * gameOptions.length) + 0)];
//     return computerSelection;
// }






// function handlesUserGameRequestInputs()
// {
//     let yes = 1, no = 0;
//     let playerSelection = confirm("Hi this is a rock, paper and Scissors game, do you want to play?");
//     if (playerSelection) return  yes; else return no; 
// }
// function handleUserInputsWhilePlaying()
// {
//     playerSelection = window.prompt("This is a rock, paper, scissors game\nTo play this game make sure you type in only\n Rock,Paper or scissors\nor you wont be allowed to play the current round");
//     console.log(`You have selected ${playerSelection}`);
//     if(playerSelection != null)
//     {
//         playerSelection = playerSelection.toLowerCase().trim();
//         let gameLock = 1;
//         if((playerSelection == gameOptions[0] || playerSelection == gameOptions[1] || playerSelection == gameOptions[2]))
//         {
//             gameLock += 1;
//             return gameLock;
//         }
//         else
//         {
//             gameLock -= 1;
//             return gameLock;
//         }      
//     }
//     else
//     {
//         console.log("We are sorry to say goodbye, but good news you can restart the game by refreshing this page");
//         return -1;
//     }
// }
// let computerPoints = 0,
// playerPoints = 0;
// function evaluatePoints()
// {
//     let Messages = messageResponses(playerSelection, computerSelection);
//     let gameResults;
//     let i;
//     // for(i = 0;;)
//     // {
//     //     gameResults = playRound(playerSelection, computerSelection);
//     //     console.log(gameResults);
//     //     i +=1;        
//     // }
//     // if(gameResults == Messages.playerLoseMessage)
//     // {
//     //     computerPoints += 1;
//     // }
//     // else if(gameResults == Messages.playerWinsMessage)
//     // {
//     //     playerPoints += 1;          
//     // }
//     // else
//     // {
//     //     console.log(`Its a tie no winner of this round`);
//     // }
//     console.log(`playerPoints are: ${playerPoints}`, `computer points are: ${computerPoints}`);
//     return (computerPoints, playerPoints);
    
      
// }

// function checkWinner()
// {
//     computerPoints, playerPoints = evaluatePoints();
//     if(computerPoints > playerPoints)
//     {
//         return `You have Lost, Computer won with ${computerPoints} points`;
//     }
//     else if(computerPoints < playerPoints)
//     {
//         return `You have won with ${playerPoints} points against computers ${computerPoints} points`;
//     }
//     else
//     {
//         return "It's a tie game over";
//     }
// }
// function game()
// {
    
//     let userChoiceOfWantingToPlay = handlesUserGameRequestInputs();
//     if(userChoiceOfWantingToPlay == 1)
//     {
//         let errorFound = false;
//         do{
//             let inputText = handleUserInputsWhilePlaying();
//             if(inputText == on)
//             {
//                 alert("Wrong Input, Please try again");
//             }
//             else if(inputText == -1)
//             {
//                 break;
//             }
//             else
//             {
//                 //computerSelection = computerPlay();
//                 //console.log(`computer has selected ${computerSelection}`);
//                 //evaluatePoints();
//                 //checkWinner();
//                 /*--------------  MAIN LOOP HERE --------------------------------*/
//             }
//         }while(!errorFound)
//     }       
//     else
//     {
//         console.log("We are sorry that you dont want to play, Please reload the page to start the game again");
//     }
// }

// console.log(game());

// function game()
// {
//     let computerPoints = 0,
//         playerPoints = 0;

//     let comparePoints = -1;

//     let firstRound = 0,
//         secondRound = 1,
//         thirdRound = 2,
//         fourthRound = 3,
//         lastRound = 4;

//     let on = 0,
//         off = 2;
//         let state = 0;
        
//     switch(state)
//     {
//         case firstRound:
//             playerSelection = window.prompt("This is a rock, paper, scissors game - Round 1");
//             console.log(`You have selected ${playerSelection}`);
//             playerSelection = playerSelection.toLowerCase().trim();

//             let gameLockFirstRound = 1;
//             if((playerSelection == gameOptions[0] || playerSelection == gameOptions[1] || playerSelection == gameOptions[2]))
//             {
//                 gameLockFirstRound += 1;
//             }
//             else
//             {
//                 gameLockFirstRound -= 1;
//             }

//             if(gameLockFirstRound == off)
//             {
//                 computerSelection = computerPlay();
//                 //console.log(`computer has selected ${computerSelection}`);
//                 let gameResultsRoundOne = playRound(playerSelection, computerSelection);
//                 console.log(gameResultsRoundOne);
//                 let playerWinsMessageR1 = `You win, ${playerSelection} beats ${computerSelection} `;
//                 let playerLoseMessageR1 = `You loose, ${computerSelection} beats ${playerSelection} `;
//                 //console.log(`first round results ${gameResultsRoundOne} at round ${state+=1}`);
//                 if(playRound(playerSelection, computerSelection) == messageResponses(playerSelection, computerSelection).playerLoseMessage)
//                 {
//                     computerPoints += 1;
//                     console.log(`computerPoints are ${computerPoints}`);
//                     state +=1;
//                 }
//                 else if(playRound(playerSelection, computerSelection) == messageResponses(playerSelection, computerSelection).playerWinsMessage)
//                 {
//                     playerPoints += 1;
//                     console.log(`playerPoints are ${playerPoints}`);
//                     state +=1;
//                 }
//                 //else
//                 //{
//                 //    state = firstRound;
//                 //}
//             }
//             else if(gameLockFirstRound == on)
//             {
//                 alert('Wrong Input, Please try again');
//                 state = firstRound;
//                 break;
//             }
//             break;

//         case secondRound:
//             playerSelection = window.prompt("This is a rock, paper, scissors game - Round 2");
//             console.log(`You have selected ${playerSelection}`);
//             playerSelection = playerSelection.toLowerCase().trim();
                
//             let gameLockSecondRound = 1;
//             if((playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors"))
//             {
//                 gameLockSecondRound += 1;
//             }
//             else
//             {
//                 gameLockSecondRound -= 1;
//             }

//             if(gameLockSecondRound == off)
//             {
//                 computerSelection = computerPlay();
//                 console.log(`computer has selected ${computerSelection}`);
//                 let gameResultsRoundTwo = playRound(playerSelection, computerSelection);
//                 let playerWinsMessageR2 = `You win, ${playerSelection} beats ${computerSelection} `;
//                 let playerLoseMessageR2 = `You loose, ${computerSelection} beats ${playerSelection} `;
//                 console.log(`second round results ${gameResultsRoundTwo} at round ${state+=1}`);

//                 if(gameResultsRoundTwo == 'playerLoseMessage')
//                 {
//                     computerPoints += 1;
//                     console.log(`computerPoints are ${computerPoints}`);
//                     state = thirdRound;
//                 }
//                 else if(gameResultsRoundTwo == 'playerWinsMessage')
//                 {
//                     playerPoints += 1;
//                     console.log(`playerPoints are ${playerPoints}`);
//                     state = thirdRound;
//                 }
//                 else
//                 {
//                     state = secondRound;
//                 }
//             }
//             else if(gameLockSecondRound == on)
//             {
//                 alert('Wrong Input, Please try again');
//                 state = secondRound;
//             }              
//             break;
//         case thirdRound:
//             playerSelection = window.prompt("This is a rock, paper, scissors game - Round 3");
//             console.log(`You have selected ${playerSelection}`);
//             playerSelection = playerSelection.toLowerCase().trim();
                
//             let gameLockThirdRound = 1;
//             if((playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors"))
//             {
//                 gameLockThirdRound += 1;
//             }
//             else
//             {
//                 gameLockThirdRound -= 1;
//             }

//             if(gameLockThirdRound == off)
//             {
//                 computerSelection = computerPlay();
//                 console.log(`computer has selected ${computerSelection}`);
//                 let gameResultsRoundThree = playRound(playerSelection, computerSelection);
//                 let playerWinsMessageR3 = `You win, ${playerSelection} beats ${computerSelection} `;
//                 let playerLoseMessageR3 = `You loose, ${computerSelection} beats ${playerSelection} `;
//                 console.log(`third round results ${gameResultsRoundThree} at round ${state+=1}`);

//                 if(gameResultsRoundThree == 'playerLoseMessage')
//                 {
//                     computerPoints += 1;
//                     console.log(`computerPoints are ${computerPoints}`);
//                     state = fourthRound;
//                 }
//                 else if(gameResultsRoundThree == 'playerWinsMessage')
//                 {
//                     playerPoints += 1;
//                     console.log(`playerPoints are ${playerPoints}`);
//                     state = fourthRound;
//                 }
//                 else
//                 {
//                     state = thirdRound;
//                 }
//             }
//             else if(gameLockThirdRound == on)
//             {
//                 alert('Wrong Input, Please try again');
//                 state = thirdRound;
//             } 
//             break;
//         case fourthRound:
//             playerSelection = window.prompt("This is a rock, paper, scissors game - Round 4");
//             console.log(`You have selected ${playerSelection}`);
//             playerSelection = playerSelection.toLowerCase().trim();
                
//             let gameLockFourthRound = 1;
//             if((playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors"))
//             {
//                 gameLockFourthRound += 1;
//             }
//             else
//             {
//                 gameLockFourthRound -= 1;
//             }

//             if(gameLockFourthRound == off)
//             {
//                 computerSelection = computerPlay();
//                 console.log(`computer has selected ${computerSelection}`);
//                 let gameResultsRoundFour = playRound(playerSelection, computerSelection);
//                 let playerWinsMessageR4 = `You win, ${playerSelection} beats ${computerSelection} `;
//                 let playerLoseMessageR4 = `You loose, ${computerSelection} beats ${playerSelection} `;
//                 console.log(`fourth round results ${gameResultsRoundFour} at round ${state}`);

//                 if(gameResultsRoundFour == 'playerLoseMessage')
//                 {
//                     computerPoints += 1;
//                     console.log(`computerPoints are ${computerPoints}`);
//                     state = lastRound;
//                 }
//                 else if(gameResultsRoundFour == 'playerWinsMessage')
//                 {
//                     playerPoints += 1;
//                     console.log(`playerPoints are ${playerPoints}`);
//                     state = lastRound;
//                 }
//                 else
//                 {
//                     state = fourthRound;
//                 }
//             }
//             else if(gameLockFourthRound == on)
//             {
//                 alert('Wrong Input, Please try again');
//                 state = fourthRound;
//             } 
//             break;
//         case lastRound:
//             playerSelection = window.prompt("This is a rock, paper, scissors game - Round 5");
//             console.log(`You have selected ${playerSelection}`);
//             playerSelection = playerSelection.toLowerCase().trim();
                
//             let gameLockLastRound = 1;
//             if((playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors"))
//             {
//                 gameLockLastRound += 1;
//             }
//             else
//             {
//                 gameLockLastRound -= 1;
//             }

//             if(gameLockLastRound == off)
//             {
//                 computerSelection = computerPlay();
//                 console.log(`computer has selected ${computerSelection}`);
//                 let gameResultsRoundFive = playRound(playerSelection, computerSelection);
//                 let playerWinsMessageR5 = `You win, ${playerSelection} beats ${computerSelection} `;
//                 let playerLoseMessageR5 = `You loose, ${computerSelection} beats ${playerSelection} `;
//                 console.log(`fifth round results ${gameResultsRoundFive} at round ${state+=1}`);

//                 if(gameResultsRoundFive == 'playerLoseMessage')
//                 {
//                     computerPoints += 1;
//                     console.log(`computerPoints are ${computerPoints}`);
//                     state = comparePoints;
//                 }
//                 else if(gameResultsRoundFive == 'playerWinsMessage')
//                 {
//                     playerPoints += 1;
//                     console.log(`playerPoints are ${playerPoints}`);
//                     state = comparePoints;
//                 }
//                 else
//                 {
//                     state = lastRound;
//                 }
//             }
//             else if(gameLockLastRound == on)
//             {
//                 alert('Wrong Input, Please try again');
//                 state = lastRound;
//             } 
//             break;
//     }
//     if(state == comparePoints)
//     {
//         if(playerPoints > computerPoints)
//         {
//             alert('Game Over: You have won the game - Reload this page to restart the game');
//             return 'Game Over: You have won the game';
//         }
//         else if(computerPoints > playerPoints)
//         {
//             alert('Game Over: You have lost the game - Reload this page to restart the game');
//             return 'Game Over: You have lost the game';
//         }
//         else
//         {
//             alert('Game Over: It\'s a Tie - Reload this page to restart the game');
//             return 'Game Over: It\'s a Tie';
//         }
//     } 
// }