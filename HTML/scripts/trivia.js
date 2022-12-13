
import { tq, gameObj } from './gameEngine.js';

var app = new Vue({
  el: "#app",
  data: {
    communicate: true,
    communication1: '',
    communication2: '',
  },
  methods: {
    playNewGame: function () {
      resetGame();
    }
  }
});

var highSc = new Vue({
  el: "#plyrScr",
  data: {
    displayHighScore: false,
    highScore: '0',
    roundNumber: '0',
    gameCount: '1',
    hintsRemaining: 3,
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontColor: 'Blue'
  }
});

var hints = new Vue({
  el: "#hint",
  data: {
    hintAvailable: false,
    displayHint: false,
    hintText: 'This is some text'
  },
  methods: {
    showHint: function () {
      hints.displayHint = true;
      let hintC = tq.getHintsLeft;
      hintC--;
      tq.setHintsLeft = hintC;
      highSc.hintsRemaining = hintC;
      hints.hintAvailable = false;
    },
    hideHint: function () {
      hints.displayHint = false;
    },
  }
});

var start = new Vue({
  el: "#start",
  data: {
    gameStarted: false,
  },
  methods: {
    startGame: function () {
      start.gameStarted = true;
      buttons.hidden = true;
      runGame();
    }
  }
})

var buttons = new Vue({
  el: "#buttons",
  data: {
    hidden: false,
  }
})

//Load trivia question object and create listeners on HTML Elements
fetchTriviaData();
const uiOption1 = document.getElementById("option1");
const uiOption2 = document.getElementById("option2");
const uiOption3 = document.getElementById("option3");
// const start = document.getElementById("start");
uiOption1.addEventListener("click", () => { tq.setPlayerAnswer = document.getElementById("option1").innerHTML });
uiOption2.addEventListener("click", () => { tq.setPlayerAnswer = document.getElementById("option2").innerHTML });
uiOption3.addEventListener("click", () => { tq.setPlayerAnswer = document.getElementById("option3").innerHTML });
uiOption1.addEventListener("click", () => { checkAnswer() });
uiOption2.addEventListener("click", () => { checkAnswer() });
uiOption3.addEventListener("click", () => { checkAnswer() });
// start.addEventListener("click", () => {runGame()});

//Fetch the trivia data
function fetchTriviaData() {
  let object = getMyData('./json/trivia.json')
    .then(response => {
      console.log(response)
      let data = response;
      gameObj.setTriviaQuestions = data;
      console.log(gameObj.getTriviaQuestions.Questions);
    });
};

//runs the game by iterating through rounds based on how many questions are in the json
let runGame = () => {
  let Round = gameObj.getRound;
  let numOfRounds = gameObj.getNumberOfRounds;
  app.communicate = true;
  highSc.displayHighScore = true;
  hints.hideHint();
  buttons.hidden = true;
  if (Round < numOfRounds) {
    let qRandomizer = gameObj.getqnumber;
    const random = Math.floor(Math.random() * qRandomizer.length);
    const newQNumber = qRandomizer.splice(random, 1);
    console.log(qRandomizer);
    buildRound(newQNumber);
    Round++;
    gameObj.setRound = Round;
    highSc.roundNumber = Round;
    console.log("Round = " + Round);
  } else {
    app.communication2 = "Game is Over and you got " + gameObj.getCorrectAnswers + " Correct!";
    app.communicate = false;
    buttons.hidden = false;
    hints.hintAvailable = false;
  }
};

let resetGame = () => {
  tq.setHintsLeft = 3;
  tq.setHighScore = gameObj.getCorrectAnswers;
  highSc.highScore = tq.getHighScore;
  highSc.hintsRemaining = tq.getHintsLeft;
  console.log("High score is " + highSc.highScore);
  gameObj.setRound = '0';
  gameObj.setCorrectAnswers = '0';
  gameObj.incrementGameCount;
  let gc = gameObj.getGameCount;
  gc++;
  gameObj.setGameCount = gc;
  highSc.gameCount = gc;
  app.communication1 = '',
    console.log("game count is " + plyrScr.gameCount)
  runGame();
};

function buildRound(i) {
  //Destructure Object
  const { question } = gameObj.getTriviaQuestions.Questions[i];
  const { option1 } = gameObj.getTriviaQuestions.Questions[i];
  const { option2 } = gameObj.getTriviaQuestions.Questions[i];
  const { option3 } = gameObj.getTriviaQuestions.Questions[i];
  const { answer } = gameObj.getTriviaQuestions.Questions[i];
  const { hint } = gameObj.getTriviaQuestions.Questions[i];
  tq.setAnswer = answer;
  tq.setQuestion = question;
  tq.sethint = hint;
  hints.hintText = tq.getHint;
  let options = [option1, option2, option3];
  // let Answer = answer;
  document.getElementById("question").innerHTML = tq.question;
  generateOptions(options);
};

//Anonymous function that takes an array input, iterates through it and randomizes the print to the DOM
const generateOptions = (array) => {
  let q = 1;
  while (array.length) {
    const random = Math.floor(Math.random() * array.length);
    const opt = array.splice(random, 1)[0];
    document.getElementById("option" + q).innerHTML = opt;
    q++;
  }
  if (tq.hintsLeft > 0) {
    hints.hintAvailable = true;
  } else {
    hints.hintAvailable = false;
    hints.hintText = "You used all 3 of your Hints!"
  }
};

function checkAnswer() {
  let correctAnswer = tq.getAnswer;
  let enteredAnswer = tq.playerAnswer;
  console.log(correctAnswer + " : " + enteredAnswer);
  if (tq.getAnswer === tq.playerAnswer) {
    console.log("CORRECT");
    app.communicate = true;
    app.communication1 = "That is Correct!";
    console.log(gameObj.getDisplayItem);
    let caCount = gameObj.getCorrectAnswers;
    caCount++
    gameObj.setCorrectAnswers = caCount;
    console.log("Current correct answer count is " + gameObj.getCorrectAnswers);
    runGame();
  } else {
    app.communication1 = "That is Incorrect! The answer was " + tq.answer;
    console.log();
    runGame();
  }
};

async function getMyData(url) {
  let response = await fetch(url);
  let Status = response.status;
  console.log(Status);
  console.log(response);
  //check response and either return data (200-success) or raise error alert
  if (Status === 200) {
    console.log('connection ok!')
    return response.json();
  } else {
    alert('Database is not connected')
  }
};

// let toggle = () => {

//   let toggleOption1 = document.getElementById("option1");
//   let hiddenOption1 = toggleOption1.getAttribute("hidden");
//   let toggleOption2 = document.getElementById("option2");
//   let hiddenOption2 = toggleOption2.getAttribute("hidden");
//   let toggleOption3 = document.getElementById("option3");
//   let hiddenOption3 = toggleOption3.getAttribute("hidden");

//   if (hiddenOption1) {
//     toggleOption1.removeAttribute("hidden");
//     toggleOption2.removeAttribute("hidden");
//     toggleOption3.removeAttribute("hidden");
//   } else {
//     toggleOption1.setAttribute("hidden", "hidden");
//     toggleOption2.setAttribute("hidden", "hidden");
//     toggleOption3.setAttribute("hidden", "hidden");
//   }
// }






