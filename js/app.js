"use strict";

console.log("Good to go");

startQuiz();

function startQuiz() {
  alert("Lets play a game... ;)");
  questionOnex();
  questionTwox();
  questionThreex();
  questionFourx();
  questionFivex();
  questionSixx();
  questionSevenx();
}

function questionOnex() {
  alert("Ready? START!");

  var questionOne = prompt("Do I enjoy playing Kingdom Hearts?");

  var answerOne = questionOne.toUpperCase().trim();

  console.log(answerOne);

  if (answerOne === "YES" || answerOne === "Y") {
    alert("The correct answer is...YES");
  } else if (answerOne === "NO" || answerOne === "N") {
    alert("Sorry, wrong answer");
  } else {
    alert("Please answer: YES or NO");
  }
}

function questionTwox() {
  var questionTwo = prompt("Am I native to Iowa?");

  var answerTwo = questionTwo.toUpperCase().trim();

  console.log(answerTwo);

  if (answerTwo === "YES" || answerTwo === "Y") {
    alert("The correct answer is...YES");
  } else if (answerTwo === "NO" || answerTwo === "N") {
    alert("Sorry, wrong answer");
  } else {
    alert("Please answer: YES or NO");
  }
}

function questionThreex() {
  var questionThree = prompt("Is Lucario my favorite Pokemon");
  var answerThree = questionThree.toUpperCase().trim();
  console.log(answerThree);
  if (answerThree === "YES" || answerThree === "Y") {
    alert("The correct answer is...YES");
  } else if (answerThree === "NO" || answerThree === "N") {
    alert("Sorry, wrong answer");
  } else {
    alert("Please answer: YES or NO");
  }
}

function questionFourx() {
  var questionFour = prompt('Am I obsessed with collecting things?');
  var answerFour = questionFour.toUpperCase().trim();
  console.log(answerFour);
  if (answerFour === "YES" || answerFour === "Y") {
    alert("The correct answer is...YES");
  } else if (answerFour === "NO" || answerFour === "N") {
    alert("Sorry, wrong answer");
  } else {
    alert("Please answer: YES or NO");
  }
}

function questionFivex() {
  var questionFive = prompt("Is bacon my favorite food?");
  var answerFive = questionFive.toUpperCase().trim();
  console.log(answerFive);

  if (answerFive === "YES" || answerFive === "Y") {
    alert("The correct answer is...YES");
  } else if (answerFive === "NO" || answerFive === "N") {
    alert("Sorry, wrong answer");
  } else {
    alert("Please answer: YES or NO");
  }
}

function questionSixx() {
  var questionSix = prompt("Do I like Sonic the Hedgehog");
  var answerSix = questionSix.toUpperCase().trim();
  console.log(answerSix);

  if (answerSix === "YES" || answerFive === "Y") {
    alert("The correct answer is...YES");
  } else if (answerSix === "NO" || answerSix === "N") {
    alert("Sorry, wrong answer");
  } else {
    alert("Please answer: YES or NO");
  }
}

function questionSevenx() {
  var questionSeven = prompt("Do I enjoy Wizard 101?");
  var answerSeven = questionSeven.toUpperCase().trim();
  console.log(answerSeven);

  if (answerSeven === "NO" || answerSeven === "N") {
    alert("The correct answer is...NO");
  } else if (answerSeven === "YES" || answerSeven === "Y") {
    alert("Sorry, wrong answer");
  } else {
    alert("Please answer: YES or NO");
  }
}
// code looks good no changes needed