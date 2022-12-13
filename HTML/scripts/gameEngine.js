//module for game round question\answer and correct answers tracking
//Question & Answer set Object w\getters and setters
export const tq = {
    question: 'trivia question',
    answer: 'question answer',
    playerAnswer: 'An Answer',
    hint: 'A Hint',
    highScore: '0',
    hintsLeft: 3,
    
    get getHint() {
      return this.hint
  },
    set sethint(newHint){
      this.hint = newHint
    },
    get getQuestion() {
      return this.question
  },
    set setQuestion(newQuestion){
      this.question = newQuestion
    },
  set setAnswer(newAnswer) {
    this.answer = newAnswer
  },
    get getAnswer(){
      return this.answer
    },
    get getPlayerAnswer() {
      return this.playerAnswer
  },
    set setPlayerAnswer(newPlayerAnswer){
      this.playerAnswer = newPlayerAnswer
    },
    get getHighScore() {
      return this.highScore
  },
    set setHighScore(newHighScore){
      this.highScore = newHighScore
    },
    get getHintsLeft() {
      return this.hintsLeft
  },
    set setHintsLeft(newHintsLeft){
      this.hintsLeft = newHintsLeft
    },
  };
 
  
  //Game Object for round and correct answer tracking as well as loading Trivia questions into memory
  export const gameObj = {
    Round: '0',
    correctAnswers: '0',
    triviaQuestions: {},
    numberOfRounds: '10',
    displayItem: "This is a test string",
    gameCount: '1',
    qnumber : [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
    get getRound() {
      return this.Round
  },
    get getCorrectAnswers(){
      return this.correctAnswers
    },
    set setRound(newRound){
      this.Round = newRound
    },
    set setCorrectAnswers(newAnswerCount){
      this.correctAnswers = newAnswerCount
    },
    set setTriviaQuestions(newTriviaQuestions){
        this.triviaQuestions = newTriviaQuestions
    },
    get getTriviaQuestions() {
        return this.triviaQuestions
    },
    set setNumberOfRounds(newNumberOfRounds){
        this.numberOfRounds = newNumberOfRounds
    },
    get getNumberOfRounds() {
        return this.numberOfRounds
    },
    get getDisplayItem(){
      return this.displayItem
    },
    set setDisplayItem(newItem){
      this.displayItem = newItem
    },
    get getGameCount(){
      return this.gameCount
    },
    set setGameCount(newGameCount){
      this.gameCount = newGameCount
    },
     incrementGameCount(){
      this.gameCount = this.gameCount++
    },
    get getqnumber(){
      return this.qnumber
    },
    set setQNumber(newArray){
      this.qnumber = newArray
    },
  };

  

