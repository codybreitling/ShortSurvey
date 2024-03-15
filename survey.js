/*
  survey for store that sells shoes
  questions: 
    1) name
    2) age
    3) email
    4) address
    5) number
    6) How did you hear about us?
    7) How often do you buy shoes online versus in-store?
    8) How likely are you to shop at our store again?
    9) Rate your overall shopping experience 1-10 -> if below a 6 ask why
    10) Have you returned any shoes? -> if yes ask why
*/

let questionIndex = 0;
let conditionalQuestionIndex = 0;

// probably need to make this an array of objects ltr
const questions = [
  "name", 
  "age", 
  "email", 
  "address", 
  "number", 
  "How did you hear about us?",
  "How often do you buy shoes online versus in-store?",
  "How likely are you to shop at our store again?",
  "Rate your overall shopping experience 1-10 -> if below a 5 ask why",
  "Have you returned any shoes? -> if yes ask why",
  "Submit page"
];

const conditionalQuestions = [
  "We are sad to hear you had a bad experience. Why was your experience bad?",
  "Please specify what shoes you returned and why so we can better our quality for you!"
];


const onStart = () => {
  document.getElementById('questionTitle').innerHTML = questions[0];
  document.getElementById('start-button').style.visibility='hidden';
  document.getElementById('fwd-btn').style.visibility='visible';
  document.getElementById('bck-btn').style.visibility='visible';
  document.getElementById('bck-btn').style.opacity=0.6;
}

const enableFwdBtn = () => {
  document.getElementById('fwd-btn').style.opacity=1;
  document.getElementById('fwd-btn').style.cursor='pointer';
  document.getElementById('fwd-btn').style.pointerEvents='all';  
}

const disableFwdBtn = () => {
  document.getElementById('fwd-btn').style.opacity=0.6;
  document.getElementById('fwd-btn').style.cursor='allowed';
  document.getElementById('fwd-btn').style.pointerEvents='none';  
}

const enableBckBtn = () => {
  document.getElementById('bck-btn').style.opacity=1;
  document.getElementById('bck-btn').style.cursor='pointer';
  document.getElementById('bck-btn').style.pointerEvents='all';  
}

const disableBckBtn = () => {
  document.getElementById('bck-btn').style.opacity=0.6;
  document.getElementById('bck-btn').style.cursor='allowed';
  document.getElementById('bck-btn').style.pointerEvents='none';  
}


const onFwd = () => {
  questionIndex++;
  const currQuestion = document.getElementById('questionTitle').innerHTML = questions[questionIndex];

  // set question title to the questions index
  document.getElementById('questionTitle').innerHTML = questions[questionIndex]; 

  // check if we are on the second question, if so, enable the bck button
  if (currQuestion === questions[1]) {
    enableBckBtn()  
  }

  // check if we are on the submit page, if so, disable the fwd button
  if (currQuestion === questions[10]) {
    disableFwdBtn()
  }
}

const onBck = () => {
  questionIndex--;
  const currQuestion = document.getElementById('questionTitle').innerHTML = questions[questionIndex];

  // set question title to the questions index
  document.getElementById('questionTitle').innerHTML = questions[questionIndex]; 

  // check if we are on the first question, if so, disable the bck button
  if (currQuestion === questions[0]) {
    disableBckBtn()
  }

  // check if we are on the last question, if so, enable the fwd button
  if (currQuestion === questions[9]) {
    enableFwdBtn()
  }
}