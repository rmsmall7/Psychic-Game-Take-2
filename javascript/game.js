// Thought process for this javascript practice
// establish an array variable for all letters.  This is where the random letter will come from 
// create variables for wins, losses, letters used, number of guesses limit and the random letter
// display wins, losses and guesses on 
// create an event key to start the game 
//  create if statements
//    one for correct letter
//    one for wrong letter
//  create function to add wins or losses to the current total score
//  restart game after user wins or losses but do not reset the current score


// as noted above-  this is the array that the random letter will come from
var letters = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm']

// wins and losses variables-  I am starting this at 0 and will add to this as the user wins 
var wins = 0;
var losses = 0;
var random = [];
// this variable is the number of guesses the user has before the game is over
var tally = 10;

// this is the variable to track the letters the user has guessed.  
var userLetters = [];

// this is where the wins and losses will display on the webpage.  I found the example that I am using from W3schools examples   I used the 1st example as a pattern- https://www.w3schools.com/js/js_output.asp
//  this was the first try at displaying wins on the html.  but this removed the word "wins" from the html.
// document.getElementById("wins").innerHTML = wins;
// I found an example on stack overflow that allowed me to add "wins" and the score from javascript.  I patterned my code after the example I found at https://stackoverflow.com/questions/30008510/how-to-display-the-users-game-score-on-screen-in-realtime-instead-of-in-an-ale.  this took me several tries to get the "Wins: " + wins to display correctly.   at frist I had ("wins" = wins) but this didn't work.
document.getElementById("wins").innerHTML = "Wins: " + wins;

// using the same code as above for losses 
document.getElementById("losses").innerHTML = "Losses: " + losses;

//using the same code to display the number of guess 
document.getElementById("tally").innerHTML = "Guesses left: " + tally;

// using the above code to push the letters used to the html
//document.getElementById("userGuess").innerHTML = "userGuess: " + guesses; 

// Generating a random letter from the array list in "var letters".   I want to use the math.floor process but had a diffuclt time remembering the exact code.  I searched several sites and found an example on https://www.geeksforgeeks.org/javascript-math-random-function/.
//var random = [Math.floor(Math.random() * letters.length)];
//console.log(random); 

// I could not get the above code to generate a letter.  I kept getting random numbers returned.  I decided to use a function with math.random, console and results instead of the code above.  I reviewd functions in w3schools (https://www.w3schools.com/js/js_functions.asp) and random number generator (https://www.w3schools.com/js/js_random.asp) to create the code below.

function randomLetters() {
  result = letters[Math.floor(Math.random() * letters.length)];
  // I wanted to make sure a random letter was generating.  Instead of displaying on the html I console logged this so I can verify
  console.log(result);
  return result;
}
// this runs the function above
randomLetters();

//I need to create a function that will track the users clicks.  Once the user clicks a button (letter) then I want the following to happen:  
    // the users' input is logged in the html
    // the number of users guess remaing decrements 
    // the users' input is compared to the random letter:  
        //if the letter is the same the user wins-  There will be an alert displayed to the user, the number of wins will increase by 1 and game rests.  
        //if the letter is not the same the user loses-  There will be an alert displayed to the user, the number of losses will decrease by 1 and game rests.
        //user will be able to continue to guess until the guess counter reaches 0.  
          // there will a prompt that will display the correct letter to the user
          // the game will reset and the lossess number will increase  
        // note:  when the game rests the random letter will change but the win/ losses score will not reset
// websites visited to develop this:  https://www.w3schools.com/jsref/event_onkeypress.asp    I used https://www.w3schools.com/js/js_events_examples.asp to get familiar wtih "onkeypress"    

//will start this with document-  since I do not have a button on the DOM.  I want the user to be able to click any letter without having to click a button.  I want a fucntions below to run once a letter is clicked 

//to begin the funtion code I reviewed https://www.w3schools.com/js/js_functions.asp and used the examples listed...

document.onkeypress = function (event) {
  //creating a var for the users letter selected
  var guessedLetters = event.key;
   //I verifed these letters are tracking without error using the console log
  console.log (guessedLetters);

  //witin the onkeypress function -  this is where I will create the if and else statements.  These will compare the random letter to the user selected letter.  I reviewed https://www.w3schools.com/js/js_if_else.asp to get the if's and elseif statements to work 

  //If the user and random letter matches on the first guess---

  if (guessedLetters === result) {

    //wins to increase by 1

    //wins=1;  --  this was the first try.  this worked well the first time the user won the game but not when they won more than once.
   
   //chaged wins=1 to wins++    this worked to increase the winning numbers greater than 1
    wins++;

    //checking to ensure the wins variable increases by 1
    console.log(wins);

    //guessed letters does not need to display to user.  so this will stay the same
    userLetters = [];

    //display the wins var total on the DOM
    document.getElementById("wins").innerHTML = "Wins: " + wins;

    //need to ensure the guess counter is reset
    tally = 10;

    //display winning message to the user.  Found an example on https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt related to alerting the user
    alert("You Won!  Click any key to try again!");

    //reset the randomLetter
    randomLetters();
  }

  //  with the if/ else statements --  using https://www.w3schools.com/js/js_if_else.asp examples as guides
  // if the user guess doesn't match the random letter
  else {
    
    //decrease the number of guess limit by one with every guess.  used the same format as wins from above
    tally--;

    //display the number of guesses remaing 
    document.getElementById("tally").innerHTML = "Number of guesses remaining: " + tally;

    //display message to user that they picked the wrong letter
    alert('Wrong letter-  Click "OK" to continue');

    //log the letter selected by the user in the guessed letters array.. do this by using push
    userLetters.push(guessedLetters);
    console.log(userLetters);

    //display the letters the user has selected in error
    document.getElementById("userLetters").innerHTML = "Letters guessed so far: " + userLetters;

  }
  
  // this if will need to run once the guesses remaining counter hits 0.  The game will end

  if (tally === 0) {

    //alert the user they lost the game 
    alert('You lost!!  Click "OK" to try again')

    // this will reset the random letter for the user to guess again
    randomLetters();
    
    //reset letters guessed =  copied this from the wins section
    userLetters = [];
    guessedLetters = [];
 
    //reset the guesses remaining to 10
    tally = 10;
    
    //update the lost score by 1
    losses++;

    //display the wins var total on the DOM
    document.getElementById("losses").innerHTML = "Losses: " + losses;
   
    

    
  }

 
}




