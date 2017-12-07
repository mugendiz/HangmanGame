// Variables

var level1Answers = ["g", "i", "n", "g", "e", "r", "c", "o", "o", "k", "i", "e", "s"];
var level2Answers = ["c", "h", "i", "c", "k", "e", "n", "w", "i", "n", "g", "s"];
var level3Answers = ["f", "r", "e", "n", "c", "h", "f", "r", "i", "e", "s"];
var level4Answers = ["s", "a", "l", "a", "d", "d", "r", "e", "s", "s", "i", "n", "g"];
var level5Answers = ["n", "e", "e", "d", "t", "o", "w", "a", "s", "h", "d", "i", "s", "h", "e", "s"];

var userChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "t", "u", "v", "w", "x", "y", "z", " "];

var wins = 0;
var losses = 0;
var wrongInput = [];
var correctInput = [];

var congratulationsMsg;
var levels;
var userGuess;
var gameOverScreen;
var misses;

// On key up for user pressing key

if (userGuess === [-1]) {
  this.push = userGuess;
  console.log("wrong");
} else {
  console.log("correct");
}


var userText = document.getElementById("user-input");
console.dir(userText);

if (userChoices === correctInput) {
  document.push;
} else {
  var wrongInput = document.createElement(misses);
}

document.onkeyup = function(event) {
  var userGuess = event.key;
  var guessIndex = level1Answers.indexOf(userGuess);
  console.log(guessIndex)
}

if (correctInput === (userGuess)) {
  console.log("#correct");
  document.push(createElement("#correct"))
}





////// TEST AREA

//
//   document.getElementById("userText").innerHTML = (userGuess);
// };
//
// var levels = [level1Answers, level2Answers, level3Answers, level4Answers, level5Answers]
//
// for (var i = 0; i < level1Answers.length; i++) {
//   Math.floor(Math.random.levels);
//   document.push(wordOneDiv);
//
//
//   if (user - input === level1Answers[i]); {
//     document.push.correctInput;
//   } else {
//     wrongInput.push([inner.wrongInput]);
//   }
// }


/////// TEST AREA


//
// var userGuess = document.createElement("div");
// parent.append("");
//
// console.log(parent.textContent);

//
// var correctInput = [];
// var wrongInput = [];
// ('div').append('correctInput');
// ('div').append("wrongInput");


//
// var attempts =  document.getElementById("attempts");
//   console.dir(userText)
//
//   document.attempts("userText");


// userText.push(userText);

// var syoreHTML =
//         "<p>You chose: " + userChoices + "</p>" +
//         "<p>Number of tries remaining: " + userChoices.length -1 "</p>" +
//


// "<p>wins: " + wins + "</p>" +
// "<p>losses: " + losses + "</p>" +
// "<p>ties: " + ties + "</p>";

// document.onkeypress = function(event) {
//
//   document.write userChoices === level1Answers event.key;


//   if userChoices === level1Answers {
//     document.write (level1Answers);
//
//     else if userChoices > (level1Answers * 10); {
//       document.write ("sorry, try again!");
//       } {
//         else {
//           document.write ("level 2" && document.write(level2Answers.hidden));
//         }
// }



// function level1 (userChoices === level1Answers) {
//   document.getElementById("level1Answers") document.write{level1Answers};
//   }}
