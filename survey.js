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
  "Would you be interested in participating in a loyalty program for our store?",
  "How did you hear about us?",
  "How likely are you to recommend our store to a friend or family member?",
  "How often do you buy shoes online versus in-store?",
  "How likely are you to shop at our store again?",
  "How often do you seek assistance from sales staff during your shopping experience?",
  "What do you consider the most important aspect when purchasing shoes (price, comfort, style, brand reputation, etc.)?",
  "On a scale of 1 to 10, how satisfied are you with the variety of shoe styles offered in our store?",
  "Have you returned any shoes? -> if yes ask why",
  "Rate your overall shopping experience 1-10 -> if below a 5 ask why",
  "Submit page"
];

const conditionalQuestions = [
  "We are sad to hear you had a bad experience. Please tell us why you had a bad experience.",
  "Please specify what shoes you returned and why so we can better our quality for you!"
];


const onStart = () => {
  document.getElementById('questionTitle').innerHTML = questions[0];
  document.getElementById('start-button').style.visibility='hidden';
  document.getElementById('fwd-btn').style.visibility='visible';
  document.getElementById('bck-btn').style.visibility='visible';
  document.getElementById('bck-btn').style.opacity=0.6;
}

// disable / enable buttons
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
  currQuestion;
  if (currQuestion === questions[1]) {
    enableBckBtn()  
  } else if (currQuestion === questions[10]) {
    disableFwdBtn()
  }
}

const onBck = () => {
  questionIndex--;
  const currQuestion = document.getElementById('questionTitle').innerHTML = questions[questionIndex];
  currQuestion;
  if (currQuestion === questions[0]) {
    disableBckBtn()
  } else if (currQuestion === questions[9]) {
    enableFwdBtn()
  }
}